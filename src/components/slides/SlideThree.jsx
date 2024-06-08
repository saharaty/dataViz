import { useEffect, useRef } from "react";
import * as echarts from "echarts";

const SlideThree = () => {
  const chartRef = useRef();

  useEffect(() => {
    if (chartRef.current) return;
    chartRef.current = echarts.init(
      document.getElementById("male-vs-female-chart"),
      "light",
      {},
    );
    chartRef.current.setOption({
      legend: {},
      tooltip: {},
      dataset: {
        dimensions: ["type", "Male", "Female"],
        source: [
          {
            type: "Life Expectancy at Birth",
            Male: 68.4,
            Female: 73.8,
          },
          {
            type: "Life Expectancy at Age 15",
            Male: 56.7,
            Female: 62,
          },
          {
            type: "Life Expectancy at Age 65",
            Male: 14.7,
            Female: 17.7,
          },
          {
            type: "Life Expectancy at Age 80",
            Male: 6.8,
            Female: 8.4,
          },
        ],
      },
      xAxis: { type: "category" },
      yAxis: {},
      series: [{ type: "bar" }, { type: "bar" }],
    });
  }, []);

  useEffect(() => {
    const resizeListener = () => chartRef.current.resize();
    window.addEventListener("resize", resizeListener);
    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, []);

  return (
    <>
      <h2>Who lives longer men or woman?</h2>
      <div id="male-vs-female-chart" className="chart" />
      <p>
        Through different stages of life, Women have a higher life expectancy.
      </p>
    </>
  );
};

export default SlideThree;
