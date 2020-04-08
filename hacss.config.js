module.exports = ({ rules }) => ({
  rules: {
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
