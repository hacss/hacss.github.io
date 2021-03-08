const { variables: { len16 } } = require("./hacss.config.js");
const { loader: extractCssLoader } = require("next/dist/build/webpack/plugins/mini-css-extract-plugin.js").default;

module.exports = require("@next/mdx")({ extension: /\.mdx$/ })({
  pageExtensions: ["js", "jsx", "mdx", "tsx"],
  webpack: (config, { dev }) => ({
    ...config,
    module: {
      ...config.module,
      rules: [
        ...config.module.rules,
        {
          test: /@hacss\/build/,
          use: [
            dev ? "style-loader" : extractCssLoader,
            { loader: "css-loader", options: { url: false } },
            "postcss-loader",
            {
              loader: "string-replace-loader",
              options: {
                search: /^./,
                replace: x => `@lost gutter ${len16};${x}`,
              },
            },
            {
              loader: "val-loader",
              options: {
                sources: ["components", "pages", "utils"].map(
                  x => `./${x}/**/*.(ts|tsx)`
                ),
              },
            },
          ],
        },
      ],
    },
  }),
});
