import { UserSession } from "@/types/global";
import { create } from "zustand";

const userStore = (set: any) => ({
  userObj: {},
  addUser: (user: UserSession) => {
    set((state: any) => {
      return { userObj: user };
    });
  },
});

const useUserObj = create(userStore);
export default useUserObj;
