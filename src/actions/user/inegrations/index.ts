"use server";

import { client } from "@/lib/prisma";
import { redirect } from "next/navigation";

export const updateIntegration = async (
  token: string,
  expire: Date,
  id: string
) => {
  return await client.integrations.update({
    where: { id },
    data: {
      token,
      expiresAt: expire,
    },
  });
};

export const onOAuthInstagram = (
  strategy: "INSTAGRAM" | "TELEGRAM" | "X" | "WHATSAPP"
) => {
  if (strategy === "INSTAGRAM") {
    return redirect(process.env.INSTAGRAM_EMBEDDED_OAUTH_URL as string);
  }
};
