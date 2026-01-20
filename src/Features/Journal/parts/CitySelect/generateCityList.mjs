import fs from "node:fs";
import Papa from "papaparse";

const readCSV = async (filePath) => {
  const csvFile = fs.readFileSync(filePath);
  const csvData = csvFile.toString();
  return new Promise((resolve) => {
    Papa.parse(csvData, {
      header: true,
      complete: (results) => {
        console.log("Complete", results.data.length, "records.");
        resolve(results.data);
      },
    });
  });
};

const test = async () => {
  let parsedData = await readCSV("./data/worldcities.csv");
  console.log(parsedData.filter((item) => item.city_ascii === "Gdansk"));
};

test();
