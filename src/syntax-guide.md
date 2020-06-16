# Syntax

Hacss mostly builds upon the familiar syntax of CSS and native inline styles
with only minor adjustments.

## Whitespace

The most important thing to understand is that whitespace is strictly forbidden.
When necessary, use double-underscores (`__`), which are converted to spaces.

## Declarations

A declaration is the combination of a property and the corresponding value,
separated by a colon (`:`), and followed by a semicolon (`;`). For example:

```css
font-size:14px;
```

## Pseudo Selectors

Declarations may be enclosed within a pseudo selector scope by surrounding them
in curly braces and prepending the pseudo selectors, as in the following
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

### Context

Context may be used to affect the style of an element based on its relationship
to another element. Context is the combination of an arbitrary class name
applied to the context element, along with any applicable pseudo selectors, and
a combinator describing the relationship:

* An underscore (`_`) indicates that the context element can be any ancestor.
* A chevron (`>`) indicates that the context element must be the parent.
* A tilde (`~`) indicates that the context element can be any preceding sibling.
* A plus sign (`+`) indicates that the context element must be the immediately
  preceding sibling.

For example:

```css
editmode_:hover{background:#ccc;}
```

```css
foo:hover>color:red;
```

```css
checkbox:disabled~border-color:#ccc;
```

```css
item+margin-left:8px;
```

## Media Queries

Declarations, including those surrounded by context and/or pseudo selectors, may
be enclosed within a media query scope by surrounding them in curly braces and
prepending an at sign (`@`) followed by the media query alias. For example:

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

A rule consists of declarations, pseudo selectors, context, and media queries.
The only required component is a single declaration. The
[style guide](style-guide.md) encourages one declaration per rule in general;
however, it is possible to include multiple declarations through juxtaposition,
e.g. `font-size:16px;font-weight:bold;`.
