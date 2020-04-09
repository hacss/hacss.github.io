module.exports = ({ rules }) => ({
  rules: {
    Bxsh: (...args) => {
      switch (args[0]) {
        case "page":
          return rules.Bxsh("-10px 0 20px 0 #000, 10px 0 20px 0 #000");
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
