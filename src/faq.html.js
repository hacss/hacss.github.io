const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const marked = require("marked");
const { renderer, page } = require("./common.js");

module.exports = async () => {
  const content = await readFile(path.join(__dirname, "./faq.md"), "utf8");
  return page({
    title: "FAQ",
    content: `
      <div class="Mih(100%) Bxz(bb) Bgc(blue100) C(blue800) P(16px) Ff(ss) Fz(16px) Fw(400) Lh(1.4)">
        ${marked(content, { renderer })}
      </div>
    `,
  });
};
