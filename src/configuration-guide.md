# Configuration Guide

This guide explains how to configure Hacss to support variables and at-scopes
(media queries).

## Configuration Module

Both the [CLI](cli-guide.md) and the [Webpack integration](webpack-guide.md)
will look for a `hacss.config.js` file in the working directory (i.e. the
project root). You can specify an alternate configuration file path by using the
explicit `config` option. See the [CLI](cli-guide.md) and
[Webpack](webpack-guide.md) guides for more information.

The configuration module must export an object, which can contain either or both
of the keys `atScopes` and `variables`.

## `variables`
This is a map of variables that can be used in style rules. A rule
`:hover{color:$red500}`, for example, requires a corresponding key `red500` in
the `variables` map.

### `atScopes`
This is a map of at-scopes that can be used in style rules. A rule
`@small{width:100%}`, for example, requires a corresponding key `small`
in the `atScopes` map with a corresponding value like
`media only screen and (max-width: 600px)`.

## Configuration Example

```javascript
exports.variables = {
  red500: "#c33",
  "font-default": "400 1rem/1.25 'Inter', sans-serif",
};

exports.atScopes = {
  small: "media only screen and (max-width: 599px)",
  medium: "media only screen and (min-width: 600px) and (max-width: 1199px)",
  large: "media only screen and (min-width: 1200px)",
};
```
