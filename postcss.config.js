exports.plugins = [
  "autoprefixer",
  "postcss-axis",
  [
    "postcss-font-magician",
    { hosted: ["./node_modules/@fontsource/**/*"] },
  ],
  "postcss-inset",
];
