"use server";

import { stat } from "fs";
import { getUserFromClerk } from "../user";
import { createAutomationQuery, getAutomationsQuery } from "./queries";

// getAllAutomations
export const createUserAutomation = async () => {
  const user = await getUserFromClerk();
  try {
    const create = await createAutomationQuery(user.id);
    if (create) {
      return {
        status: 200,
        data: "Automation created",
      };
    }
    return {
      status: 404,
      data: "Something went wrong!",
    };
  } catch (error) {
    return {
      status: 500,
      data: "Internal server error",
    };
  }
};

export const getAllAutomations = async () => {
  const user = await getUserFromClerk();
  try {
    const automations = await getAutomationsQuery(user.id);
    if (automations) {
      return {
        status: 200,
        data: automations.automations,
      };
    }
    return {
      status: 404, 
      data: []
    }
  } catch (error) {
    return {
      status: 500,
      data: []
    }
  }
};
