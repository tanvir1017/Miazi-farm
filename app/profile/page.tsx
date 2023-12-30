import UserInfo from "@/components/profile/userinfo/userinfo";
import { GoogleUser } from "@/types/auth/auth-interface";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/auth-option";

const Profile = async () => {
  const session: GoogleUser | null = await getServerSession(authOptions);
  return <UserInfo session={session} />;
};

export default Profile;
