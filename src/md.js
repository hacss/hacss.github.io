const fs = require("fs");
const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const { Renderer, lexer, parser } = require("marked");
const hljs = require("highlight.js");
const { page } = require("./common.js");

const renderer = Object.assign(new Renderer(), {
  code: (code, lang) => `
    <div class="mdblock P(8px) Bgc(#fff.2) Bd Bdc(blue200)">
      <code>
        ${hljs.highlight(lang, code).value.replace(/\n/g, "<br/>")}
      </code>
    </div>
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
      href="${href}"
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
    title,
    content: `
      <div class="Mih(100%) Bxz(bb) Bgc(blue100) C(blue800) P(16px) Ff(ss) Fz(16px) Fw(400) Lh(1.4)">
        ${parser(tokens, { renderer })}
      </div>
    `,
  });
};

