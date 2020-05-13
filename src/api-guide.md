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
* return: `{Object}` The results of generating the style sheet, including the
  following properties:
  - `css` `{String}` The generated style sheet
  - `ignored` `{Array}` A list of ignored class names and errors, with each item
    including the following properties:
    - `className` `{String}` The string that was matched as a potential style
      rule
    - `error` `{String}` A description of the error that prevented the class
      from being included in the style sheet
