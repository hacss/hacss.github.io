const { variables: { len16 } } = require("./hacss.config.js");

module.exports = require("@next/mdx")({ extension: /\.mdx$/ })({
  pageExtensions: ["js", "jsx", "mdx", "tsx"],
  webpack: config => ({
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
              loader: "string-replace-loader",
              options: {
                search: /^./,
                replace: x => `@lost gutter ${len16};${x}`,
              },
            },
            {
              loader: "val-loader",
              options: {
                sources: ["components", "pages"].map(
                  x => `./${x}/**/*.tsx`
                ),
              },
            },
          ],
        },
      ],
    },
  }),
});
