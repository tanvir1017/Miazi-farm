import UserInfo from "@/components/profile/userinfo/userinfo";
import { GoogleUser } from "@/types/auth/auth-interface";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/auth-option";

const Profile = async () => {
  const session: GoogleUser | null = await getServerSession(authOptions);
  if (!session) {
    return redirect("/auth/sign-in");
  }
  return <UserInfo session={session} />;
};

export default Profile;
