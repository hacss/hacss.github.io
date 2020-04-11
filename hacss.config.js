const { colors } = require("./src/common.js");

module.exports = ({ rules }) => ({
  globalMapArg: x => x.replace(
    new RegExp(Object.keys(colors).join("|"), "g"),
    k => colors[k]
  ),
  rules: {
    Bxsh: (...args) => {
      switch (args.length) {
        case 2:
          const [ s, color ] = args;
          const size = { sm: "2px", md: "4px", lg: "8px" }[s] || s;
          return rules.Bxsh(`${size} ${size} ${size} 0 ${color}`);
        case 1:
          if (args[0] === "page") {
            return rules.Bxsh("-10px 0 20px 0 #000, 10px 0 20px 0 #000");
          }
        default:
          return rules.Bxsh(...args);
      }
    },
    Ff: x => {
      let font;
      switch (x) {
        case "ss":
          font = "'Inter', sans-serif";
          break;
        case "m":
          font = "'Inconsolata', monospace";
          break;
        default:
          font = x;
          break;
      }
      return rules.Ff(font);
    },
  },
});
