const hacss = require("hacss");
const hacssConfig = require("hacss/config").customConfig(require("./hacss.config.js"));
const minifyHTML = require("html-minifier").minify;
const SVGO = require("svgo"), svgo = new SVGO();

const { promisify } = require("util");

const [
  glob,
  rimraf,
] = [
  "glob",
  "rimraf"
]
  .map(x => promisify(require(x)));

const path = require("path");
const fs = require("fs");
const mkdir = promisify(fs.mkdir);
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const minifyHTMLOptions = {
  collapseBooleanAttributes: true,
  collapseInlineTagWhitespace: true,
  collapseWhitespace: true,
  conservativeCollapse: true,
  html5: true,
  removeAttributeQuotes: true,
  removeComments: true,
  removeEmptyAttributes: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  useShortDoctype: true,
};

const buildCSS = () =>
  glob("./src/*.js")
    .then(x => Promise.all(x.map(y => readFile(y, "utf8"))))
    .then(x => x.join("\n"))
    .then(code => hacss(code, hacssConfig))
    .then(css => ({ "styles.css": css }));

const buildHTML = () =>
  glob("./src/*.html.js")
    .then(x => x.map(y => [
      path.basename(y.replace(/\.js$/, "")),
      minifyHTML(require(y), minifyHTMLOptions)
    ]))
    .then(Object.fromEntries);

const buildSVG = () =>
  glob("./src/*.svg")
    .then(x => Promise.all(
      x.map(y =>
        readFile(y, "utf8")
          .then(z => svgo.optimize(z))
          .then(({ data }) => [path.basename(y), data])
    )))
    .then(Object.fromEntries);

const buildSite = () =>
  Promise
    .all([ buildCSS(), buildHTML(), buildSVG() ])
    .then(files => files.reduce((all, sub) => ({ ...all, ...sub }), {}));

rimraf("./public")
  .then(() => mkdir("./public"))
  .then(buildSite)
  .then(files => Promise.all(Object.entries(files).map(([ file, contents ]) => writeFile(path.join("./public", file), contents))))
  .catch(err => console.error(err));
