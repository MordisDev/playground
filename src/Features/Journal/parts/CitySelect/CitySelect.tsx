import Papa from "papaparse";
import { useMemo } from "react";

export const CitySelect = () => {
  const cityList = useMemo(() => {
    Papa.parse("worldcities.csv");
  }, []);
  console.log(cityList);
  return <div>CitySelect</div>;
};
