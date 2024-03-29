import { WorkingUnderWay } from "@/components/dashboard/working-underway";
import { GoogleUser } from "@/types/auth/auth-interface";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/auth-option";

const Dashboard = async () => {
  const session: GoogleUser | null = await getServerSession(authOptions);
  if (!session) {
    return redirect("/auth/sign-in");
  }
  return <WorkingUnderWay />;
};

export default Dashboard;
