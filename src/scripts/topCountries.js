import Data from "../assets/data/un_estimates.json" assert { type: "json" };
import { writeFileSync } from "fs";

const countries = Data.filter((entry) => entry["ISO2 Alpha-code"]);

const byYear = Object.groupBy(countries, ({ Year }) => Year);

for (const year in byYear) {
  byYear[year] = byYear[year]
    .sort(
      (a, b) =>
        b["Life Expectancy at Birth, both sexes (years)"] -
        a["Life Expectancy at Birth, both sexes (years)"],
    )
    .map((entry, index) => ({
      name: entry["Region, subregion, country or area *"],
      ISO3: entry["ISO3 Alpha-code"],
      place: index + 1,
      value: entry["Life Expectancy at Birth, both sexes (years)"],
    }))
    .slice(0, 10);
}

writeFileSync("../assets/data/topCountriesByYear.json", JSON.stringify(byYear));
