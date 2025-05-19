import { useQuery } from "@tanstack/react-query";
import type { User } from "../types/user";
import constants from "../../utils/constants";

const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch(`${constants.USERS_API_BASE_URL}/users`);
  if (!res.ok) throw new Error("Failed to fetch users");
  const data = await res.json();
  return data.data.users;
};

export const useUsers = () => {
  const { data, isLoading, isError, error } = useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: fetchUsers,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });

  return {
    users: data ?? [],
    loading: isLoading,
    error: isError ? error?.message : null,
  };
};
