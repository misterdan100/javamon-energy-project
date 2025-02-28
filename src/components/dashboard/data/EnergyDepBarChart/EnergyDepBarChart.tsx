'use client'

import React, { CSSProperties } from "react";
import { scaleBand, scaleLinear, max } from "d3";
import { ClientTooltip, TooltipContent, TooltipTrigger } from "./Tooltip"; // Or wherever you pasted Tooltip.tsx
import dataJSON from '@/data/data.json'

export function EnergyDepBarChart() {
    const produccion = dataJSON.datosTiempoReal.produccion

    const data = produccion.reduce( (total: {key: string, value: number}[], item ) => {
        const existe = total.findIndex( e => e.key === item.departamento)

        if(existe >= 0) {
            total[existe].value = total[existe].value + item.produccionKW
            return total
        } else {
            return [
                ...total,
                {key: item.departamento, value: item.produccionKW}
            ]
        }
    }, []).toSorted((a, b) => b.value - a.value)




  // Scales
  const yScale = scaleBand()
    .domain(data.map((d) => d.key))
    .range([0, 100])
    .padding(0.6);

  const xScale = scaleLinear()
    .domain([0, max(data.map((d) => d.value)) ?? 0])
    .range([0, 100]);

  const longestWord = max(data.map((d) => d.key.length)) || 1;
  return (

    <div
        className="lg:col-span-6 bg-zinc-50 py-7 px-9"
    >
        <h3
            className="text-2xl/8 font-medium tracking-tight text-gray-950"
        >Energia por Departamentos</h3>

        <p
            className="text-sm/6 text-gray-600 mb-4"
        >Ranking de produccion de energia en MWh</p>

<div
      className="relative w-full h-72"
      style={
        {
          "--marginTop": "0px",
          "--marginRight": "0px",
          "--marginBottom": "16px",
          "--marginLeft": `${longestWord * 7}px`,
        } as CSSProperties
      }
    >
      {/* Chart Area */}
      <div
        className="absolute inset-0
          z-10
          h-[calc(100%-var(--marginTop)-var(--marginBottom))]
          translate-y-[var(--marginTop)]
          w-[calc(100%-var(--marginLeft)-var(--marginRight))]
          translate-x-[var(--marginLeft)]
          overflow-visible
        "
      >
        {/* Tooltip for each data point */}
        {data.map((d, index) => {
          const barWidth = xScale(d.value);
          const barHeight = yScale.bandwidth();
          const hoverColor =
            barWidth > 50
              ? "hover:bg-pink-200/40"
              : barWidth > 25
                ? "hover:bg-purple-200/40"
                : barWidth > 10
                  ? "hover:bg-indigo-200/40"
                  : "hover:bg-sky-200/40";
          return (
            <ClientTooltip key={index}>
              <TooltipTrigger>
                <div
                  key={index}
                  style={{
                    position: "absolute",
                    left: "0",
                    top: `${yScale(d.key)}%`,
                    width: `100%`,
                    height: `calc(${barHeight}% + 8px)`,
                    transform: "translateY(-4px)",
                  }}
                  className={`${hoverColor} hover:bg-gray-200/50 relative z-10`}
                />
              </TooltipTrigger>
              <TooltipContent>
                <div>{d.key}</div>
                <div className="text-gray-500 text-sm">{d.value.toLocaleString()}</div>
              </TooltipContent>
            </ClientTooltip>
          );
        })}
        {/* End of Tooltip*/}

        {/* Bars with Rounded Right Corners */}
        {data.map((d, index) => {
          const barWidth = xScale(d.value);
          const barHeight = yScale.bandwidth();
          const barColor =
            barWidth > 50
              ? "bg-pink-300 dark:bg-pink-500"
              : barWidth > 25
                ? "bg-purple-300 dark:bg-purple-500"
                : barWidth > 10
                  ? "bg-indigo-300 dark:bg-indigo-500"
                  : "bg-sky-300 dark:bg-sky-500";
          return (
            <React.Fragment key={index}>
              <div
                style={{
                  position: "absolute",
                  left: "0",
                  top: `${yScale(d.key)}%`,
                  width: `${barWidth}%`,
                  height: `${barHeight}%`,
                }}
                className={`${barColor}`}
              />
              {/* Tip of the bar */}
              <div
                style={{
                  position: "absolute",
                  left: `${barWidth}%`,
                  top: `${yScale(d.key)! + barHeight / 2}%`,
                  transform: "translate(-100%, -50%)",
                  width: "9px",
                  height: "9px",
                  borderRadius: "2px",
                }}
                className={`${barColor}`}
              />
            </React.Fragment>
          );
        })}
        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Grid lines */}
          {xScale
            .ticks(8)
            .map(xScale.tickFormat(8, "d"))
            .map((active, i) => (
              <g
                transform={`translate(${xScale(+active)},0)`}
                className="text-gray-300/80 dark:text-gray-800/80"
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
          {/* Bars with Rounded Right Corners */}
        </svg>
        {/* X Axis (Values) */}
        {xScale.ticks(4).map((value, i) => (
          <div
            key={i}
            style={{
              left: `${xScale(value)}%`,
              top: "100%",
            }}
            className="absolute text-xs -translate-x-1/2 tabular-nums text-gray-400"
          >
            {value.toLocaleString()}
          </div>
        ))}
      </div>

      {/* Y Axis (Letters) */}
      <div
        className="
          h-[calc(100%-var(--marginTop)-var(--marginBottom))]
          w-[var(--marginLeft)]
          translate-y-[var(--marginTop)]
          overflow-visible"
      >
        {data.map((entry, i) => (
          <span
            key={i}
            style={{
              left: "0",
              top: `${yScale(entry.key)! + yScale.bandwidth() / 2}%`,
            }}
            className="absolute text-xs text-gray-400 -translate-y-1/2 w-full text-right pr-2"
          >
            {entry.key}
          </span>
        ))}
      </div>
    </div>
    </div>
  );
}
