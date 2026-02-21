import { create } from "zustand";
import { User } from "../types";

type UserStore = {
    user: User | null | undefined;
    setUser: (user: User | null) => void;
}

export const useUserStore = create<UserStore>((set) => ({
    user: undefined,
    setUser: (user) => set({ user }),
}));
