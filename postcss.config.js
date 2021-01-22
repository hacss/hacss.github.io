exports.plugins = [
  "@hail2u/css-mqpacker",
  "autoprefixer",
  "lost",
  "postcss-axis",
  [
    "postcss-font-magician",
    { hosted: ["./node_modules/@fontsource/**/*"] },
  ],
  "postcss-inset",
  "postcss-short-border-radius",
];
