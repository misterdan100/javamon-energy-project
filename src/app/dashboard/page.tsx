import { Navbar } from "@/components";
import { projectInfo } from "@/config/projectInfo";
import { Metadata } from "next";
import Link from "next/link";
import { IoAccessibility, IoAnalytics, IoCloudUpload, IoHome, IoPeopleSharp, IoPersonCircle, IoPodium, IoTrailSign } from "react-icons/io5";

export const metadata: Metadata = {
  title: `Dashboard | ${projectInfo.titlePage}`
};

export default function DashboardPage() {
  return (
    <>
      <Navbar>Datos</Navbar>

      <div id="main-content" className="flex-1 p-4 overflow-y-auto">
        <div className="grid lg:grid-cols-12 gap-4">
          <Link 
            href={'/dashboard/data'}
            className="lg:col-span-6 flex flex-wrap gap-4 bg-white rounded-lg border-2 border-lime-200 hover:scale-[1.03] px-6 py-4 hover:bg-lime-100 transition"
          >
            {/* Agrega aquí el contenido o componentes que necesites */}
            <div
              className="text-4xl text-lime-600"
            >
              <IoAnalytics />
            </div>
            <div>
              <h3
                className="font-bold text-xl text-gray-700"
              >Ver Estadisticas Generales</h3>
              <p>Revisa los ultimos datos sobre energias CO</p>
            </div>
          </Link>
          <Link 
            href={'/dashboard/data#empleos-grafica'}
            className="lg:col-span-6 flex flex-wrap gap-4 bg-white rounded-lg border-2 border-fuchsia-200 hover:scale-[1.03] px-6 py-4 hover:bg-fuchsia-100 transition"
          >
            {/* Agrega aquí el contenido o componentes que necesites */}
            <div
              className="text-4xl text-fuchsia-600"
            >
              <IoPeopleSharp />
            </div>
            <div>
              <h3
                className="font-bold text-xl text-gray-700"
              >Empleos generados por tipo de energía</h3>
              <p>Muestra historial de empleabilidad por region</p>
            </div>
          </Link>
          <Link 
            href={'/dashboard/data/departamentos'}
            className="lg:col-span-6 flex flex-wrap gap-4 bg-white rounded-lg border-2 border-sky-200 hover:scale-[1.03] px-6 py-4 hover:bg-sky-100 transition"
          >
            {/* Agrega aquí el contenido o componentes que necesites */}
            <div
              className="text-4xl text-sky-600"
            >
              <IoTrailSign />
            </div>
            <div>
              <h3
                className="font-bold text-xl text-gray-700"
              >Datos por Departamento</h3>
              <p>Estadisticas de energias por departamentos</p>
            </div>
          </Link>

          
          <Link 
            href={'/dashboard/data/eficiencia'}
            className="lg:col-span-6 flex flex-wrap gap-4 bg-white rounded-lg border-2 border-pink-200 hover:scale-[1.03] px-6 py-4 hover:bg-pink-100 transition"
          >
            {/* Agrega aquí el contenido o componentes que necesites */}
            <div
              className="text-4xl text-pink-600"
            >
              <IoPodium />
            </div>
            <div>
              <h3
                className="font-bold text-xl text-gray-700"
              >Eficiencia</h3>
              <p>Muestra la eficiencia de cada energia renovable</p>
            </div>
          </Link>
          
          <Link 
            href={'/dashboard/data#instalaciones'}
            className="lg:col-span-6 flex flex-wrap gap-4 bg-white rounded-lg border-2 border-purple-200 hover:scale-[1.03] px-6 py-4 hover:bg-purple-100 transition"
          >
            {/* Agrega aquí el contenido o componentes que necesites */}
            <div
              className="text-4xl text-purple-600"
            >
              <IoPodium />
            </div>
            <div>
              <h3
                className="font-bold text-xl text-gray-700"
              >Intalaciones de proyectos</h3>
              <p>Revisa la cantidad de proyectos instalados</p>
            </div>
          </Link>

          <Link 
            href={'/dashboard/usuarios'}
            className="lg:col-span-6 flex flex-wrap gap-4 bg-white rounded-lg border-2 border-teal-200 hover:scale-[1.03] px-6 py-4 hover:bg-teal-100 transition"
          >
            {/* Agrega aquí el contenido o componentes que necesites */}
            <div
              className="text-4xl text-teal-600"
            >
              <IoAccessibility />
            </div>
            <div>
              <h3
                className="font-bold text-xl text-gray-700"
              >Control de usuarios</h3>
              <p>Administra usuarios y roles</p>
            </div>
          </Link>

          <Link 
            href={'/dashboard/load-data'}
            className="lg:col-span-6 flex flex-wrap gap-4 bg-white rounded-lg border-2 border-amber-200 hover:scale-[1.03] px-6 py-4 hover:bg-amber-100 transition"
          >
            {/* Agrega aquí el contenido o componentes que necesites */}
            <div
              className="text-4xl text-amber-600"
            >
              <IoCloudUpload />
            </div>
            <div>
              <h3
                className="font-bold text-xl text-gray-700"
              >Cargar datos</h3>
              <p>Sube nueva informacion sobre energias renovables en CO</p>
            </div>
          </Link>

          <Link 
            href={'/dashboard/perfil'}
            className="lg:col-span-6 flex flex-wrap gap-4 bg-white rounded-lg border-2 border-indigo-200 hover:scale-[1.03] px-6 py-4 hover:bg-indigo-100 transition"
          >
            {/* Agrega aquí el contenido o componentes que necesites */}
            <div
              className="text-4xl text-indigo-600"
            >
              <IoPersonCircle />
            </div>
            <div>
              <h3
                className="font-bold text-xl text-gray-700"
              >Perfil de usuario</h3>
              <p>Administra tu informacion de usuario</p>
            </div>
          </Link>

          <Link 
            href={'/'}
            className="lg:col-span-6 flex flex-wrap gap-4 bg-white rounded-lg border-2 border-red-200 hover:scale-[1.03] px-6 py-4 hover:bg-red-100 transition"
          >
            {/* Agrega aquí el contenido o componentes que necesites */}
            <div
              className="text-4xl text-red-600"
            >
              <IoHome />
            </div>
            <div>
              <h3
                className="font-bold text-xl text-gray-700"
              >Home page</h3>
              <p>Visita la pagina principal con informacion general</p>
            </div>
          </Link>


        </div>
      </div>
    </>
  );
}