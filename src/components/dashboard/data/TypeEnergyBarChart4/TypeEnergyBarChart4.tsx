import React, { CSSProperties } from "react";
import { scaleBand, scaleLinear, max } from "d3";
import { ClientTooltip, TooltipContent, TooltipTrigger } from "./Tooltip"; // Or wherever you pasted Tooltip.tsx
import Image from "next/image";
import dataJSON from '@/data/data.json'

const flagDictionary: Record<string, string> = {
  'Eólica': 'eolica',
  'Hidroeléctrica': 'hidroelectrica',
  'Solar': 'solar',
  'Biocombustibles': 'biocombustibles',
  'Geotérmica': 'geotermica'
}

// const data = [
//   { key: "European Union", values: [15, 25, 33], flag: "eu" },
//   { key: "United States", values: [11, 22, 29], flag: "us" },
//   { key: "China", values: [5, 16, 21], flag: "cn" },
//   { key: "Philippines", values: [4, 11, 19], flag: "ph" },
// ];
const barColors = ["#EEBA6B", "#E7E7F5", "#F8ED53"];
const PX_BETWEEN_BARS = 0.2;

export function TypeEnergyBarChart4() {
  const { energias, datosTiempoReal } = dataJSON
  const { consumo, produccion } = datosTiempoReal

  const data: {key: string, values: number[], flag: string}[] = []

  energias.forEach( item => {

      const index = data.findIndex( i => i.key === item.tipoEnergia)

      if(index >= 0) {
        data[index].values[2] = data[index].values[2] + 1
      } else {
        data.push({
          key: item.tipoEnergia,
          values: [0, 0, 0],
          flag: flagDictionary[item.tipoEnergia]
        })
      }
  })

  produccion.forEach( item => {
    const index = data.findIndex( i => i.key === item.tipoEnergia)

    data[index].values[0] = data[index].values[0] + item.produccionKW
  })

  consumo.forEach( item => {
    const index = data.findIndex( i => i.key === item.tipoEnergia)

    data[index].values[1] = data[index].values[1] + item.consumoKW
  })



  // Scales
  const yScale = scaleBand()
    .domain(data.map((d) => d.key))
    .range([0, 100]) // Represents the height of the chart
    .padding(0.25);

  const xScale = scaleLinear()
    .domain([0, max(data.flatMap((d) => d.values)) ?? 0])
    .range([0, 100]); // Represents the width of the chart

  const numBars = data[0].values.length; // Assuming all entries have the same number of bars
  return (
    <div
    className="lg:col-span-6 bg-zinc-50 py-7 px-9"
>
    <h3
        className="text-2xl/8 font-medium tracking-tight text-gray-950"
    >Medidas Energias Renovables</h3>

    <p
        className="text-sm/6 text-gray-600 mb-4"
    >Produccion (MWh) | Consumo (MWh) | Instaciones</p>


      <div
        className="relative w-full h-72 overflow-hidden"
        style={
          {
            "--marginTop": "0px",
            "--marginRight": "35px",
            "--marginBottom": "25px",
            "--marginLeft": `40px`,
          } as CSSProperties
        }
      >
        {/* X Axis (Images) */}
        <div
          className="absolute inset-0
          h-[calc(100%-var(--marginTop)-var(--marginBottom))]
          translate-y-[var(--marginTop)]
          overflow-visible"
        >
          {data.map((entry, i) => (
            <div
              key={i}
              style={{
                top: `${yScale(entry.key)! + yScale.bandwidth() / 2}%`,
                left: `0`,
              }}
              className="absolute rounded-full overflow-hidden size-7 text-sm text-red-700 -translate-y-1/2 pointer-events-none"
            >
            
              <Image
                key={i}
                src={`/img/${entry.flag}.svg`}
                className="opacity-80 dark:opacity-100"
                width={150}
                height={150}
                alt="logo"
              />
            </div>
          ))}
        </div>

        {/* Chart Area */}
        <div
          className="absolute inset-0
            z-10
            h-[calc(100%-var(--marginTop)-var(--marginBottom))]
            w-[calc(100%-var(--marginLeft)-var(--marginRight))]
            translate-x-[var(--marginLeft)]
            translate-y-[var(--marginTop)]
            overflow-visible
          "
        >
          <div className="relative w-full h-full">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none">
              {/* Grid lines */}
              {xScale
                .ticks(8)
                .map(xScale.tickFormat(8, "d"))
                .map((active, i) => (
                  <g
                    transform={`translate(${xScale(+active)},0)`}
                    className="text-gray-300 "
                    key={i}
                  >
                    <line
                      y1={0}
                      y2={100}
                      stroke="currentColor"
                      strokeDasharray="6,5"
                      strokeWidth={0.5}
                      vectorEffect="non-scaling-stroke"
                    />
                  </g>
                ))}
            </svg>

            {/* Bars with Rounded Right Corners */}
            {data.map((d, index) => {
              return (
                <ClientTooltip key={index}>
                  <TooltipTrigger>
                    <div
                      key={index}
                      className="absolute"
                      style={{
                        top: `${yScale(d.key)}%`,
                        width: `100%`,
                        height: `${yScale.bandwidth()}%`,
                      }}
                    >
                      {d.values.map((value, barIndex) => {
                        const barHeight = (100 - PX_BETWEEN_BARS * (numBars - 1)) / numBars;
                        const barYPosition = barIndex * (barHeight + PX_BETWEEN_BARS);
                        return (
                          <div
                            key={barIndex}
                            className="absolute left-0 rounded-r"
                            style={{
                              top: `${barYPosition}%`,
                              width: `${xScale(value)}%`,
                              height: `${barHeight}%`,
                              backgroundColor: barColors[barIndex % barColors.length],
                            }}
                          />
                        );
                      })}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="text-sm text-gray-400">{d.key}</div>
                    <div className="flex gap-4">
                      {d.values.map((value, index) => (
                        <div key={index} className="flex gap-1.5 items-center text-sm">
                          <div
                            className="h-3.5 w-1 rounded-full"
                            style={{ backgroundColor: barColors[index % barColors.length] }}
                          ></div>
                          <div>{value.toLocaleString()}</div>
                        </div>
                      ))}
                    </div>
                  </TooltipContent>
                </ClientTooltip>
              );
            })}
          </div>
        </div>
        {/* X Axis (Labels) */}
        <div className="absolute inset-0 h-[calc(100%-var(--marginTop)-var(--marginBottom))] translate-y-[var(--marginTop)] left-[var(--marginLeft)] right-[var(--marginRight)] overflow-visible">
          {data.map((entry, i) => (
            <React.Fragment key={i}>
              {entry.values.map((value, barIndex) => {
                const barPosition = (barIndex + 0.5) / numBars;
                return (
                  xScale(value) > 0 && (
                    <span
                      key={barIndex}
                      style={{
                        top: `${yScale(entry.key)! + yScale.bandwidth() * barPosition}%`,
                        left: `calc(${xScale(value)}% + 3px)`,
                      }}
                      className="absolute text-xs text-gray-700 font-medium pointer-events-none -translate-y-1/2"
                    >
                      {value.toLocaleString()}
                    </span>
                  )
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>

    </div>
  );
}
