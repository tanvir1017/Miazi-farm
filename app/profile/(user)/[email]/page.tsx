import { urlForProductionAndLocalhost } from "@/app/shop/page";
import UpdateUserInfo from "@/components/profile/userinfo/update-user-info";
import { ResponseUserTypeFromDb } from "@/types/auth/auht.type.";
import { Pencil, UserCog } from "lucide-react";
import Link from "next/link";
import { GrSettingsOption } from "react-icons/gr";

interface UserProfileInfo {
  status: number;
  message: string;
  data: ResponseUserTypeFromDb;
}

const UserProfile = async ({ params }: { params: { email: string } }) => {
  const { email } = params;
  // GET USER BY USER-EMAIL
  const response: Response = await fetch(
    `${urlForProductionAndLocalhost}/api/user-info/${email}`,
    {
      cache: "no-store",
    }
  );
  const user: UserProfileInfo = await response.json();
  return (
    <section className="container">
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              href="."
              className="ml-1 inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2"
            >
              <GrSettingsOption className="mr-4 h-4 w-4" />
              My Profile
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <span className="mx-2.5 text-gray-800">/</span>
              <span className="mx-2.5 text-gray-800 cursor-not-allowed">
                <Pencil className="h-4 w-4" />
              </span>
              <a
                href="#"
                className="ml-1 text-sm font-medium text-gray-400 italic cursor-not-allowed"
              >
                Edit
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <span className="mx-2.5 text-gray-800">/</span>
              <span className="mx-2.5 text-gray-800">
                <UserCog className="h-4 w-4 cursor-not-allowed" />
              </span>
              <span className="ml-1 text-sm font-medium text-gray-400 italic cursor-not-allowed">
                {user?.data?.name}
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <UpdateUserInfo userInfo={user.data} />
    </section>
  );
};

export default UserProfile;
