"use client";
import { Button } from "@/components/shadcn/ui/button";
import { Label } from "@/components/shadcn/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/shadcn/ui/radio-group";
import { ResponseUserTypeFromDb } from "@/types/auth/auht.type.";
import { Info } from "lucide-react";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

const UpdateUserInfo = ({ userInfo }: { userInfo: ResponseUserTypeFromDb }) => {
  const [updateUserInfo, setUpdateUserInfo] = useState({
    name: "",
    image: "",
    mobile: "",
    gender: "",
  });
  const handleFormOnSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(
      "🚀 ~ file: update-user-info.tsx:12 ~ handleFormOnSubmit ~ updateUserInfo:",
      updateUserInfo
    );
  };

  return (
    <div className="bg-slate-100 p-10 rounded-md mt-10">
      <h1 className="text-center text-4xl font-extrabold mb-5">
        Update Your Info
      </h1>
      <form onSubmit={handleFormOnSubmit}>
        <div className="grid md:grid-cols-4 gap-2 ">
          <div className="w-full">
            <div className="w-[200px] h-[200px] relative mt-3">
              <Image
                src="/bill-gates-profile-pic.jpg"
                layout="fill"
                className="object-cover absolute rounded-md cursor-pointer"
                alt="user info image"
              />
            </div>
            <div className="mt-5 space-y-1">
              <p className="text-xs">
                <b>Joined from:</b>{" "}
                {new Date(userInfo.createdAt).toLocaleDateString()}
              </p>
              <p className="text-xs">
                <b>Last changes:</b>{" "}
                {new Date(userInfo.updatedAt).toLocaleString()}
              </p>
            </div>
          </div>
          <div className="col-span-3 pl-3 border-l border-gray-400">
            <div className="flex items-center ">
              <div className="w-full mt-1.5 mr-1">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-1"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  defaultValue={userInfo.name}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setUpdateUserInfo({
                      ...updateUserInfo,
                      name: e.target.value,
                    })
                  }
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 bg-white"
                  type="text"
                  placeholder="Enter your name"
                  id="name"
                ></input>
              </div>
              <div className="w-full mt-1.5">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-1"
                  htmlFor="name"
                >
                  Mobile
                </label>
                <input
                  defaultValue="not set yet"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setUpdateUserInfo({
                      ...updateUserInfo,
                      mobile: e.target.value,
                    })
                  }
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 bg-white"
                  type="number"
                  placeholder="Enter your mobile no"
                  id="mobile"
                ></input>
              </div>
            </div>
            <div className="my-5">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-3 block"
                htmlFor="gender"
              >
                Gender
              </label>
              <RadioGroup defaultValue="Male" className="flex items-center">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Male" id="r1" />
                  <Label htmlFor="r1">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Female" id="r2" />
                  <Label htmlFor="r2">Female</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="Others" id="r3" />
                  <Label htmlFor="r3">Others</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="w-full mt-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center justify-between mb-2"
                htmlFor="name"
              >
                Email{" "}
                <span className="text-gray-400 italic flex items-center text-xs space-x-2">
                  <Info className="w-3 h-3 mr-1" />
                  Email can't be update
                </span>
              </label>
              <input
                disabled
                defaultValue={userInfo.email}
                className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 bg-white"
                type="text"
                placeholder="Enter your name"
                id="name"
              ></input>
            </div>
            <div className="flex items-center">
              <div className="w-full mt-5 mr-1">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center justify-between mb-2"
                  htmlFor="name"
                >
                  Role{" "}
                  <span className="text-gray-400 italic flex items-center text-xs ">
                    <Info className="w-3 h-3 mr-1" />
                    Only admin can change the role
                  </span>
                </label>
                <input
                  disabled
                  defaultValue={userInfo.role}
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 bg-white"
                  type="text"
                  placeholder="Enter your name"
                  id="name"
                ></input>
              </div>
              <div className="w-full mt-5">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center justify-between mb-2"
                  htmlFor="name"
                >
                  Credential{" "}
                  <span className="text-gray-400 italic flex items-center text-xs space-x-2">
                    <Info className="w-3 h-3 mr-1" />
                    This value can't be update
                  </span>
                </label>
                <input
                  defaultValue={userInfo.credential}
                  disabled
                  className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 bg-white"
                  type="text"
                  placeholder="Enter your name"
                  id="name"
                ></input>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end my-3">
          <Button
            onClick={() => alert("Working on it....")}
            type="submit"
            className="px-8 py-2 "
          >
            Update
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUserInfo;
