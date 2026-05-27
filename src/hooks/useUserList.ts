import { useState } from "react";
import type { User } from "../types/User";

export function useUserList() {
  function loadUsersFromStorage(): User[] {
    const saved = localStorage.getItem("users");
    if (saved) return JSON.parse(saved);
    return [];
  }

  const [users, setUsers] = useState<User[]>(loadUsersFromStorage);

  function saveAndSet(newUsers: User[]) {
    localStorage.setItem("users", JSON.stringify(newUsers));
    setUsers(newUsers);
  }

  function addUser(user: User) {
    saveAndSet([...users, user]);
  }

  function removeUser(userId: number) {
    saveAndSet(users.filter((u) => u.id !== userId));
  }

  function updateUser(updatedUser: User) {
    saveAndSet(users.map((u) => (u.id === updatedUser.id ? updatedUser : u)));
  }

  return { users, addUser, removeUser, updateUser };
}
