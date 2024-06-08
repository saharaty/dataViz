import { useEffect, useRef } from "react";
import * as echarts from "echarts";
import topCountries from "../../assets/data/topCountriesByYear.json";

const stringToColour = (str) => {
  let hash = 0;
  if (!str.split) {
    return "#2ab9ff";
  }
  str.split("").forEach((char) => {
    hash = char.charCodeAt(0) + ((hash << 5) - hash);
  });
  let colour = "#";
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    colour += value.toString(16).padStart(2, "0");
  }
  return colour;
};

const SlideTwo = () => {
  const chartRef = useRef();

  useEffect(() => {
    if (chartRef.current) return;
    chartRef.current = echarts.init(
      document.getElementById("top-countries-chart"),
      "light",
      {},
    );
    const updateFrequency = 3000;
    const startYear = 1950;

    const options = {
      grid: {
        top: 10,
        bottom: 30,
        left: 150,
        right: 80,
      },
      xAxis: {
        max: "dataMax",
        min: 60,
      },
      dataset: {
        source: topCountries[startYear],
      },
      yAxis: {
        type: "category",
        inverse: true,
        max: 10,
        axisLabel: {
          show: true,
          fontSize: 14,
          rich: {
            flag: {
              fontSize: 25,
              padding: 5,
            },
          },
        },
        animationDuration: 300,
        animationDurationUpdate: 300,
      },
      series: [
        {
          realtimeSort: true,
          seriesLayoutBy: "column",
          type: "bar",
          itemStyle: {
            color: function (param) {
              return stringToColour(param.value.name);
            },
          },
          encode: {
            x: "value",
            y: "name",
          },
          label: {
            show: true,
            precision: 1,
            position: "right",
            valueAnimation: true,
            fontFamily: "monospace",
          },
        },
      ],
      // Disable init animation.
      animationDuration: 0,
      animationDurationUpdate: updateFrequency,
      animationEasing: "linear",
      animationEasingUpdate: "linear",
      graphic: {
        elements: [
          {
            type: "text",
            right: 160,
            bottom: 60,
            style: {
              text: startYear,
              font: "bolder 80px monospace",
              fill: "rgba(100, 100, 100, 0.25)",
            },
            z: 100,
          },
        ],
      },
    };

    chartRef.current.setOption(options);
    function updateYear(year) {
      options.dataset.source = topCountries[year];
      options.graphic.elements[0].style.text = year;
      chartRef.current.setOption(options);
    }
    for (let i = startYear; i < 2022; ++i) {
      setTimeout(
        () => {
          updateYear(i);
        },
        (i - startYear) * updateFrequency,
      );
    }
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
      <h2>People of which countries live longer?</h2>
      <div id="top-countries-chart" className="chart" />
      <p>
        With life expectancy of 85.9 years in 2021 Monaco has the highest life
        expectancy in the world.
      </p>
    </>
  );
};

export default SlideTwo;
