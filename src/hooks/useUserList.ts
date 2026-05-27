import { useState } from "react";
import type { User } from "../types/User";

export function useUserList() {
  function loadUsersFromStorage(): User[] {
    const saved = localStorage.getItem("users");
    if (saved) {
      return JSON.parse(saved);
    }
    return [];
  }

  const [users, setUsers] = useState<User[]>(loadUsersFromStorage);

  function saveAndSet(newUsers: User[]) {
    localStorage.setItem("users", JSON.stringify(newUsers));
    setUsers(newUsers);
  }

  function addUser(user: User) {
    const updatedList = [...users, user];
    saveAndSet(updatedList);
  }

  function removeUser(userId: number) {
    const updatedList = users.filter((u) => u.id !== userId);
    saveAndSet(updatedList);
  }

  function updateUser(updatedUser: User) {
    const updatedList = users.map((u) =>
      u.id === updatedUser.id ? updatedUser : u,
    );
    saveAndSet(updatedList);
  }

  return { users, addUser, removeUser, updateUser };
}
