import React, { CSSProperties } from "react";
import dataJSON from '@/data/data.json'

const data = [
  {
    key: "Utils",
    value: 17.1,
    color: "from-fuchsia-300/80 to-fuchsia-400/80",
  },
  {
    key: "Tech",
    value: 14.3,
    color: "from-violet-300 to-violet-400",
  },
  {
    key: "Energy",
    value: 27.1,
    color: "from-blue-300 to-blue-400",
  },
  {
    key: "Cyclicals",
    value: 42.5,
    color: "from-sky-300 to-sky-400",
  },
  {
    key: "Fuel",
    value: 12.7,
    color: "from-orange-200 to-orange-300",
  },
];

const flagDictionary: Record<string, string> = {
  'Eólica': "from-fuchsia-300/80 to-fuchsia-400/80",
  'Hidroeléctrica': "from-cyan-300 to-cyan-400",
  'Solar': "from-amber-300 to-amber-400",
  'Biocombustibles': "from-violet-300 to-violet-400",
  'Geotérmica': "from-lime-200 to-lime-300"
}

export function EnergiesBreakdown() {
  // clean data ------------
  const { energias, datosTiempoReal } = dataJSON
  const { consumo, produccion } = datosTiempoReal

  const data: {key: string, value: number, color: string}[] = []

  energias.forEach( item => {

      const index = data.findIndex( i => i.key === item.tipoEnergia)

      if(index >= 0) {
        data[index].value = data[index].value + 1
      } else {
        data.push({
          key: item.tipoEnergia,
          value: 1,
          color: flagDictionary[item.tipoEnergia]
        })
      }
  })

  produccion.forEach( item => {
    const index = data.findIndex( i => i.key === item.tipoEnergia)

    data[index].value = data[index].value + 1
  })

  consumo.forEach( item => {
    const index = data.findIndex( i => i.key === item.tipoEnergia)

    data[index].value = data[index].value + 1
  })





  const gap = 0.3; // gap between bars
  const totalValue = data.reduce((acc, d) => acc + d.value, 0);
  const barHeight = 54;
  const totalWidth = totalValue + gap * (data.length - 1);
  let cumulativeWidth = 0;

  const cornerRadius = 4; // Adjust this value to change the roundness

  return (
    <div
    className="lg:col-span-12 bg-zinc-50 py-7 px-9"
>
    <h3
        className="text-2xl/8 font-medium tracking-tight text-gray-950"
    >Instacion por Energias Renovables</h3>

    <p
        className="text-sm/6 text-gray-600 mb-4"
    >Numero de proyectos instalados actuales</p>

      <div
        className="relative h-[var(--height)] mb-1.5"
        style={
          {
            "--marginTop": "0px",
            "--marginRight": "0px",
            "--marginBottom": "0px",
            "--marginLeft": "0px",
            "--height": `${barHeight}px`,
          } as CSSProperties
        }
      >
        {/* Chart Area */}
        <div
          className="absolute inset-0 
            h-[calc(100%-var(--marginTop)-var(--marginBottom))]
            w-[calc(100%-var(--marginLeft)-var(--marginRight))]
            translate-x-[var(--marginLeft)]
            translate-y-[var(--marginTop)]
            overflow-visible
            flex flex-wrap
          "
        >
          {/* Bars with Gradient Fill */}
          {data.map((d, index) => {
            const barWidth = (d.value / totalWidth) * 100;
            const xPosition = cumulativeWidth;
            cumulativeWidth += barWidth + gap;

            return (
              <div
                key={index}
                className="relative"
                style={{
                  width: `${barWidth}%`,
                  height: `${barHeight}px`,
                  left: `${xPosition}%`,
                  position: "absolute",
                }}
              >
                <div
                  className={`bg-gradient-to-b ${d.color}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: `${cornerRadius}px`,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: `${barHeight / 5}px`,
                    left: "50%",
                    transform: "translateX(-50%)",
                    color: "#4b5563",
                    fontSize: "14px",
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  {d.key}
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: `${barHeight / 2}px`,
                    left: "50%",
                    transform: "translateX(-50%)",
                    color: "#4b5563",
                    fontSize: "12px",
                    fontWeight: "bold",
                    textAlign: "center",
                    fontFamily: "monospace",
                  }}
                >
                  {d.value}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    
  </div>
);
}
