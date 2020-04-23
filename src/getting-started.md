# Getting Started

## Motivation

While it is often taken for granted that HTML and CSS address different concerns
and should be rigidly separated, arguments in favor of this view lack substance
and rarely hold true in practice. On the other hand, reasons to colocate markup
and style information are relatively specific and easy to understand, e.g.:

* Less dead code
* More consistent code
* Fewer context switches (as markup and styles tend to change together)
* Local reasoning
* Less time wasted trying to name new things and trying to understand the names
  of existing things

The goal of Hacss is to make inline styles more useful by unlocking features
that are otherwise only available in a separate style sheet.

## Technical Overview

To understand how this works, consider the following HTML snippet which uses
native inline styles to change the background color of the button to `darkblue`
and the text color to `white`:

```html
<button style="background-color: darkblue; color: white">Button Text</button>
```

This is fine, but it is a rather limited treatment. It is very common, for
example, to change the background color of a button on hover; but we cannot
achieve this simple effect with a native inline style. Instead, we normally have
to resort to a separate style sheet and applying an HTML class:

```html
<button class="foo">Button Text</button>
```

```css
.foo {
  background-color: darkblue;
  color: white;
}

.foo:hover {
  background-color: blue;
  color: white;
}
```

Hacss saves the trouble of authoring this separate style sheet by generating the
style sheet from presentational class names that appear in the markup. For
example:

```html
<button class="background-color:darkblue; color:white;">Button Text</button>
```

This technique of embedding styles in HTML classes allows Hacss essentially to
extend the syntax to include features like pseudo-selectors:

```html
<button
  class="
    background-color:darkblue;
    color:white;
    :hover{background-color:blue;}
  ">
  Button Text
</button>
```

## Hacss in Action

If you are using a modern browser, you can start tinkering in the
[Basement](https://basement.hacss.io) without installing anything. When you are
ready to use Hacss in your own environment, the instructions that follow will
guide you through installation and basic usage.

## Installation

First, ensure that you are running [Node.js](https://nodejs.org) version 11.0.0
or later. Hacss can be installed globally for CLI use or project-locally to use
via the CLI, the Node API, or Webpack. The easiest way to get started is a
global installation:

```bash
npm install -g hacss
```

## Testing It Out

This exercise will involve two files: an HTML document that you will create and
a CSS file that you will generate with Hacss.

First, create a file called `index.html` with the following content:

```html
<link rel="stylesheet" href="ha.css" />
<h1 class="color:#f00; font-family:sans-serif; font-weight:normal; margin:0;">
  Hacss works!
</h1>
```

Next, generate the style sheet `ha.css` referenced in line 1 above:

```bash
hacss --output ha.css index.html
```

Finally, open `index.html` in your browser of choice and verify that the page
looks like this:

<h1 class="
  color:#f00;
  font-size:24px;
  font-family:sans-serif;
  font-weight:normal;
  line-height:1;
  margin:0;
">
  Hacss works!
</h1>

## Next Steps

Most importantly, if you have found anything in this guide to be confusing or
difficult, please
<a href="https://github.com/hacss/hacss.io/issues/new">open an issue</a>.

Otherwise, you can continue your experiments in the
[Basement](https://basement.hacss.io) or continue to the
[Guides](guides.md) section to learn about Hacss in greater detail.
