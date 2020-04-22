# Plugins

Hacss' class syntax extends that of native inline styles with additional
features such as pseudo-selectors and media queries. However, it also offers the
ability to change style declarations through plugins.

To help you understand possible use cases for plugins, this guide will begin by
describing the plugins that are bundled with Hacss. Then, it will provide a few
examples of plugins you might want to consider implementing yourself. Finally,
it will provide a bit more detail about how plugins actually work together.

## Bundled Plugins
The `hacss` package includes a few plugins. Some of them are modeled as plugins
but actually can't be disabled because they are considered what you might call
"core features". Others are included because we expect them to be needed most of
the time.

### Core Plugins

#### `space`
While it is preferable to avoid shorthand properties in general and thus the
need for whitespace in property values, whitespace cannot be avoided completely.
The [`space` plugin](https://github.com/hacss/hacss/blob/master/plugins/space.js)
recovers the ability to use whitespace by converting double-underscores (i.e.
`__`) to spaces.

#### `calc`
The [`calc` plugin](https://github.com/hacss/hacss/blob/master/plugins/calc.js)
addresses a problem that otherwise would occur when you attempt to use the CSS
[`calc()`](https://developer.mozilla.org/en-US/docs/Web/CSS/calc) function. In
order to work properly, operators within a `calc()` expression must be
surrounded by whitespace. However, because HTML classes are delimited by
whitespace, it is not possible to satisfy this requirement. The plugin finds
`calc()` expressions and adds the necessary whitespace automatically.
