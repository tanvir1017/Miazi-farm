import ProfileActionSidebar from "@/components/profile/profileactionsidebar";
import React from "react";

interface PropsType {
  children: React.ReactNode;
}

const UserProfileLayout = ({ children }: PropsType) => {
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
