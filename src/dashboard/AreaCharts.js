import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const AreaCharts = ({ data, title }) => {
  return (
    <div className="relative sm:col-span-6 xl:col-span-4 shadow-lg rounded-sm border border-slate-200 block mx-5 overflow-x-auto">
      <h1 className="text-center font-bold m-5 text-blue-900">{title}</h1>
      <AreaChart
        width={750}
        height={400}
        data={data}
        margin={{
          top: 10,
          right: 20,
          left: 0,
          bottom: 0,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="cantidad"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>
    </div>
  );
};

export default AreaCharts;
