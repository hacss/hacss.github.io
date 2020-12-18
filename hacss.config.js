const { colors } = require("./src/common.js");

exports.atScopes = {
  sm: "media screen and (max-width:599px)",
  small: "media screen and (max-width:599px)",
  md: "media screen and (min-width:600px) and (max-width:999px)",
  medium: "media screen and (min-width:600px) and (max-width:999px)",
  lg: "media screen and (min-width:1000px)",
  large: "media screen and (min-width:1000px)",
};

exports.variables = {
  ...colors,
  "font-display": "'Do Hyeon', sans-serif",
  "font-sans": "'Inter', sans-serif",
  "font-mono": "'Inconsolata', monospace",
};
