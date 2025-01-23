"use server";

import { InstagramPost } from "@/hooks/use-automation";
import { onCurrentUser } from "../user";
import { findUser } from "../user/queries";
import {
  addKeyword,
  addListener,
  addPost,
  addTrigger,
  createAutomation,
  deleteKeywordQuery,
  findAutomation,
  getAutomations,
  updateAutomation,
} from "./queries";
import { InstagramPostProps } from "@/types/posts.type";

export const createAutomations = async (id?: string) => {
  const user = await onCurrentUser();

  try {
    const create = await createAutomation(user.id, id);
    if (create) return { status: 200, data: "Automation created" };
    return { status: 400, data: "Oops! Something went wrong" };
  } catch (error) {
    return { status: 500, data: "Internal Server Error 1" };
  }
};

export const getAllAutomations = async () => {
  const user = await onCurrentUser();

  try {
    const automations = await getAutomations(user.id);
    if (automations) return { status: 200, data: automations.automations };

    return { status: 404, data: [] };
  } catch (error) {
    return { status: 500, data: [] };
  }
};

export const getAutomationInfo = async (id: string) => {
  await onCurrentUser();

  try {
    const automation = await findAutomation(id);
    if (automation) return { status: 200, data: automation };
    return { status: 404 };
  } catch (error) {
    return { status: 500 };
  }
};

export const updateAutomationName = async (
  automationId: string,
  data: {
    name?: string;
    active?: boolean;
    automation?: string;
  }
) => {
  await onCurrentUser();

  try {
    const update = await updateAutomation(automationId, data);
    if (data) return { status: 200, data: "Automation successfully updated" };
    return { status: 404, data: "Oops! Something went wrong" };
  } catch (error) {
    return { status: 500, data: "Internal Server Error 2" };
  }
};

export const saveListener = async (
  automationId: string,
  listener: "SMARTAI" | "MESSAGE",
  prompt: string,
  reply?: string
) => {
  await onCurrentUser();

  try {
    const create = await addListener(automationId, listener, prompt, reply);
    if (create) return { status: 200, data: "Listener created" };
    return { status: 404, data: "Cant save listener" };
  } catch (error) {
    return { status: 500, data: "Internal Server Error 3" };
  }
};

export const saveTrigger = async (automationId: string, trigger: string[]) => {
  await onCurrentUser();

  try {
    const create = await addTrigger(automationId, trigger);
    if (create) return { status: 200, data: "Trigger saved" };
    return { status: 404, data: "Cant save trigger" };
  } catch (error) {
    return { status: 500, data: "Internal Server Error 4" };
  }
};

export const saveKeyword = async (automationId: string, keyword: string) => {
  await onCurrentUser();

  try {
    const create = await addKeyword(automationId, keyword);

    if (create) return { status: 200, data: "Keyword saved" };
    return { status: 404, data: "Cant save keyword" };
  } catch (error) {
    return { status: 500, data: "Internal Server Error 5" };
  }
};

export const deleteKeyword = async (id: string) => {
  await onCurrentUser();

  try {
    const deleted = await deleteKeywordQuery(id);

    if (deleted) return { status: 200, data: "Keyword deleted" };
    return { status: 404, data: "Cant delete keyword" };
  } catch (error) {
    return { status: 500, data: "Internal Server Error 6" };
  }
};

export const getProfilePosts = async () => {
  const user = await onCurrentUser();
  try {
    const profile = await findUser(user.id);

    if (!profile?.integrations?.[0]?.token) {
      console.log("❌ No Instagram integration found");
      return { 
        status: 404, 
        data: { error: "No Instagram integration found" } 
      };
    }
    
    if (!profile?.integrations?.[0]?.token) {
      console.log("❌ No Instagram integration found");
      return { 
        status: 404, 
        data: { error: "No Instagram integration found" } 
      };
    }

    const url = `${process.env.INSTAGRAM_BASE_URL}/me/media?fields=id,caption,media_url,media_type,timestamp&limit=10&access_token=${profile.integrations[0].token}`;
    
    const posts = await fetch(url);
    const parsed = await posts.json();
    
    if (parsed.error) {
      console.log("❌ Instagram API error:", parsed.error);
      return { 
        status: parsed.error.code || 400, 
        data: { error: parsed.error.message } 
      };
    }

    return { status: 200, data: parsed };
  } catch (error) {
    console.log("❌ server side error in getting posts", error);
    return { 
      status: 500, 
      data: { error: "Failed to fetch Instagram posts" } 
    };
  }
};

export const savePosts = async (
  automationId: string,
  posts: InstagramPost[]
) => {
  await onCurrentUser();

  try {
    const create = await addPost(automationId, posts);

    if (create) return { status: 200, data: "Posts saved" };
    return { status: 404, data: "Unable to save posts" };
  } catch (error) {
    return { status: 500, data: "Internal Server Error: Failed to save posts" };
  }
};

export const activateAutomation = async (id: string, state: boolean) => {
  await onCurrentUser();

  try {
    const update = await updateAutomation(id, { active: state });

    if (update)
      return {
        status: 200,
        data: `Automation ${state ? "activated" : "deactivated"}`,
      };
    return { status: 404, data: "Cant save posts" };
  } catch (error) {
    return { status: 500, data: "Internal Server Error 7" };
  }
};
