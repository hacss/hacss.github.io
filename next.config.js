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
            { loader: "css-loader", options: { url: false } },
            "postcss-loader",
            {
              loader: "val-loader",
              options: {
                sources: ["components", "pages", "utils"].map(
                  x => `./${x}/**/*.js`
                ),
              },
            },
          ],
        },
      ],
    },
  }),
};
