import { projectInfo } from "@/config/projectInfo";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Home | ${projectInfo.titlePage}`
}

export default function Home() {
  return (
    <>    
      <header>     
        <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
          <div className="flex flex-wrap justify-center items-center mx-auto max-w-screen-xl gap-4 sm:justify-between  sm:gap-0 ">
            <Link href="/" className="flex items-center">
              <Image 
                src="/img/logo_2.png" 
                className="mr-3 h-6 sm:h-9" 
                alt="Flowbite Logo" 
                width={36}
                height={36}
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Green API</span>
            </Link>
            <div className="flex items-center lg:order-2 me-4">
              <Link
                href="/login"
                className="text-gray-800 bg-gray-700 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
              >
                Iniciar sesión
              </Link>
              <Link
                href="/dashboard"
                className="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-lime-600 dark:hover:bg-lime-700 focus:outline-none dark:focus:ring-lime-800"
              >
                Ir a Dashboard
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">
              Centralizando la información sobre energías renovables en Colombia
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Desde la producción hasta el consumo, ofrecemos datos estandarizados
              y confiables para impulsar la transición energética del país.
            </p>
            <div className="flex flex-col gap-4">
              <Link
                href="/dashboard/data"
                className="w-fit inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-900"
              >
                Explorar datos
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>

              <Link
                href="https://github.com/misterdan100/javamon-energy-project"
                className="w-fit inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-gray-800 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-900"
                target="_blank"
              >
                Repositorio FrontEnd
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>

              <Link
                href="https://github.com/JuanCamacho1913/renewable-energy"
                className="w-fit inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-gray-800 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-900"
                target="_blank"
              >
                Repositorio BackEnd
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>

              <Link
                href="https://javamon.vercel.app/"
                className="w-fit inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-gray-800 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-900"
                target="_blank"
              >
                Deploy: https://javamon.vercel.app/
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex ">
            <div className=" w-full h-full rounded-3xl overflow-hidden relative grid grid-cols-2 items-center p-12 g-10 text-white ">
              <Image 
                src="/img/Foto2.webp"
                width={600}
                height={600}
                alt="foto1"
                className="object-cover w-full h-full absolute top-0 left-0 backdrop-brightness-50"
              />

              <div className="w-full h-full absolute top-0 left-0 bg-black/20"></div>

              <div className="px-4 z-10">
                <p className="text-white w-1/2 text-3xl font-bold">152.000</p>
                <p className="text-xl">MWh/año</p>
                <p className="font-bold">Energía ahorrada</p>
              </div>

              <div className="px-4 z-10">
                <p className="text-white w-1/2 text-3xl font-bold">92.289</p>
                <p className="text-xl">MWh/año</p>
                <p className="font-bold">Energía producida</p>
              </div>

              <div className="px-4 z-10">
                <p className="text-white w-1/2 text-3xl font-bold">+230.000</p>
                <p className="text-xl">Ton de CO2eq</p>
                <p className="font-bold">dejadas de emitir</p>
              </div>

              <div className="px-4 z-10">
                <p className="text-white w-1/2 text-3xl font-bold">1.095.000</p>
                <p className="text-xl">Es nuestro impacto</p>
                <p className="font-bold">equivalente a árboles</p>
                <p className="font-bold">sembrados</p>
              </div>
            </div>
          </div>                
        </div>
      </section>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
          <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
            Aliados estratégicos
          </h2>
          <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            <a href="#" className="flex justify-center items-center">
              <Image 
                src='https://www.celsia.com/wp-content/uploads/2021/05/Grupo-697.svg'
                width={150}
                height={150}
                alt="logo1"
                className="h-9 hover:text-gray-900 dark:hover:text-white object-contain grayscale brightness-200 hover:grayscale-0 hover:brightness-100 transition contrast-200"
              />
            </a>
            <a href="#" className="flex justify-center items-center">
              <Image 
                src='https://www.enel.com/etc.clientlibs/enel-common/clientlibs/clientlib-bundle/resources/img/logo/logo.svg'
                width={150}
                height={150}
                alt="logo1"
                className="h-9 hover:text-gray-900 dark:hover:text-white object-contain grayscale brightness-200 hover:grayscale-0 hover:brightness-100 transition contrast-200"
              />
            </a>
            <a href="#" className="flex justify-center items-center">
              <Image 
                src='https://www.epm.com.co/content/dam/epm/iconos/logo.svg'
                width={150}
                height={150}
                alt="logo1"
                className="h-9 hover:text-gray-900 dark:hover:text-white object-contain grayscale brightness-200 hover:grayscale-0 hover:brightness-100 transition contrast-200"
              />
            </a>
            <a href="#" className="flex justify-center items-center">
              <Image 
                src='https://upload.wikimedia.org/wikipedia/commons/0/07/Isagen_logo.svg'
                width={150}
                height={150}
                alt="logo1"
                className="h-9 hover:text-gray-900 dark:hover:text-white object-contain grayscale brightness-200 hover:grayscale-0 hover:brightness-100 transition contrast-200"
              />
            </a>
            <a href="#" className="flex justify-center items-center">
              <Image 
                src='https://www.aescol.com/themes/custom/aes_custom/logo/logo_aes_colombia.svg'
                width={150}
                height={150}
                alt="logo1"
                className="h-9 hover:text-gray-900 dark:hover:text-white object-contain grayscale brightness-200 hover:grayscale-0 hover:brightness-100 transition contrast-200"
              />
            </a>
            <a href="#" className="flex justify-center items-center">
              <Image 
                src='https://greenyellow.co/wp-content/uploads/2017/07/logo-greenyellow.svg'
                width={150}
                height={150}
                alt="logo1"
                className="h-9 hover:text-gray-900 dark:hover:text-white object-contain grayscale brightness-200 hover:grayscale-0 hover:brightness-100 transition contrast-200"
              />
            </a>
          </div>
        </div>
      </section>

      {/* Sección "API Integrada" con texto en español */}
      <section className="bg-white dark:bg-gray-800">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
              API Integrada (Alcance del Proyecto)
            </h2>
            <h3></h3>
            <p className="mb-4">
            Desarrollo de una API REST para la consulta y gestión de datos de energías renovables.
            </p>
            <p className="mb-4">
            Implementación de un dashboard para la visualización de estadísticas energéticas (por tipo de energía, región, año, etc.).

            </p>
            <p>
            Módulos de autenticación y autorización para asegurar el acceso a la información (roles de usuario: ADMIN y BASIC_USER).


            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
            <img
              className="w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>

      <section id="herramientas" className="bg-gray-50 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">
            Tecnologías y Herramientas
            </h2>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400 mb-4">
              <span className="font-bold text-gray-200">Backend: </span>
            Spring Boot, Spring Security, JWT para autenticación y autorización, Hibernate para mapeo objeto-relacional, MapStruct.

            </p>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400 mb-4">
            <span className="font-bold text-gray-200">Frontend: </span>
              React, Next.js y Typescript para el desarrollo de interfaces interactivas y responsivas.
            </p>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400 mb-4">
              <span className="font-bold text-gray-200">Base de Datos: </span>
             MySQL en la nube o local.
            </p>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400 mb-4">
              <span className="font-bold text-gray-200">Documentación de la API: </span>
             Swagger para generar y mantener la especificación de los endpoints.
            </p>
            <p className="text-gray-500 sm:text-xl dark:text-gray-400 mb-4">
              <span className="font-bold text-gray-200">Control de versiones: </span>
            Control de versiones: Git y GitHub para la gestión colaborativa y seguimiento de cambios.
            </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            {/* ...tarjetas de herramientas... */}
          </div>
        </div>
      </section>

      <footer className="p-4 bg-gray-50 sm:p-6 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <Link href="/" className="flex items-center">
                <Image 
                  src="/img/logo_2.png" 
                  className="mr-3 h-6 sm:h-9" 
                  alt="Flowbite Logo" 
                  width={36}
                  height={36}
                />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                  Green API
                </span>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Participantes
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-2">
                    <a href="#" className="hover:underline">David Pineda</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">Nestor Alvarez</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">Juan Esteban Camacho</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">Duvan Mayo</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">Daniel Merchan</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Repositorios
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-2">
                    <a
                      href="https://github.com/JuanCamacho1913/renewable-energy"
                      className="hover:underline"
                      target="_blank"
                    >
                      Backend
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/misterdan100/javamon-energy-project"
                      className="hover:underline"
                      target="_blank"
                    >
                      Frontend
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Tecnologías
                </h2>
                <ul className="text-gray-600 dark:text-gray-400">
                  <li className="mb-2">
                    <a href="#" className="hover:underline">Java + Spring Boot</a>
                  </li>
                  <li className="mb-2">
                    <a href="#" className="hover:underline">MySQL</a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">TypeScript + React, Next.js</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2025 <a href="#" className="hover:underline">Javamon Team</a>. Talento Tech.
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}