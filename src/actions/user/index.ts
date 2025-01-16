"use server";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { createUser, findUser, updateSubscription } from "./queries";
import { refreshToken } from "@/lib/fetch";
import { updateIntegration } from "./inegrations";
import { stripe } from "@/lib/stripe";
// import { stripe } from "@/app/(protected)/api/payment/route";

export const onCurrentUser = async () => {
  const user = await currentUser();

  if (!user) return redirect("/sign-in");

  return user;
};

export const onBoardUser = async () => {
  const user = await onCurrentUser();
  try {
    const found = await findUser(user.id);
    if (found) {
      if (found.integrations.length > 0) {
        const today = new Date();
        const time_left =
          found.integrations[0].expiresAt?.getTime()! - today.getTime();

        const days = Math.round(time_left / (1000 * 3600 * 24));

        if (days < 5) {
          console.log("Refresh");
          const refresh = await refreshToken(found.integrations[0].token);

          const today = new Date();
          const expire_date = today.setDate(today.getDate() + 60);
          const updateToken = await updateIntegration(
            refresh.access_token,
            new Date(expire_date),
            found.integrations[0].id
          );

          if (!updateToken) console.log("Update Token Failed");
        }
      }
      return {
        status: 200,
        data: {
          firstname: found.firstname,
          lastname: found.lastname,
        },
      };
    }

    const created = await createUser(
      user.id,
      user.firstName!,
      user.lastName!,
      user.emailAddresses[0].emailAddress!
    );

    return { status: 201, dat: created };
  } catch (error) {
    console.log(error);
    return { status: 500 };
  }
};

export const onUserInfo = async () => {
  const user = await onCurrentUser();
  try {
    const profile = await findUser(user.id);

    if (profile) return { status: 200, data: profile };

    return { status: 404 };
  } catch (error) {
    return { status: 500 };
  }
};

export const onSubscribe = async (session_id: string) => {
  const user = await onCurrentUser();

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);

    if (session) {
      const subscribed = await updateSubscription(user.id, {
        customerId: session.customer as string,
        plan: "PRO",
      });

      if (subscribed) return { status: 200}
      return { status: 401}
    }
    return { status: 404}
  } catch (error) {
    return { status: 500 }
  }
};