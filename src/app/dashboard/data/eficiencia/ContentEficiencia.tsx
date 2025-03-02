'use client'

import { EficienciaDonutChart } from "@/components"

export const ContentEficiencia = () => {
  
  
  return (
    <>
                <div className="lg:col-span-12 bg-white grid grid-cols-12">
            <EficienciaDonutChart
              name="Biocombustibles"
              value={70}
              color="fill-violet-500"
            />

            <div className="lg:col-span-6 flex gap-4 text-gray-600 flex-col bg-white py-4">
              <p>
                Con una eficiencia del{" "}
                <span className="font-semibold text-amber-500">70%</span>, los
                biocombustibles son una alternativa energética importante en
                Colombia, principalmente derivados de la caña de azúcar para
                bioetanol y aceite de palma para biodiesel. El país es el tercer
                productor de biocombustibles en Latinoamérica, con plantas en
                Valle del Cauca, Risaralda y Meta. Esta industria aporta a la
                diversificación energética, reduce la dependencia de
                combustibles fósiles y contribuye a la reducción de emisiones de
                gases de efecto invernadero. Además, genera importantes
                beneficios socioeconómicos al crear empleos rurales y fortalecer
                las cadenas agrícolas nacionales.
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Fuente: Federación Nacional de Biocombustibles de Colombia
              </p>
            </div>
          </div>

          <div className="lg:col-span-12 bg-white grid grid-cols-12">
            <EficienciaDonutChart
              name="Hidroelectrica"
              value={90}
              color="fill-cyan-500"
            />

            <div className="lg:col-span-6 flex gap-4 text-gray-600 flex-col bg-white py-4">
              <p>
                Con una eficiencia del{" "}
                <span className="font-semibold text-cyan-600">90%</span>, la
                energía hidroeléctrica es la fuente más eficiente en Colombia
                gracias a su privilegiada ubicación geográfica con numerosas
                cuencas hidrográficas. Las principales centrales (Hidroituango,
                El Quimbo e Hidrosogamoso) representan el 70% de la capacidad
                instalada nacional, ofreciendo ventajas como cero emisiones
                directas de CO₂, almacenamiento de energía potencial y
                flexibilidad operativa para adaptarse a los picos de demanda del
                Sistema Interconectado Nacional.
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Fuente: XM - Operador del Sistema Interconectado Nacional
              </p>
            </div>
          </div>

          <div className="lg:col-span-12 bg-white grid grid-cols-12">
            <EficienciaDonutChart
              name="Eolica"
              value={85}
              color="fill-fuchsia-500"
            />

            <div className="lg:col-span-6 flex gap-4 text-gray-600 flex-col bg-white py-4">
              <p>
                Con una eficiencia del{" "}
                <span className="font-semibold text-fuchsia-600">85%</span>, la
                energía eólica es una fuente renovable con gran potencial en
                Colombia, especialmente en la región norte como La Guajira donde
                los vientos superan los 9 m/s. El parque eólico Jepírachi fue
                pionero, mientras nuevos proyectos como Alpha y Beta expandirán
                la capacidad instalada. Esta tecnología ofrece ventajas como
                bajas emisiones de CO₂, complementariedad con la generación
                hidroeléctrica durante temporadas secas, y rápida instalación
                con menores impactos ambientales comparada con otras fuentes de
                energía.
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Fuente: UPME - Unidad de Planeación Minero Energética
              </p>
            </div>
          </div>


          <div className="lg:col-span-12 bg-white grid grid-cols-12">
            <EficienciaDonutChart
              name="Solar"
              value={92}
              color="fill-amber-500"
            />

            <div className="lg:col-span-6 flex gap-4 text-gray-600 flex-col bg-white py-4">
              <p>
                Con una eficiencia del{" "}
                <span className="font-semibold text-amber-500">22%</span>, la
                energía solar fotovoltaica crece rápidamente en Colombia gracias
                a su ubicación privilegiada en la zona ecuatorial, que garantiza
                radiación solar constante durante todo el año. Regiones como La
                Guajira, Costa Atlántica y Orinoquía presentan los mayores
                índices de radiación solar. El parque solar El Paso en Cesar y
                la granja solar Celsia en Bolívar son referentes nacionales. Las
                ventajas incluyen cero emisiones contaminantes durante
                operación, instalación modular que permite escalabilidad, y
                complementariedad con la generación hidroeléctrica durante
                temporadas secas.
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Fuente: IDEAM - Instituto de Hidrología, Meteorología y Estudios
                Ambientales
              </p>
            </div>
          </div>

          <div className="lg:col-span-12 bg-white grid grid-cols-12">
            <EficienciaDonutChart
              name="Geotérmica"
              value={88}
              color="fill-lime-500"
            />

            <div className="lg:col-span-6 flex gap-4 text-gray-600 flex-col bg-white py-4">
              <p>
                Con una eficiencia del{" "}
                <span className="font-semibold text-lime-600">88%</span>, la
                energía geotérmica representa una oportunidad prometedora en
                Colombia gracias a su ubicación en el Cinturón de Fuego del
                Pacífico. Las principales zonas con potencial geotérmico son el
                Macizo Volcánico Ruiz-Tolima, Paipa-Iza en Boyacá y Azufral en
                Nariño, con temperaturas subterráneas que alcanzan los
                200-300°C. Aunque aún en fase exploratoria, estudios de la UPME
                estiman un potencial de 1-2 GW. Esta energía ofrece ventajas
                como generación constante (factor de capacidad 90%), mínimas
                emisiones de CO₂, y pequeña huella superficial comparada con
                otras fuentes renovables.
              </p>

              <p className="text-sm text-gray-500 mt-2">
                Fuente: Servicio Geológico Colombiano - SGC
              </p>
            </div>
          </div>
    </>
  )
}