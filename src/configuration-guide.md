# Configuration Guide

While Hacss is bundled with a default configuration that makes it useful for
smaller projects and prototyping, most projects will require a custom
configuration to support such use cases as:

* Custom breakpoints or other media queries
* Custom properties
* Variables

This guide explains how to define a custom configuration as well as the
structure of a configuration module.

## Defining a Custom Configuration

Both the [CLI](cli-guide.md) and the [Webpack integration](webpack-guide.md)
will look for a `hacss.config.js` file in the working directory (i.e. the
project root). You can specify an alternate configuration file path by using the
explicit `config` option. See the [CLI](cli-guide.md) and
[Webpack](webpack-guide.md) guides for more information.

The configuration module must export an object, which can contain either or both
of the keys `mediaQueries` and `plugins`.

### `mediaQueries`
This is a map of media queries you want to use in rules. Given a rule class
`@small{width:100%;}`, for example, you would need to define the `small` media
query here as something like `only screen and (max-width: 600px)`. Note that
`small`, `medium`, and `large` breakpoint media queries are
[provided by default](https://github.com/hacss/hacss/blob/25c901c3db58c9eced8525c5a2219aee06f1f533/index.js#L64),
but you may want to consider overriding them by specifying new values in your
configuration.

### `plugins`
This is an array of plugins you want to use. These should be specified in the
reverse of the order in which you want them to run; i.e. the plugin at index 0
runs last. For more about plugins, see the [plugin guide](plugins-guide.md).

## Configuration Example

```javascript
const indexedVariables = require("hacss/plugins/indexed-variables");

module.exports = {
  mediaQueries: {
    "medium": "only screen and (min-width: 600px) and (max-width: 1199px)",
    "large": "only screen and (min-width: 1200px)",
  },
  plugins: [
    indexedVariables({
      "font-size": {
        medium: "16px",
      },
    }),
  ],
};
```
