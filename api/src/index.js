const path = require("path");
const app = require("./app");

const getPDF = require("./converters/pdfToText");
// getPDF(pdfRead);

const pdfRead = path.resolve("./pdfs/test_pdf.pdf");

// getPDF(pdfRead);
app.start();
