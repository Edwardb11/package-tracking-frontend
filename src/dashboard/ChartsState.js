import useAreaCharts from "../hooks/useAreaCharts";
import AreaCharts from "./AreaCharts";
const ChartsState = () => {
  /* Calling the hook `useAreaCharts` and storing the data in the variable `data`. */
  const data = useAreaCharts();

  /* Mapping the data to the chart. */
  let result = data.data.map((e) => {
    return e;
  });
  return <AreaCharts data={result} title={"Paquetes activos"} />;
};

export default ChartsState;
