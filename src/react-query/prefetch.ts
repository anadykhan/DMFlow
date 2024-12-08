import { createUserAutomation } from "@/actions/automations";
import { getUserFromDb } from "@/actions/user";
import { QueryClient, QueryFunction } from "@tanstack/react-query";

const prefetch = async (
  client: QueryClient,
  action: QueryFunction,
  key: string
) => {
  return await client.prefetchQuery({
    queryKey: [key],
    queryFn: action,
    staleTime: 60000,
  });
};

export const prefetchUserProfile = async (client: QueryClient) => {
  return await prefetch(client, getUserFromDb, "user-profile");
};

export const prefetchUserAutomations = async (client: QueryClient) => {
  return await prefetch(client, createUserAutomation, "user-automations");
};
