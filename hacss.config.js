const globalVariables = require("hacss/plugins/global-variables");
const indexedVariables = require("hacss/plugins/indexed-variables");
const { colors } = require("./src/common.js");

module.exports = {
  plugins: [
    globalVariables({
      ...colors,
      "red100-urlencoded": encodeURIComponent(colors.red100),
    }),
    indexedVariables({
      "font-family": {
        "sans-serif": "'Inter', sans-serif",
        "monospace": "'Inconsolata', monospace",
      },
    }),
    [
      decls => {
        const spacingxy = prop => {
          const fromx = `${prop}-x`;
          const fromy = `${prop}-y`;
          if (fromx in decls) {
            decls[`${prop}-left`] = decls[`${prop}-right`] = decls[fromx];
            delete decls[`${prop}-x`];
          }
          if (fromy in decls) {
            decls[`${prop}-top`] = decls[`${prop}-bottom`] = decls[fromy];
            delete decls[fromy];
          }
        };
        spacingxy("margin");
        spacingxy("padding");
        return decls;
      },
      ["margin-x", "margin-y", "padding-x", "padding-y"],
    ],
  ],
};
