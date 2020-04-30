# Plugins

The simple plugin API allows you to bring additional capabilities to Hacss such
as variables, custom shorthand properties, or even a custom implementation of a
native property.

Plugins affect how
[declarations](https://developer.mozilla.org/en-US/docs/Web/CSS/Syntax#CSS_declaration_blocks)
are rendered in the generated CSS output. Each plugin is, essentially, a plain
JavaScript function parameterized by a map of current declarations that returns
a new map of declarations. For example:

```javascript
// Argument: original declarations
{
  "padding-x": "20px",
  "padding-y": "12px"
}

// Return value: modified declarations
{
  "padding-left": "20px",
  "padding-right": "20px",
  "padding-top": "12px",
  "padding-bottom": "12px"
}
```

## Architecture

Plugins are specified in the [configuration object](configuration-guide.md)'s
`plugins` array, where they are run in the reverse of the specified order; e.g.
the last plugin specified is invoked first, while the plugin at index 0 is
reached last. The return value of each plugin is provided as the argument to
the next.

A plugin must take either of two specific forms:
1. A function, parameterized by a declaration object, that returns a new
   declaration object
2. A tuple (2-item array), where the first item is a function as described above
   and the second item is a string array containing any additional property
   names that the plugin knows how to handle

Use the first form where you are just changing values or redefining existing CSS
properties. Use the second when you are creating custom properties.

## Examples

```javascript
const boxShadowOutlinePlugin = decls => {
  if ("outline" in decls) {
    const outlineValue = decls["outline"];
    decls["box-shadow"] = /* use box-shadow to make a fancy outline */"";
    delete decls["outline"];
  }
  return decls;
};

const horizontalPaddingPlugin = [
  decls => {
    if ("padding-x" in decls) {
      decls["padding-left"] = decls["padding-right"] = decls["padding-x"];
      delete decls["padding-x"];
    }
    return decls;
  },
  ["padding-x"],
];
```

## Available Plugins

### Variables

The Variables plugin allows you to use variables in declaration values.

#### Installation

NPM:
```bash
npm install -D @hacss/plugin-variables
```

Hacss configuration:
```javascript
const variables = require("@hacss/plugin-variables");
```

#### Basic Usage

Hacss configuration:
```javascript
module.exports = {
  plugins: [
    variables({
      blue500: "#009",
      "sans-serif": "'Inter', sans-serif",
    }),
  ],
};
```

Markup:
```html
<button class="font-family:$sans-serif; color:$blue500;">Button Text</button>
```

#### Indexed Variables

Indexed variables are resolved to a different value depending on the property
to which they are applied.

Hacss configuration:
```javascript
module.exports = {
  plugins: [
    variables({
      "font-size": {
        small: "12px",
      },
      "border-radius": {
        small: "2px",
      },
    }),
  ],
};
```

Markup:
```html
<button class="font-size:$small; border-radius:$small;">Button Text</button>
```

#### Pipes

Pipes introduce a minimal amount of programmability so that variables can be
modified in certain contexts.

Hacss configuration:
```javascript
module.exports = {
  plugins: [
    variables({
      red500: "#400",
      "url-encode": encodeURIComponent,
    }),
  ],
};
```

Markup:
```html
<div class="color:white; background:url('dynbg.gif?color=$(red500|url-encode);">
  Hello World
</div>
```
