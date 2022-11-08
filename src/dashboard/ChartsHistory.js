import React from "react";
import useHistoryChart from "../hooks/useHistoryChart";
import AreaCharts from "./AreaCharts";

const ChartHistory = () => {
  /* Calling the hook `useAreaCharts` and storing the data in the variable `data`. */
  const data = useHistoryChart();

  /* Mapping the data to the chart. */
  let result = data.data.map((e) => {
    return e;
  });
  return <AreaCharts data={result} title={"Historial"} />;
};

export default ChartHistory;
