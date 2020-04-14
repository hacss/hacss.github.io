# Getting Started

If you are using a modern browser, you can start tinkering in the
[Basement](https://basement.hacss.io) without installing anything. When you are
ready to take the next step, read on.

## Installation

To use Hacss in a [Node.js](https://nodejs.org) project, ensure that you have
Node.js version 11.0.0 or later installed. Hacss can be installed globally for
CLI usage or locally in a project for usage via CLI, Node API, or Webpack. For
now, we will suggest a global installation:

```bash
npm install -g hacss
```

## Testing It Out

It is recommended to create a temporary working directory somewhere on your
system as this introduction to Hacss will involve two files: an HTML document
and the corresponding style sheet that Hacss will generate.

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
