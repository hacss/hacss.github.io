const hacss = require("hacss");
const hacssConfig = require("./hacss.config.js");
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

const md = require("./src/md.js");

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
  glob("./src/!(*.md|*.svg.js)")
    .then(x => Promise.all(x.map(y => readFile(y, "utf8"))))
    .then(x => x.join("\n"))
    .then(code => hacss(code, hacssConfig))
    .then(css => ({ "styles.css": css }));

const buildHTML = () =>
  glob("./src/*.html.js")
    .then(xs => Promise.all(
      xs.map(
        async x => {
          const html = await require(x)();
          return [
            path.basename(x).replace(/\.js$/, ""),
            minifyHTML(html, minifyHTMLOptions)
          ];
        }
      )
    ))
    .then(Object.fromEntries);

const buildMarkdown = () =>
  glob("./src/*.md")
    .then(xs => Promise.all(
      xs.map(
        async x => {
          const html = await md(x);
          return [
            path.basename(x).replace(/\.md$/, ".html"),
            minifyHTML(html, minifyHTMLOptions)
          ];
        }
      )
    ))
    .then(Object.fromEntries);

const buildSVG = () =>
  glob("./src/*.svg.js")
    .then(x => Promise.all(
      x.map(y =>
        svgo.optimize(require(y))
          .then(({ data }) => [path.basename(y).replace(/\.js$/, ""), data])
    )))
    .then(Object.fromEntries);

const copyLibs = () =>
  readFile("./node_modules/highlight.js/styles/mono-blue.css", "utf8")
    .then(x => writeFile("./public/hljs.css", x));

const buildSite = () =>
  Promise
    .all([
      buildCSS(),
      buildHTML(),
      buildMarkdown(),
      buildSVG(),
      copyLibs(),
    ])
    .then(files => files.reduce((all, sub) => ({ ...all, ...sub }), {}));

rimraf("./public")
  .then(() => mkdir("./public"))
  .then(buildSite)
  .then(files => Promise.all(Object.entries(files).map(([ file, contents ]) => writeFile(path.join("./public", file), contents))))
  .then(() => writeFile("./public/CNAME", "hacss.io"))
  .then(() => console.log("Build succeeded."))
  .catch(err => console.error(err));
