let http = require("http");
let fs = require("fs");
let path = require("path");

let pathToIndex = path.join(__dirname, "static", "index.html");
let indexHtmlFile = fs.readFileSync(pathToIndex);

let pathToJs = path.join(__dirname, "static", "js.js");
let jsJsFile = fs.readFileSync(pathToJs);

let pathToStyle = path.join(__dirname, "static", "style.css");
let styleCssFile = fs.readFileSync(pathToStyle);

let server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      return res.end(indexHtmlFile);

    case "/js.js":
      return res.end(jsJsFile);

    case "/style.css":
      return res.end(styleCssFile);

    default:
      break;
  }

  return res.end("error");
});

server.listen(3000);
