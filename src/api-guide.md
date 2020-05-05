# API

In addition to [CLI](cli-guide.md) and [Webpack](webpack-guide.md) options,
Hacss offers a simple API for advanced use cases.

```javascript
const hacss = require("@hacss/core");
```

## `hacss(code, [config])`

Generates a style sheet from the specified code.

* `code` `{String}` The code containing style classes that Hacss should analyze
* `config` `{Object}` The configuration object as documented in the
  [configuration guide](configuration-guide.md)
* return: `{String}` The generated style sheet
