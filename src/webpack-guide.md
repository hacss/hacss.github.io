# Webpack Integration Guide

Hacss is a bit different than other CSS tools (e.g. preprocessors) that you may
have used with Webpack in the past. With Hacss, you don't simply author a style
sheet in a compile-to-CSS language; rather, the style sheet is entirely
generated.

While your Webpack configuration will continue to leverage
[css-loader](https://webpack.js.org/loaders/css-loader/) and
[style-loader](https://webpack.js.org/loaders/style-loader/), you will also
use the lesser-known [val-loader](https://webpack.js.org/loaders/val-loader/) to
generate a CSS module dynamically using Hacss.

## Installation

If you have not done so already, install the required packages:

```bash
npm install -D hacss val-loader css-loader style-loader
```

## Webpack Configuration

Two small changes in the Webpack configuration (i.e. `webpack.config.js`) are
necessary to enable Hacss.

### Entry

The first change required is to insert an additional
[entry point](https://webpack.js.org/concepts/entry-points/). Most likely this
means changing the existing `entry` value from a string to an array and adding
`hacss/output`:

```javascript
module.exports = {
  entry: ["./src/main.js", "hacss/output"]
};
```

### Rule

The next step is to create a
[rule](https://webpack.js.org/configuration/module/#rule) that defines how to
load the `hacss/output` module you referenced in the `entry` array.

As a starting point, you can use the rule configuration below, setting the
`sources` option in the `val-loader` configuration to a glob pattern that
captures all source files containing CSS classes that should be included in the
generated style sheet.

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /hacss\/output/,
        use: [
          "style-loader",
          "css-loader",
          { loader: "val-loader", options: { sources: "src/*.js" } },
        ]
      }
    ]
  }
};
```

## Next Step

A generated style sheet will now be added to the page automatically. At this
point, you can add a `hacss.config.js` file alongside `webpack.config.js` if
necessary; or you can specify an additional `val-loader` option `config` which
contains the path to your Hacss configuration file. See the
[configuration guide](configuration-guide.md) for more details.
