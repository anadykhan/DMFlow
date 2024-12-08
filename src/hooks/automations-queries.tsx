import { getAllAutomations } from "@/actions/automations";
import { useQuery } from "@tanstack/react-query";

export const useGetQueryAutomations = () => {
  return useQuery({
    queryKey: ["get-automations"],
    queryFn: getAllAutomations,
  });
};
