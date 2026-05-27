import { createContext } from "react";
import type { User } from "../types/User";

type UserContextType = {
  users: User[];
  addUser: (user: User) => void;
  removeUser: (userId: number) => void;
  updateUser: (user: User) => void;
};

export const UserContext = createContext<UserContextType>({
  users: [],
  addUser: () => {},
  removeUser: () => {},
  updateUser: () => {},
});
