'use client'

import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';
import dataJSON from '@/data/data.json'

// Definición de tipos para los datos
interface DataItems {
    date: number,
    'Hidroeléctrica': number
    'Eólica': number
    'Solar': number
    'Biocombustibles': number
    'Geotérmica': number
}

// Definición de tipo para categorías de colores de energía
interface EnergiaColor {
  name: 'Hidroeléctrica' | 'Eólica' | 'Solar' | 'Biocombustibles' | 'Geotérmica';
  color: string;
}

export const EmpleadosStackedChart: React.FC = () => {

    const data1: DataItems[] = []

    dataJSON.energias.forEach( (item) => {
        const existe = data1.findIndex( i => i.date === item.fechaInstalacion)

        if(existe >= 0) {
            data1[existe][item.tipoEnergia as keyof DataItems] = data1[existe][item.tipoEnergia as keyof DataItems] + item.empleosDirectos
        } else {
            const newObj = {
                date: item.fechaInstalacion,
                'Hidroeléctrica': 0,
                'Eólica': 0,
                'Solar': 0,
                'Biocombustibles': 0,
                'Geotérmica': 0,
            }
            newObj[item.tipoEnergia as keyof DataItems] = item.empleosDirectos
            data1.push(newObj)
        }
    })

    data1.sort((a, b) => a.date - b.date)

    // crear sumatoria de empleos aumentando cada anio
    const data2 = data1.reduce((acc, item, index) => {
        if (index === 0) {
            // El primer elemento se mantiene igual
            acc.push({...item});
        } else {
            // Para elementos subsiguientes, sumamos el valor actual con el acumulado anterior
            acc.push({
                date: item.date,
                'Hidroeléctrica': item.Hidroeléctrica + acc[index - 1]['Hidroeléctrica'],
                'Eólica': item.Eólica + acc[index - 1]['Eólica'],
                'Solar': item.Solar + acc[index - 1]['Solar'],
                'Biocombustibles': item.Biocombustibles + acc[index - 1]['Biocombustibles'],
                'Geotérmica': item.Geotérmica + acc[index - 1]['Geotérmica'],
            });
        }
        return acc;
    }, [] as DataItems[]);

    // Colores para cada tipo de energía
    const energyColors: EnergiaColor[] = [
        { name: 'Hidroeléctrica', color: '#0ea5e9' },  // sky-500
        { name: 'Eólica', color: '#10b981' },         // emerald-500
        { name: 'Solar', color: '#f59e0b' },          // amber-500
        { name: 'Biocombustibles', color: '#84cc16' }, // lime-500
        { name: 'Geotérmica', color: '#ef4444' }       // red-500
    ];

    // Cálculo del máximo valor para el eje Y
    const getMaxTotal = (): number => {
        if (data2.length === 0) return 1000;
        
        const lastItem = data2[data2.length - 1];
        return lastItem.Hidroeléctrica + 
               lastItem.Eólica + 
               lastItem.Solar + 
               lastItem.Biocombustibles + 
               lastItem.Geotérmica;
    };

    const maxTotal = getMaxTotal();
    // Redondeamos el máximo al siguiente 500 para tener un buen espacio en la gráfica
    const roundedMax = Math.ceil(maxTotal / 500) * 500;
    const yAxisTicks = Array.from({ length: 6 }, (_, i) => Math.round(roundedMax / 5) * i);

    return (
        <div 
            id='empleos-grafica'
            className="lg:col-span-12 bg-zinc-50 py-7 px-9"
        >
            <h3 className="text-xl sm:text-2xl/8 font-medium tracking-tight text-gray-950">Empleos generados por tipo de energía</h3>
            <p className="text-xs sm:text-sm/6 text-gray-600 mb-4">Acumulado histórico de empleos directos generados</p>
            
            {/* Leyenda */}
            <div className="pt-4">
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs mb-6">
                    {energyColors.map((item) => (
                        <div key={item.name} className="flex items-center gap-1.5">
                            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
                
                {/* Gráfico con espacio para ejes */}
                <div className="relative h-64">
                    <ResponsiveContainer width="99%" height="100%">
                        <AreaChart
                            data={data2}
                            margin={{ top: 10, right: 5, left: 0, bottom: 20 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" opacity={0.1} />
                            
                            {/* Eje X con años */}
                            <XAxis 
                                dataKey="date" 
                                tick={{ fontSize: 10 }} 
                                tickLine={false}
                                axisLine={{ stroke: '#9ca3af', strokeWidth: 1, opacity: 0.3 }}
                                minTickGap={10}
                                tickMargin={5}
                                interval="preserveStartEnd"
                            />
                            
                            {/* Eje Y */}
                            <YAxis 
                                ticks={yAxisTicks}
                                tick={{ fontSize: 10 }}
                                tickLine={false}
                                axisLine={{ stroke: '#9ca3af', strokeWidth: 1, opacity: 0.3 }}
                                tickFormatter={(value) => value.toString()}
                                width={40}
                                domain={[0, roundedMax]}
                                className="text-gray-500"
                            />
                            
                            <Tooltip 
                                contentStyle={{ 
                                    backgroundColor: 'rgba(24, 24, 27, 0.8)', 
                                    border: 'none',
                                    borderRadius: '6px',
                                    color: 'white',
                                    fontSize: '12px',
                                    padding: '8px'
                                }}
                                formatter={(value: number, name: string) => [`${value} empleos`, name]}
                                labelFormatter={(label: number) => `Año: ${label}`}
                            />
                            
                            {/* Áreas para cada tipo de energía */}
                            {energyColors.slice().reverse().map((item) => (
                                <Area
                                    key={item.name}
                                    type="monotone"
                                    dataKey={item.name}
                                    stackId="1"
                                    stroke={item.color}
                                    fill={item.color}
                                    fillOpacity={0.8}
                                />
                            ))}
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};