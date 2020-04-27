# Syntax

Hacss mostly builds upon the familiar syntax of CSS and native inline styles
with only minor adjustments.

## Whitespace

The most important thing to understand is that whitespace is not allowed. Avoid
it when you can and use double-underscores (`__`), which are converted to
spaces, when necessary.

## Declarations

A declaration is the combination of a property and the corresponding value,
separated by a colon (`:`), and followed by a semicolon (`;`). For example:

```css
font-size:14px;
```

## Pseudo-Selectors

Declarations may be enclosed within a pseudo-selector scope by surrounding them
in curly braces and prepending the pseudo-selectors, as in the following
examples:

```css
:hover{color:red;}
```

```css
::after{content:'';}
```

```css
:nth-child(2n):hover{background:#ccc;}
```

## Media Queries

Declarations, including those with pseudo-selectors, may be enclosed within a
media query scope by surrounding them in curly braces and prepending an `@`
character followed by the media query alias. For example:

```css
@small{width:100%;}
```

```css
@medium{:hover{color:red;}}
```

While `small`, `medium`, and `large` media queries are available by default, you
can learn how to customize these (or to add new ones) in the
[configuration guide](configuration-guide.md).

## Rules

A rule consists of declarations, pseudo-selectors, and media queries. The only
required component is a single declaration. The [style guide](style-guide.md)
encourages one declaration per rule in general; however, it is possible to
include multiple declarations through juxtaposition, e.g.
`font-size:16px;font-weight:bold;`.
