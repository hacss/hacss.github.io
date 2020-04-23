# Plugins

Hacss syntax extends that of native inline styles with additional features such
as pseudo-selectors and media queries. However, it also offers the ability to
change style declarations through plugins.

To help you understand possible use cases for plugins, this guide will begin by
describing the plugins that are bundled with Hacss. Then, it will provide a few
examples of plugins that you might want to consider implementing yourself.
Finally, it will explain specifically how plugins work and how they can be used
together.

## Bundled Plugins
The `hacss` package actually includes a few plugins by default. Some of them,
though modeled as plugins, represent near-essential functionality and therefore
can't be disabled. Others are optional but provide features that most projects
would typically leverage.

### Core Plugins
Hacss syntax is embedded in HTML classes. Because HTML classes are delimited by
whitespace, it is not possible to include whitespace in the syntax directly. The
core plugins address this limitation by adding whitespace as needed within the
value of each generated declaration.

#### `space`
Sometimes, it is necessary to use whitespace explicitly, particularly for
certain properties like
[`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow). The
[`space` plugin](https://github.com/hacss/hacss/blob/master/plugins/space.js)
recovers the ability to use whitespace explicitly by converting
double-underscores (i.e. `__`) in class names to spaces in the corresponding
declarations.

#### `calc`
The [`calc()` function](https://developer.mozilla.org/en-US/docs/Web/CSS/calc)
requires operators to be surrounded by whitespace; i.e. `calc(50% + 5px)` works
while `calc(50%+5px)` does not. The
[`calc` plugin](https://github.com/hacss/hacss/blob/master/plugins/calc.js)
automatically adds the necessary whitespace around operators within `calc()`
expressions.

### Other Plugins

#### `global-variables`
The
[`global-variables` plugin](https://github.com/hacss/hacss/blob/master/plugins/global-variables.js)
resolves variables from a simple map specified in your Hacss configuration. Use
this plugin for a variable like `$red500` that you want to access from multiple
style properties, e.g. `background-color`, `border-color`, and `color`.

#### `indexed-variables`
The
[`indexed-variables` plugin](https://github.com/hacss/hacss/blob/master/plugins/indexed-variables.js)
works similarly to the `global-variables` plugin. The difference here, however,
is that the property name is included in the lookup. Use this for a variable
like `$small` that maps to a different value depending on to which property it
applies (e.g. `font-size` or `border-radius`).

## Custom Plugins

Consider writing a custom plugin whenever you want to change how declarations
are rendered in some way. Possible use cases include:

* **Custom CSS properties.** For example, you could introduce a custom property
  `padding-x` by replacing `padding-x` declarations with `padding-left` and
  `padding-right`.
* **Redefining a CSS property.** For example, you could create a nicer `outline`
  on the basis of `box-shadow` as described
  [here](https://dev.to/hybrid_alex/better-css-outlines-with-box-shadows-1k7j).
* **Processing property values.** For example, you could globally change some
  particular substring in all values; or you could even introduce some
  additional syntax.

## Plugin Architecture
Hacss plugins are essentially plain JavaScript functions that map one set of
declarations to another. You can specify an array of plugins in your Hacss
configuration, and they will run in reverse order; i.e. the last plugin
specified will run first.

A plugin can take one of two specific forms:
1. A function, parameterized by a declaration object, that returns a new
   declaration object
2. A tuple (2-item array), where the first item is a function as described above
   and the second item is a string array containing any additional property
   names that the plugin knows how to handle

As an example, here is a plugin that adds a `padding-x` property, which is
expanded into `padding-left` and `padding-right`:

```javascript
const horizontalPaddingPlugin = [
  decls => {
    if ("padding-x" in decls) {
      decls["padding-left"] = decls["padding-right"] = decls["padding-x"];
      delete decls["padding-x"];
    }
    return decls;
  },
  ["padding-x"],
]
```
