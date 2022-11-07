import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Pendientes",
    uv: 31.47,
    fill: "#8884d8",
  },
  {
    name: "Recogido",
    uv: 26.69,
    fill: "#83a6ed",
  },
  {
    name: "Envalijado",
    uv: 15.69,
    fill: "#8dd1e1",
  },
  {
    name: "Logistica",
    uv: 8.22,
    fill: "#82ca9d",
  },
  {
    name: "Pend. pago",
    uv: 8.63,
    fill: "#a4de6c",
  },
  {
    name: "Pend. envio",
    uv: 2.63,
    fill: "#d0ed57",
  },
  {
    name: "Enviado",
    uv: 6.67,
    fill: "#ffc658",
  },
  {
    name: "Entregado",
    uv: 6.67,
    fill: "#f658",
  },
];

const style = {
  top: "50%",
  right: 0,
  transform: "translate(0, -50%)",
  lineHeight: "24px",
};

const RadialBarCharts = () => {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200 mx-40">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="0%"
          outerRadius="100%"
          barSize={10}
          data={data}>
          <RadialBar
            minAngle={90}
            label={{ position: "insideStart", fill: "#000" }}
            background
            clockWise
            dataKey="uv"
          />
          <Legend
            iconSize={10}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={style}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RadialBarCharts;
