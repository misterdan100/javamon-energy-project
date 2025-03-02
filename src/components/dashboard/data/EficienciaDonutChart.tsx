'use client'
import { pie, arc, PieArcDatum } from "d3";

type Item = { name: string; value: number };

export function EficienciaDonutChart({name, value, color}: {name: string, value: number, color: string}) {
  const radius = 420; // Chart base dimensions
  const lightStrokeEffect = 10; // 3d light effect around the slice

  // Aseguramos que value esté entre 0 y 100
  const safeValue = Math.min(Math.max(0, value), 100);
  
  // Update the data - always keep "Filled" first and "Empty" second
  const data1 = [
    { name: "Filled", value: safeValue },
    { name: "Empty", value: 100 - safeValue },
  ];

  // Modify the pie layout to create a half donut filling clockwise from left to right
  const pieLayout = pie<Item>()
    .value((d) => d.value)
    .startAngle(-Math.PI / 2) // Start at -90 degrees (12 o'clock)
    .endAngle(Math.PI / 2)    // End at 90 degrees (6 o'clock)
    .sortValues(null)         // Important: Don't sort values
    .padAngle(0.0);

  // Adjust innerRadius to create a donut shape
  const innerRadius = radius / 1.625;
  const arcGenerator = arc<PieArcDatum<Item>>().innerRadius(innerRadius).outerRadius(radius);

  // Create an arc generator for the clip path that matches the outer path of the arc
  const arcClip =
    arc<PieArcDatum<Item>>()
      .innerRadius(innerRadius + lightStrokeEffect / 2)
      .outerRadius(radius)
      .cornerRadius(lightStrokeEffect + 2) || undefined;

  const arcs = pieLayout(data1);

  const colors = {
    // gray: "fill-[#e0e0e0]",
    gray: "fill-transparent",
    purple: color,
  };

  return (
    <div className="lg:col-span-6 bg-zinc-50 py-7 px-9">
      <h3 className="text-2xl/8 font-medium tracking-tight text-gray-950">
        {name || "Eficiencia Energética"}
      </h3>

      <p className="text-sm/6 text-gray-600 mb-4">
        Porcentaje de rendimiento energético
      </p>

      <div className="relative">
        <svg
          viewBox={`-${radius} -${radius} ${radius * 2} ${radius}`}
          className="max-w-[16rem] mx-auto overflow-visible"
        >
          <defs>
            {arcs.map((d, i) => (
              <clipPath key={`fillable-half-donut-clip-${i}`} id={`fillable-half-donut-clip-${i}`}>
                <path d={arcClip(d) || undefined} />
              </clipPath>
            ))}
          </defs>
          <g>
            {/* Slices - siempre dibuja "Filled" primero (violeta) y "Empty" segundo (gris) */}
            {arcs.map((d, i) => (
              <g key={i} clipPath={`url(#fillable-half-donut-clip-${i})`}>
                <path
                  className={`stroke-white/30 ${
                    i === 1 ? colors.gray : colors.purple
                  }`}
                  strokeWidth={lightStrokeEffect}
                  d={arcGenerator(d) || undefined}
                />
              </g>
            ))}
          </g>


          <text
            transform={`translate(0, ${-radius / 4})`}
            textAnchor="middle"
            fontSize={48}
            fontWeight="bold"
            fill="currentColor"
            className="text-zinc-700"
          >
            Eficiencia
          </text>{" "}
          <text
            transform={`translate(0, ${-radius / 12})`}
            textAnchor="middle"
            fontSize={64}
            fontWeight="bold"
            fill="currentColor"
            className="text-zinc-800"
          >
            {safeValue}%
          </text>
        </svg>
      </div>
    </div>
  );
}