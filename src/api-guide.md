# API

In addition to [CLI](cli-guide.md) and [Webpack](webpack-guide.md) options,
Hacss offers a simple API for advanced use cases.

```javascript
const hacss = require("hacss");

// plugins:
const globalVariables = require("hacss/plugins/global-variables");
const indexedVariables = require("hacss/plugins/indexed-variables");
```

## Functions

### `hacss(code, [config])`

Generates a style sheet from the specified code.

* `code` `{String}` The code containing style classes that Hacss should analyze
* `config` `{Object}` The configuration object as documented in the
  [configuration guide](configuration-guide.md)
* return: `{String}` The generated style sheet

### Plugins

For more information about plugins, see the
[plugin guide](plugins-guide.md).

#### `globalVariables(variables)`

This plugin processes global variables, as in `color:$red500;`.

* `variables` an object mapping variable names to values,
  e.g. `{ red500: "#900"}`
* returns: `{Function}` A Hacss-compatible plugin function

#### `indexedVariables(variables)`

This plugin processes indexed variables, where the value changes by context, as
in `font-size:$small; border-radius:$small;`.

* `variables` an object mapping variable names to values, with an additional
  level of nesting to index by property, e.g.
  `{ "font-size": { small: "12px" }, "border-radius": { small: "4px" } }`
* return: `{Function}` A Hacss-compatible plugin function

## Example

```javascript
const hacss = require("hacss");
const globalVariables = require("hacss/plugins/global-variables");

console.log(
  hacss(
    `<h1 class="color:$myred;">Hacss works!</h1>`,
    { plugins: [ globalVariables({ myred: "#c00" }) ] }
  )
);
```
