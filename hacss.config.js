const expand = require("@hacss/plugin-expand");
const variables = require("@hacss/plugin-variables");
const { colors } = require("./src/common.js");

module.exports = {
  plugins: [
    variables({
      ...colors,
      "url-encode": encodeURIComponent,
      "font-family": {
        "display": "'Do Hyeon', sans-serif",
        "sans-serif": "'Inter', sans-serif",
        "monospace": "'Inconsolata', monospace",
      },
    }),
    expand({
      "margin-x": ["margin-left", "margin-right"],
      "margin-y": ["margin-top", "margin-bottom"],
      "padding-x": ["padding-left", "padding-right"],
      "padding-y": ["padding-top", "padding-bottom"],
    }),
  ],
};
