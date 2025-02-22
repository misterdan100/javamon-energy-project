import { Navbar } from "@/components";
import { projectInfo } from "@/config/projectInfo";
import { Metadata } from "next";
import { RolModal } from "./RolModal";
import { UsersPanel } from "./UsersPanel";
import { getUsers } from "@/actions/getUsers";

export const metadata: Metadata = {
  title: `Usuarios | ${projectInfo.titlePage}`,
};

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <>
      <Navbar>Control de Usuarios</Navbar>

      <div 
        id="main-content"
        className="flex-1 p-4 overflow-y-auto">
        {/* <!-- Table --> */}
        <UsersPanel 
          users={users}
        />
      </div>

      <RolModal />
    </>
  );
}
