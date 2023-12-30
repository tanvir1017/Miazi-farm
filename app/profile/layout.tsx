import ProfileActionSidebar from "@/components/profile/profileactionsidebar";
import { GoogleUser } from "@/types/auth/auth-interface";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/auth-option";

interface PropsType {
  children: React.ReactNode;
}

const UserProfileLayout = async ({ children }: PropsType) => {
  const session: GoogleUser | null = await getServerSession(authOptions);
  if (!session) {
    return redirect("/auth/sign-in");
  }
  return (
    <main className="App">
      <div className="container relative">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-3">
            <div className="pt-2">
              <ProfileActionSidebar />
            </div>
          </div>
          <div className="col-span-9">
            <div className="py-5 px-3">{children}</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserProfileLayout;
