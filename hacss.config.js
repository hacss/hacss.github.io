const shortcuts = require("@hacss/shortcuts")({
  fontFamily: "'Rubik', sans-serif",
});

module.exports = {
  ...shortcuts,
  variables: {
    ...shortcuts.variables,
    font: {
      ...shortcuts.variables.font,
      jumbo: "700 4rem/4rem 'Rubik', sans-serif",
    },
    "font-family": {
      mono: "'Inconsolata', monospace",
    },
  },
};
