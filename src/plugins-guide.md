# Plugins

Hacss' class syntax extends that of native inline styles with additional
features such as pseudo-selectors and media queries. However, it also offers the
ability to change style declarations through plugins.

To help you understand possible use cases for plugins, this guide will begin by
describing the plugins that are bundled with Hacss. Then, it will provide a few
examples of plugins you might want to consider implementing yourself. Finally,
it will explain specifically how plugins work and how they can be used together.

## Bundled Plugins
The `hacss` package actually includes a few plugins by default. Some of them,
though modeled as plugins, represent near-essential functionality and therefore
can't be disabled. Others are optional but provide features that most projects
would typically leverage.

### Core Plugins

#### `space`
Because HTML classes are delimited by whitespace, Hacss is unable to include
whitespace in its class syntax. This limitation is simply not acceptable for
certain properties like
[`box-shadow`](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow).
The [`space` plugin](https://github.com/hacss/hacss/blob/master/plugins/space.js)
recovers the ability to use whitespace by converting double-underscores (i.e.
`__`) to spaces.

#### `calc`
The [`calc` plugin](https://github.com/hacss/hacss/blob/master/plugins/calc.js)
addresses a problem that would otherwise occur when you attempt to use the CSS
[`calc()`](https://developer.mozilla.org/en-US/docs/Web/CSS/calc) function. In
order to work properly, operators within a `calc()` expression must be
surrounded by whitespace. However, once again, because HTML classes are
delimited by whitespace, it is not possible to satisfy this requirement within
the limitations of the Hacss class syntax. This plugin automatically adds the
necessary whitespace within `calc()` expressions.

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
* **Vendor prefixing.** [Autoprefixer](https://twitter.com/autoprefixer) is
  probably a better option, but you can do the same thing with a Hacss plugin.
* **Processing property values.** For example, you could globally change some
  particular substring in all values; or you could even introduce some
  additional syntax.
