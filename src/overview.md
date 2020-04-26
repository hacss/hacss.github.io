# Overview

## Motivation

Strict separation between HTML and CSS code is mostly accepted without question
as a "best practice". When challenged, however, the most common arguments
presented in favor include:

* It is what you are supposed to do.
* It is the "semantically correct" thing to do.
* The HTML is "cleaner" or less verbose.
* HTML and CSS address different concerns and/or can be maintained independently
  by different authors.
* Styles can be changed without touching the associated markup.
* Content can be reskinned by swapping style sheets.

On the other hand, practical use cases and real-world workflows reveal the
significant advantages of _colocating_ markup and styles, including:

* Design flexibility
* Local reasoning
* Fewer context switches
* Less dead CSS code
* No manual alignment of class names
* Less time and effort spent on naming things
* Elimination of redundant CSS abstractions

Hacss facilitates the colocation of markup and styles by recovering features not
available in native inline styles. It does so without significantly altering the
syntax you already know, introducing additional runtime overhead, or committing
to any particular UI library or framework.

## Mechanism

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

Hacss avoids this indirection and manual effort by analyzing the presentational
class names you use in HTML and generating the corresponding style sheet
automatically. For example:

```html
<button class="background-color:darkblue; color:white;">Button Text</button>
```

This technique of embedding styles in HTML classes allows Hacss essentially to
extend the syntax to include additional features like pseudo-selectors:

```html
<button class="
  background-color:darkblue;
  color:white;
  :hover{background-color:blue;}
">
  Button Text
</button>
```
