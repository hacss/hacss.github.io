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
      code: "400 0.875rem/1rem 'Nanum Gothic Coding', monospace",
    },
    "font-family": {
      mono: "'Nanum Gothic Coding', monospace",
    },
    ...Object.fromEntries(
      ["top", "right", "bottom", "left"]
        .map(x => [`border-${x}-radius`, shortcuts.variables["border-radius"]]),
    ),
  },
};
