import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const AreaCharts = () => {
  const data = [
    {
      name: "Pendiente",
      uv: 1,
    },
    {
      name: "Recogido",
      uv: 40,
    },
    {
      name: "Envalijado",
      uv: 5,
    },
    {
      name: "Logistica",
      uv: 88,
    },
    {
      name: "Pend. pago",
      uv: 10,
    },
    {
      name: "Pend. envio",
      uv: 200,
    },
    {
      name: "Enviado",
      uv: 100,
    },
    {
      name: "Entregado",
      uv:300,
    },
  ];

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      {/* <ResponsiveContainer width="100%" height="100%"> */}
        <AreaChart
          width={750}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      {/* </ResponsiveContainer> */}
    </div>
  );
};

export default AreaCharts;
