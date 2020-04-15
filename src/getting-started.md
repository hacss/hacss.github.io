# Getting Started

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
<h1 class="C(#f00) Ff(ss) Fw(n) M(0)">Hacss works!</h1>
```

Next, generate the style sheet `ha.css` referenced in line 1 above:

```bash
hacss --output ha.css index.html
```

Finally, open `index.html` in your browser of choice and verify that the page
looks like this:

<h1 class="C(#f00) Fz(24px) Ff(ss) Fw(n) Lh(1) M(0)">Hacss works!</h1>
