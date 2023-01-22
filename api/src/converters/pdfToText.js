const pdfParse = require("pdf-parse");
const fs = require("fs");
const path = require("path");

//use path.resolve to get the absolute path to the pdf

const getPDF = async (file) => {
  let readFileSync = fs.readFileSync(file);
  try {
    let pdfExtract = await pdfParse(readFileSync);
    console.log("File content: ", pdfExtract.text);
    console.log("Total pages: ", pdfExtract.numpages);
    console.log("All content: ", pdfExtract.info);
    fs.writeFile("newfile.txt", pdfExtract.text, function (err) {
      if (err) throw err;
      console.log("File is created successfully.");
    });
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = getPDF;
