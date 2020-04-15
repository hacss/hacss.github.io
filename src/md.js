const fs = require("fs");
const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const { Renderer, lexer, parser } = require("marked");
const hljs = require("highlight.js");
const { page } = require("./common.js");

const renderer = Object.assign(new Renderer(), {
  code: (code, lang) => `
    <pre class="mdblock P(8px) Bgc(#fff.2) Bd Bdc(#000.2)">${
      hljs.highlight(lang, code).value
    }</pre>
  `,
  heading(text, level) {
    const escapedText = text.toLowerCase().replace(/[^\w]+/g, "-");
    const fz = {
      1: "Fz(36px)",
      2: "Fz(28px)",
      3: "Fz(24px)",
      4: "Fz(20px)",
      5: "Fz(16px)",
      6: "Fz(12px)",
    }[level];

    return `
      <h${level} class="Mx(0) Mt(0) Mb(0.5em) Ff(ss) Fw(400) ${fz} mdblock mdblock+Mt(0.5em)">
        <a name="${escapedText}" class="anchor" href="#${escapedText}">
          <span class="header-link"></span>
        </a>
        ${text}
      </h${level}>
    `.trim();
  },
  link: (href, title, text) => `
    <a
      href="${href.replace(/^([a-z\-]+)\.md$/, (_, x) => `${x}.html`)}"
      class="C(blue600) C(blue500):h C(red600):a C(red500):h:a C(purple600):vi C(purple500):h:vi"
      ${title ? `title="${title}"` : ""}>
      ${text}</a> 
  `.trim(),
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
      <div class="Mih(100%) Bxz(bb) Bgc(blue100) C(blue800) P(16px) Ff(ss) Fz(16px) Fw(400) Lh(1.4)">
        ${parser(tokens, { renderer })}
      </div>
    `,
  });
};

