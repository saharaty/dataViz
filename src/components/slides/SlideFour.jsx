import { useEffect, useRef } from "react";
import * as echarts from "echarts";

const SlideFour = () => {
  const chartRef = useRef();

  useEffect(() => {
    if (chartRef.current) return;
    chartRef.current = echarts.init(
      document.getElementById("life-expectancy-prediction"),
      "light",
      {},
    );
    chartRef.current.setOption({
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999",
          },
        },
      },
      xAxis: [
        {
          type: "category",
          data: [
            1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960,
            1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971,
            1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982,
            1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993,
            1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004,
            2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015,
            2016, 2017, 2018, 2019, 2020, 2021,
          ],
          axisPointer: {
            type: "shadow",
          },
        },
      ],
      yAxis: [
        {
          type: "value",
          name: "Life Expectancy",
          min: 40,
          max: 80,
          axisLabel: {
            formatter: "{value} Years",
          },
        },
      ],
      series: [
        {
          name: "Male",
          type: "bar",
          tooltip: {
            valueFormatter: function (value) {
              return value + " Years";
            },
          },
          data: [
            44.6, 45.4, 46.6, 47.2, 48.0, 48.5, 49.0, 49.3, 49.8, 47.7, 46.0,
            48.6, 51.3, 51.7, 52.3, 51.9, 52.6, 53.0, 53.5, 53.9, 54.2, 53.6,
            55.1, 55.6, 56.0, 56.2, 56.6, 57.2, 57.5, 57.9, 58.2, 58.6, 59.0,
            59.2, 59.5, 59.8, 60.4, 60.7, 60.8, 61.4, 61.5, 61.7, 61.9, 62.0,
            62.0, 62.4, 62.8, 63.1, 63.3, 63.7, 64.1, 64.4, 64.7, 65.0, 65.4,
            65.7, 66.2, 66.5, 66.8, 67.3, 67.6, 68.0, 68.3, 68.7, 69.0, 69.3,
            69.6, 69.8, 70.0, 70.2, 69.4, 68.4,
          ],
        },
        {
          name: "Female",
          type: "bar",
          tooltip: {
            valueFormatter: function (value) {
              return value + " Years";
            },
          },
          data: [
            48.4, 49.0, 49.9, 50.4, 51.2, 51.8, 52.3, 52.6, 53.3, 51.1, 49.4,
            52.2, 55.0, 55.4, 56.1, 55.9, 56.4, 56.9, 57.5, 57.8, 58.1, 58.2,
            59.1, 59.6, 60.1, 60.4, 60.8, 61.6, 62.0, 62.5, 62.9, 63.4, 63.9,
            64.0, 64.4, 64.7, 65.2, 65.6, 65.8, 66.3, 66.5, 66.5, 66.8, 67.0,
            67.0, 67.4, 67.6, 67.9, 68.2, 68.5, 68.9, 69.3, 69.6, 70.0, 70.3,
            70.8, 71.3, 71.7, 71.9, 72.4, 72.7, 73.1, 73.5, 73.8, 74.2, 74.4,
            74.7, 75.0, 75.2, 75.4, 74.8, 73.8,
          ],
        },
        {
          name: "Both Sexes",
          type: "line",
          tooltip: {
            valueFormatter: function (value) {
              return value + " Years";
            },
          },
          data: [
            46.5, 47.1, 48.2, 48.8, 49.6, 50.1, 50.6, 50.9, 51.5, 49.3, 47.7,
            50.4, 53.1, 53.6, 54.2, 53.9, 54.5, 54.9, 55.5, 55.8, 56.1, 55.9,
            57.1, 57.6, 58.0, 58.3, 58.7, 59.4, 59.7, 60.2, 60.6, 61.0, 61.4,
            61.6, 61.9, 62.2, 62.8, 63.2, 63.3, 63.8, 64.0, 64.1, 64.3, 64.4,
            64.5, 64.9, 65.1, 65.5, 65.7, 66.1, 66.5, 66.8, 67.1, 67.5, 67.8,
            68.2, 68.7, 69.1, 69.3, 69.8, 70.1, 70.5, 70.9, 71.2, 71.6, 71.8,
            72.1, 72.3, 72.6, 72.8, 72.0, 71.0,
          ],
        },
      ],
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
      <h2>Do we live longer in future?</h2>
      <div id="life-expectancy-prediction" className="chart" />
      <p>
        The trend shows that people are going to live longer, thanks to modern
        medicines and better living conditions but We could see major influence
        of COVID-19 and Asian Flu (1957-1958).
      </p>
    </>
  );
};

export default SlideFour;
