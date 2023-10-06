// @ts-nocheck
import { Edit } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const UserInfo = ({ session }: any | null) => {
  // console.log("🚀 ~ file: userinfo.tsx:14 ~ session:", session); // { user: { name: 'admin', email: 'admin@gmail.com', image: '' } }
  return (
    <div className="bg-slate-100 p-5">
      {/* <UserProfileDialog /> */}
      <Link
        href={`/profile/${session?.user.email}`}
        className="flex justify-end items-center text-brand cursor-pointer"
      >
        <Edit strokeWidth={0.75} className="text-brand h-4 w-4 mr-2" />
        <span>Edit</span>
      </Link>

      <div className="grid grid-cols-3 gap-x-3 gap-y-10">
        <div>
          <p className="text-xs font-thin mb-2">Profile Picture</p>
          <div className="bg-gradient-to-tr from-lime-500 via-green-600  to-cyan-600  rounded-full cursor-pointer relative overflow-hidden w-12 h-12 ">
            <Image
              className="absolute object-cover p-0.5 rounded-full "
              blurDataURL="L%SiHObFx{s:j^bIj?jryGjuRNWX"
              placeholder="blur"
              fill
              alt={session?.user?.name ?? ""}
              src={
                session?.user?.image ||
                ("/assets/icons/user-check.svg" as string)
              }
            />
          </div>
        </div>
        <div>
          <p className="text-xs font-thin mb-2">Full Name</p>
          <p className="text-lg font-extralight">{session?.user?.name}</p>
        </div>
        <div>
          <p className="text-xs font-thin mb-2">Email Address</p>
          <p className="text-lg font-extralight">{session?.user?.email}</p>
        </div>
        <div>
          <p className="text-xs font-thin mb-2">Mobile </p>
          <p className="text-lg font-extralight">
            {session?.user?.phone ?? "not set"}
          </p>
        </div>
        <div>
          <p className="text-xs font-thin mb-2">Gender</p>
          <p className="text-lg font-extralight">
            {session?.user?.gender ?? "Not set"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
