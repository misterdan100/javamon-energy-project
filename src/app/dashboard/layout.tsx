import Navbar from "@/components/dashboard/Navbar";
import { SideBar } from "@/components/dashboard/SideBar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const show = true;

  if (show)
    return (
      <>
        <div className="flex bg-gray-100 text-gray-900 dark:bg-dark dark:text-light h-full w-full">
          {/* full template div */}

          {/* Sidebar */}
          <SideBar />


          <div className="flex flex-col w-full overflow-y-scroll">
            {/* Navbar */}
            
            
            {children}
          </div>
        </div>
      </>
    );

  return (
    <div className="flex h-full">
      <SideBar />
      <div>{children}</div>
    </div>
  );
}
