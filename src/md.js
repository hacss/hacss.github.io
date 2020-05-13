const fs = require("fs");
const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const { Renderer, lexer, parser } = require("marked");
const hljs = require("highlight.js");
const { page } = require("./common.js");

const renderer = Object.assign(new Renderer(), {
  code: (code, lang) => `
    <pre class="
      padding:8px;
      background:rgba(255,255,255,0.2);
      border-width:1px;
      border-style:solid;
      border-color:rgba(0,0,0,0.2);
      overflow-x:auto;
    "><code class="font-family:$monospace;">${
        hljs.highlight(lang, code).value
      }</code></pre>
  `,
  codespan: code => `<code class="font-family:$monospace;">${code}</code>`,
  heading(text, level) {
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, "-");
    const fontSize = {
      1: "font-size:36px; font-weight:500;",
      2: "font-size:24px; font-weight:500;",
      3: "font-size:20px; font-weight:500;",
      4: "font-size:16px; font-weight:500;",
      5: "font-size:14px; font-weight:500;",
      6: "font-size:12px; font-weight:500;",
    }[level];

    return `
      <h${level} class="
        margin-x:0;
        :first-child{margin-top:0;}
        mdhr+margin-top:0;
        :not(:first-child){margin-top:0.5;}
        margin-bottom:0.5em;
        font-family:$sans-serif;
        ${fontSize}
        line-height:1.25;
      ">
        <a name="${escapedText}" class="anchor" href="#${escapedText}">
          <span class="header-link"></span>
        </a>
        ${text}
      </h${level}>
    `.trim();
  },
  hr: () => `
    <hr class="
      mdhr
      border-top-width:1px;
      border-bottom-width:1px;
      border-color:$blue400;
      border-style:solid;
      margin-y:32px;
    " />
  `,
  link: (href, title, text) => `
    <a
      href="${href.replace(/^([a-z\-]+)\.md$/, (_, x) => `${x}.html`)}"
      class="
        color:$blue600;
        :hover{color:$blue500;}
        :active{color:$red600;}
        :hover:active{color:$red500;}
        :visited{color:$purple600;}
        :hover:visited{color:$purple500;}
      "
      ${title ? `title="${title}"` : ""}>
      ${text}</a> 
  `.trim(),
  paragraph: x => `<p class="margin-y:0.5em;">${x}</p>`,
});

module.exports = async path => {
  const content = await readFile(path, "utf8");

  const tokens = lexer(content);

  const title = tokens
    .filter(({ type }) => type === "heading")
    .map(({ text }) => text)[0];

  return page({
    source: path,
    title,
    content: `
      <div class="
        min-height:calc(100vh-64px);
        box-sizing:border-box;
        background:$blue100;
        color:$blue800;
        padding:32px;
        font-family:$sans-serif;
        font-size:16px;
        font-weight:400;
        line-height:1.5;
      ">
        ${parser(tokens, { renderer })}
      </div>
    `,
  });
};

