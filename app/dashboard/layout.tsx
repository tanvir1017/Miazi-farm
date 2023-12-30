import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar/dashboard-sidebar";
import { GoogleUser } from "@/types/auth/auth-interface";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/auth-option";

interface PropsType {
  children: React.ReactNode;
}

const DashBoardLayout = async ({ children }: PropsType) => {
  const session: GoogleUser | null = await getServerSession(authOptions);
  if (!session) {
    return redirect("/auth/sign-in");
  }
  return (
    <main className="App">
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <DashboardSidebar />
        </div>
        <div className="col-span-10">
          <div className="py-5 px-3">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default DashBoardLayout;
