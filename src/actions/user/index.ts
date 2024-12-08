"use server";

import { currentUser } from "@clerk/nextjs/server";
import { ClipboardType } from "lucide-react";
import { redirect } from "next/navigation";
import { createUser, findUser } from "./queries";
import { refreshToken } from "@/lib/fetch";
import { updateIntegration } from "../integrations/queries";

// onCurrentUser()
export const getUserFromClerk = async () => {
  const user = await currentUser();

  if (!user) {
    return redirect("/sign-in");
  }

  return user;
};

export const onBoardUser = async () => {
  const user = await getUserFromClerk();
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
          const expireDate = today.setDate(today.getDate() + 60);

          const updateToken = await updateIntegration(
            refresh.access_token,
            new Date(expireDate),
            found.integrations[0].id
          );

          if (!updateToken) {
            console.log("Update token failed");
          }
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
      user.emailAddresses[0].emailAddress
    );
    return {
      status: 201,
      data: created,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 500,
    };
  }
};

// onUserInfo()
export const getUserFromDb = async () => {
  const user = await getUserFromClerk();
  try {
    const profile = await findUser(user.id);
    if (profile) {
      return {
        status: 200,
        data: profile,
      };
    }

    return { status: 404 };
  } catch (error) {
    return { status: 500 };
  }
};
