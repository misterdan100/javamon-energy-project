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
                    <Link href="/login" className="text-gray-800 bg-gray-700 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Iniciar sesion</Link>
                    <Link href="/dashboard" className="text-white bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-lime-600 dark:hover:bg-lime-700 focus:outline-none dark:focus:ring-lime-800" >Ir a Dashboard</Link>
                    
                </div>

                {/* <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-white rounded bg-blue-700 lg:bg-transparent lg:text-blue-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Company</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Marketplace</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Features</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Team</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
                        </li>
                    </ul>
                </div> */}

            </div>
        </nav>
    </header>

    <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">Centralizando la información sobre energías renovables en Colombia</h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Desde la producción hasta el consumo, ofrecemos datos estandarizados y confiables para impulsar la transición energética del país.</p>
                <div className="flex flex-col gap-4">
                    <Link href="/dashboard/data" className="w-fit inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-lime-700 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-900">
                    Explorar datos
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                    <Link href="https://github.com/misterdan100/javamon-energy-project" className="w-fit inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-gray-800 hover:bg-lime-800 focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-900" target="_blank">
                    Repositorio GitHub
                        <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </Link>
                </div>
                 
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex ">
                {/* <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"/> */}
                <div
                    className=" w-full h-full rounded-3xl overflow-hidden relative grid grid-cols-2 items-center p-12 g-10 text-white "
                >
                    <Image 
                        src="/img/Foto2.webp"
                        width={600}
                        height={600}
                        alt="foto1"
                        className="object-cover w-full h-full absolute top-0 left-0 backdrop-brightness-50"
                    />

                    <div
                        className="w-full h-full absolute top-0 left-0 bg-black/20"
                    ></div>

                    <div className="px-4 z-10">
                        <p
                            className="text-white w-1/2 text-3xl font-bold"
                        >152.000</p>
                        <p
                            className="text-xl"
                        >MWh/año</p>
                        <p
                            className="font-bold"
                        >Energía ahorrada</p>
                    </div>

                    <div className="px-4 z-10">
                        <p
                            className="text-white w-1/2 text-3xl font-bold"
                        >92.289</p>
                        <p
                            className="text-xl"
                        >MWh/año</p>
                        <p
                            className="font-bold"
                        >Energía producida</p>
                    </div>

                    <div className="px-4 z-10">
                        <p
                            className="text-white w-1/2 text-3xl font-bold"
                        >+230.000</p>
                        <p
                            className="text-xl"
                        >Ton de CO2eq</p>
                        <p
                            className="font-bold"
                        >dejadas de emitir</p>
                    </div>

                    <div className="px-4 z-10">
                        <p
                            className="text-white w-1/2 text-3xl font-bold"
                        >1.095.000</p>
                        <p
                            className="text-xl"
                        >Es nuestro impacto</p>
                        <p
                            className="font-bold"
                        >equivalente a árboles</p>
                        <p
                            className="font-bold"
                        >sembrados</p>
                    </div>
                </div>
            </div>                
        </div>
    </section>

    <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
            <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">Aliados estratégicos</h2>
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

    <section className="bg-white dark:bg-gray-800">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">API Integrada</h2>
                <p className="mb-4">We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need. Small enough to be simple and quick, but big enough to deliver the scope you want at the pace you need.</p>
                <p>We are strategists, designers and developers. Innovators and problem solvers. Small enough to be simple and quick.</p>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
                <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1"/>
                <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2"/>
            </div>
        </div>
    </section>

    <section className="bg-gray-50 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="max-w-screen-md mb-8 lg:mb-16">
                <h2 className="mb-4 text-4xl font-extrabold text-gray-900 dark:text-white">Herramientas para la transición energética</h2>
                <p className="text-gray-500 sm:text-xl dark:text-gray-400">Nuestra plataforma integra tecnologías innovadoras para apoyar la toma de decisiones en el sector energético colombiano.</p>
            </div>
            <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-blue-100 lg:h-12 lg:w-12 dark:bg-lime-900">
                        <svg className="w-5 h-5 text-lime-600 lg:w-6 lg:h-6 dark:text-lime-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    </div>
                    <h3 className="mb-2 text-xl font-bold dark:text-white">Monitoreo en Tiempo Real</h3>
                    <p className="text-gray-500 dark:text-gray-400">Seguimiento continuo de la generación y consumo de energías renovables en todo el territorio nacional.</p>
                </div>
                <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-lime-100 lg:h-12 lg:w-12 dark:bg-lime-900">
                        <svg className="w-5 h-5 text-lime-600 lg:w-6 lg:h-6 dark:text-lime-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
                    </div>
                    <h3 className="mb-2 text-xl font-bold dark:text-white">Cumplimiento Normativo</h3>
                    <p className="text-gray-500 dark:text-gray-400">Herramientas para garantizar el cumplimiento de regulaciones ambientales y estándares internacionales.</p>
                </div>
                <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-lime-100 lg:h-12 lg:w-12 dark:bg-lime-900">
                        <svg className="w-5 h-5 text-lime-600 lg:w-6 lg:h-6 dark:text-lime-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>                    
                    </div>
                    <h3 className="mb-2 text-xl font-bold dark:text-white">Reportes Automatizados</h3>
                    <p className="text-gray-500 dark:text-gray-400">Generación de informes técnicos y análisis comparativos para proyectos de energía limpia.</p>
                </div>
                <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-lime-100 lg:h-12 lg:w-12 dark:bg-lime-900">
                        <svg className="w-5 h-5 text-lime-600 lg:w-6 lg:h-6 dark:text-lime-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path></svg>
                    </div>
                    <h3 className="mb-2 text-xl font-bold dark:text-white">Finance</h3>
                    <p className="text-gray-500 dark:text-gray-400">Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.</p>
                </div>
                <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-lime-100 lg:h-12 lg:w-12 dark:bg-lime-900">
                        <svg className="w-5 h-5 text-lime-600 lg:w-6 lg:h-6 dark:text-lime-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                    </div>
                    <h3 className="mb-2 text-xl font-bold dark:text-white">Colaboración Institucional</h3>
                    <p className="text-gray-500 dark:text-gray-400">Plataforma unificada para la cooperación entre entidades gubernamentales y sector privado.</p>
                </div>
                <div>
                    <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-lime-100 lg:h-12 lg:w-12 dark:bg-lime-900">
                        <svg className="w-5 h-5 text-lime-600 lg:w-6 lg:h-6 dark:text-lime-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path></svg>
                    </div>
                    <h3 className="mb-2 text-xl font-bold dark:text-white">Certificación Verde</h3>
                    <p className="text-gray-500 dark:text-gray-400">Validación y seguimiento de proyectos que cumplen con estándares de sostenibilidad.</p>
                </div>
            </div>
        </div>
      </section>

      

    {/* <section className="bg-gray-50 dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">Powering innovation at <span className="font-extrabold">200,000+</span> companies worldwide</h2>
                <p className="mb-4 font-light">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
                <p className="mb-4 font-medium">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease.</p>
                <a href="#" className="inline-flex items-center font-medium text-lime-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700">
                    Learn more
                    <svg className="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                </a>
            </div>
        </div>
      </section> */}


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
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Green API</span>
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Participantes</h2>
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
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Repositorios</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-2">
                                <a href="https://github.com/misterdan100/javamon-energy-project" className="hover:underline " target="_blank">Backend</a>
                            </li>
                            <li>
                                <a href="https://github.com/misterdan100/javamon-energy-project" className="hover:underline" target="_blank">Frontend</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Tecnologías</h2>
                        <ul className="text-gray-600 dark:text-gray-400">
                            <li className="mb-2">
                                <a href="#" className="hover:underline">Java + Spring Boot</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:underline">MySQL</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">TypeScript + React</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="#" className="hover:underline">Javamon Team</a>. Talento Tech.
                </span>
                
            </div>
        </div>
    </footer>
    
    {/* <script src="https://unpkg.com/flowbite@1.4.7/dist/flowbite.js"></script> */}
    </>
  )
}
