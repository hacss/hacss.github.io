const variables = require("@hacss/plugin-variables");
const { colors } = require("./src/common.js");

module.exports = {
  plugins: [
    variables({
      ...colors,
      "url-encode": encodeURIComponent,
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
