import { getUsers } from "@/actions/getUsers";
import { Navbar } from "@/components";
import { projectInfo } from "@/config/projectInfo";
import { createAvatar } from "@/utils";
import { Metadata } from "next";
import { IoCreateOutline } from "react-icons/io5";
import { UserItem } from "./UserItem";
import { RolModal } from "./RolModal";

export const metadata: Metadata = {
  title: `Usuarios | ${projectInfo.titlePage}`
}

export default async function UsersPage() {
  const users = await getUsers();

  
  return (
    <div>

      <Navbar >Control de Usuarios</Navbar>
      
      <div className="flex flex-col justify-center h-full">
        {/* <!-- Table --> */}
        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-xl border border-gray-200 ">
            <div className="p-3">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">

                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Nombre</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Email</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Rol</div>
                                </th>
                            </tr>
                        </thead>

                        <tbody className="text-sm divide-y divide-gray-100">

                          {users?.map( (user: any) => (
                            <UserItem 
                              key={user.id}
                              id={user.id}
                              nombre={user.nombre}
                              email={user.email}
                              rol={user.rol}
                            />
                          ))}

                            

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <RolModal />


    </div>
  )
}