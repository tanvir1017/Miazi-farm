"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  CreditCard,
  LifeBuoy,
  LogOut,
  Mail,
  Settings,
  User,
  User2,
} from "lucide-react";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { VscSignOut } from "react-icons/vsc";

import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

export function ProfileDropDown() {
  const { data: session } = useSession();
  const handleSignInWithGoogle = () => {
    signIn("google");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {session && session.user ? (
          <div className="bg-gradient-to-tr from-lime-500 via-green-600  to-cyan-600  rounded-full cursor-pointer relative overflow-hidden w-11 h-11">
            <Image
              className="absolute object-cover p-0.5 rounded-full"
              blurDataURL="L%SiHObFx{s:j^bIj?jryGjuRNWX"
              placeholder="blur"
              fill
              alt={session?.user?.name ?? ""}
              src={session?.user?.image as string}
            />
          </div>
        ) : (
          <span
            title="Profile information"
            className="bg-slate-200 p-2 rounded-full cursor-pointer "
          >
            <User2 strokeWidth={1} className="hover:text-primaryalternative" />
          </span>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup></DropdownMenuGroup>
        <DropdownMenuSeparator />

        <DropdownMenuItem>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Registration</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <Link href="/auth/login">
                <DropdownMenuItem>
                  <Mail className="mr-2 h-4 w-4" />
                  <span>Login/Sign-up</span>
                </DropdownMenuItem>
              </Link>
              {session && session.user ? (
                <DropdownMenuItem onClick={() => signOut()}>
                  <VscSignOut className="mr-2 h-4 w-4" />
                  <span>Signout</span>
                </DropdownMenuItem>
              ) : (
                <DropdownMenuItem onClick={handleSignInWithGoogle}>
                  <FcGoogle className="mr-2 h-4 w-4" />
                  <span>Google</span>
                </DropdownMenuItem>
              )}
              <DropdownMenuItem>
                <FaFacebook className="text-sky-500 mr-2 h-4 w-4" />
                <span>Facebook</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
