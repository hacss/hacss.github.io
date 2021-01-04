module.exports = {
  webpack: (config, options) => ({
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /@hacss\/build/,
          use: [
            "style-loader",
            "css-loader",
            "postcss-loader",
            { loader: "val-loader", options: { sources: "./pages/**/*.js" } },
          ],
        },
      ],
    },
  }),
};
