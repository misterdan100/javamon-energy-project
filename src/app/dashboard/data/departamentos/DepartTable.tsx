"use client";

import { ItemDepart } from "@/components/dashboard/departamentos/ItemDepart";
import { Energia } from "@/interfaces/dataTypes";
import clsx from "clsx";
import { useEffect, useState } from "react";

interface Props {
  energias: Energia[];
}

export const DepartTable = ({ energias }: Props) => {
  const [listToShow, setListToShow] = useState(energias);
  const [filteredByTerm, setFilteredByTerm] = useState<Energia[]>([]);
  const [filterByEnergy, setFilterByEnergy] = useState<Energia[]>([]);

  const [searchValue, setSearchValue] = useState('')

  const maxProdAnual = energias.reduce((total, item) => {
    if (item.produccionAnualEstimada > total)
      return item.produccionAnualEstimada;
    return total;
  }, 0);

  useEffect(() => {
    if (filterByEnergy.length || filteredByTerm.length) {
      if (filteredByTerm.length) {
        setListToShow(filteredByTerm);
        return;
      } else {
        setListToShow(filterByEnergy);
      }
    } else {
      setListToShow(energias);
    }

  }, [filterByEnergy, filteredByTerm]);

  const handleFilterEnergy = (filter: string) => {
    if (filter === "") {
      setFilterByEnergy([]);
      setFilteredByTerm([]);
      setSearchValue('')
      return;
    }
    const filteredList = energias.filter((item) => item.tipoEnergia === filter);
    setFilterByEnergy(filteredList);
    setFilteredByTerm([]);
    setSearchValue('')
    
  };


  const handleFilterByTerm = (term: string) => {
    setSearchValue(term)
    if( term === '' || term.length < 2) {
        setFilteredByTerm([])
        return 
    }

    const filteredList = listToShow.filter( item => {
        const { tipoEnergia, departamento, region, ciudad, impactoAmbiental, tecnologia, propietario } = item

        const string = [tipoEnergia, departamento, region, ciudad, impactoAmbiental, tecnologia, propietario].toString().toLowerCase()

        if(string.includes(term.toLowerCase())) {
            return item
        }
    })

    setFilteredByTerm(filteredList)

  }


  return (
    <>
      <div className="mt-6 md:flex md:items-center md:justify-between">
        <div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg  rtl:flex-row-reverse  ">
          <button
            className={clsx(
              "px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm hover:bg-gray-200 ",
              filterByEnergy.length === 0 && 'bg-gray-200'
            )}
            onClick={() => handleFilterEnergy("")}
          >
            Todos
          </button>

          <button
            className={clsx(
              "hover:bg-cyan-100 hover:text-cyan-500 px-5 py-2 text-xs font-medium transition-colors duration-200  sm:text-sm ",
              
              filterByEnergy[0]?.tipoEnergia === 'Hidroeléctrica' ? 'bg-cyan-100 text-cyan-500' : 'bg-gray-100 text-gray-600'
            )}
            onClick={() => handleFilterEnergy("Hidroeléctrica")}
          >
            Hidroeléctrica
          </button>

          <button
            className={clsx(
              "hover:bg-fuchsia-100 hover:text-fuchsia-500 px-5 py-2 text-xs font-medium transition-colors duration-200  sm:text-sm ",
              
              filterByEnergy[0]?.tipoEnergia === 'Eólica' ? 'bg-fuchsia-100 text-fuchsia-500'  : 'bg-gray-100 text-gray-600'
            )}
            onClick={() => handleFilterEnergy("Eólica")}
          >
            Eólica
          </button>

          <button
            className={clsx(
              "hover:bg-amber-100 hover:text-amber-600 px-5 py-2 text-xs font-medium transition-colors duration-200  sm:text-sm ",
              
              filterByEnergy[0]?.tipoEnergia === 'Solar' ? 'bg-amber-100 text-amber-600' : 'bg-gray-100 text-gray-600'
            )}
            onClick={() => handleFilterEnergy("Solar")}
          >
            Solar
          </button>

          <button
            className={clsx(
              "hover:bg-violet-100 hover:text-violet-500 px-5 py-2 text-xs font-medium transition-colors duration-200  sm:text-sm",
              
              filterByEnergy[0]?.tipoEnergia === 'Biocombustibles' ? 'bg-violet-100 text-violet-500' : 'bg-gray-100 text-gray-600'
            )}
            onClick={() => handleFilterEnergy("Biocombustibles")}
          >
            Biocombustibles
          </button>

          <button
            className={clsx(
              "hover:bg-lime-100 hover:text-lime-600 px-5 py-2 text-xs font-medium transition-colors duration-200  sm:text-sm ",
              
              filterByEnergy[0]?.tipoEnergia === 'Geotérmica' ? 'bg-lime-100 text-lime-600' : 'bg-gray-100 text-gray-600'
            )}
            onClick={() => handleFilterEnergy("Geotérmica")}
          >
            Geotérmica
          </button>
        </div>

        <div className="relative flex items-center mt-4 md:mt-0">
          <span className="absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 mx-3 text-gray-400 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </span>

          <input
            type="text"
            placeholder="Buscar..."
            value={searchValue}
            onChange={e => handleFilterByTerm(e.target.value.trim())}
            className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5  focus:border-blue-400  focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>
      </div>

      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200  md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 ">
                <thead className="bg-gray-50 ">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 "
                    >
                      <button className="flex items-center gap-x-3 focus:outline-none">
                        <span>Departamentos</span>

                        <svg
                          className="h-3"
                          viewBox="0 0 10 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M2.13347 0.0999756H2.98516L5.01902 4.79058H3.86226L3.45549 3.79907H1.63772L1.24366 4.79058H0.0996094L2.13347 0.0999756ZM2.54025 1.46012L1.96822 2.92196H3.11227L2.54025 1.46012Z"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth="0.1"
                          />
                          <path
                            d="M0.722656 9.60832L3.09974 6.78633H0.811638V5.87109H4.35819V6.78633L2.01925 9.60832H4.43446V10.5617H0.722656V9.60832Z"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth="0.1"
                          />
                          <path
                            d="M8.45558 7.25664V7.40664H8.60558H9.66065C9.72481 7.40664 9.74667 7.42274 9.75141 7.42691C9.75148 7.42808 9.75146 7.42993 9.75116 7.43262C9.75001 7.44265 9.74458 7.46304 9.72525 7.49314C9.72522 7.4932 9.72518 7.49326 9.72514 7.49332L7.86959 10.3529L7.86924 10.3534C7.83227 10.4109 7.79863 10.418 7.78568 10.418C7.77272 10.418 7.73908 10.4109 7.70211 10.3534L7.70177 10.3529L5.84621 7.49332C5.84617 7.49325 5.84612 7.49318 5.84608 7.49311C5.82677 7.46302 5.82135 7.44264 5.8202 7.43262C5.81989 7.42993 5.81987 7.42808 5.81994 7.42691C5.82469 7.42274 5.84655 7.40664 5.91071 7.40664H6.96578H7.11578V7.25664V0.633865C7.11578 0.42434 7.29014 0.249976 7.49967 0.249976H8.07169C8.28121 0.249976 8.45558 0.42434 8.45558 0.633865V7.25664Z"
                            fill="currentColor"
                            stroke="currentColor"
                            strokeWidth="0.3"
                          />
                        </svg>
                      </button>
                    </th>

                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                    >
                      Energia
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                    >
                      Tecnologia
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                    >
                      Estado
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 "
                    >
                      Produccion anual (MWh)
                    </th>

                    <th scope="col" className="relative py-3.5 px-4">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 ">
                  {listToShow.map((item, index) => (
                    <ItemDepart
                      key={item.id + index}
                      energia={item}
                      prodAnual={Math.ceil(
                        (item.produccionAnualEstimada * 100) / maxProdAnual
                      )}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 sm:flex sm:items-center sm:justify-between ">
        <div className="text-sm text-gray-500 ">
          Mostrando
          <span className="font-medium text-gray-700 ">
            {" "}
            {listToShow.length} items
          </span>
        </div>
      </div>
    </>
  );
};
