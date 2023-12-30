"use client";

import {
  CreditCard,
  DoorOpen,
  LifeBuoy,
  Settings,
  User,
  User2,
} from "lucide-react";
import Link from "next/link";
import { VscSignOut } from "react-icons/vsc";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { SessionProps } from "@/types/global";
import { signOut } from "next-auth/react";
import Image from "next/image";

export function ProfileDropDown({ session }: SessionProps) {
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
              alt={`${session.user.name} avatar` ?? ""}
              src={
                session.user.image || ("/assets/icons/user-check.svg" as string)
              }
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
      <DropdownMenuContent className="w-56 bg-white">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={`/profile`}>
            <DropdownMenuItem>
              <User className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
          </Link>
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

        <DropdownMenuItem>
          <LifeBuoy className="mr-2 h-4 w-4" />
          <span>Support</span>
        </DropdownMenuItem>
        {session?.user.email ? (
          <DropdownMenuItem onClick={() => signOut()}>
            <VscSignOut className="mr-2 h-4 w-4" />
            <span>Signout</span>
          </DropdownMenuItem>
        ) : (
          <Link href="/auth/sign-in" className="">
            <DropdownMenuItem>
              <DoorOpen className="mr-2 h-4 w-4" />
              <span>Sign in</span>
            </DropdownMenuItem>
          </Link>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
