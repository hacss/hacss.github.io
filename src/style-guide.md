# Style Guide

## Atomic Classes

### Suggestion

Use classes as single-purpose units of style. In practice, this generally means
including only one declaration per class.

### Justification

While a single class can include multiple declarations, e.g.
`background:red;color:white;`, each additional declaration affects composability
and reuse of the rule. Separating this example into two classes,
`background:red;` and `color:white;`, would allow the `color:white;` CSS to be
reused with other classes such as `background:blue;`.

## Shorthand Properties

### Suggestion

Use shorthand properties with caution.

### Justification

It makes sense, in a way, to apply a class `margin:8px;` to the same element as
a class `margin-left:0;`: You would probably be trying to achieve 8-pixel top,
right, and bottom margins; and, in some cases, you may even get the expected
result. However, because `margin:8px;` sets all margins to the same value (not
just undefined ones), the left margin would be reset to 8px if the `margin:8px;`
rule appeared later in the generated style sheet.

A few options exist to make the above example work consistently, including:
* Merging the rules, which would guarantee their application in the correct
  order: `margin:8px;margin-left:0;`
* Avoid the shorthand property altogether:
  `margin-top:8px; margin-right:8px; margin-bottom:8px; margin-left:0;`
* Use a more explicit form of the shorthand property:
  `margin:8px__8px__8px__0;`
* Create a [plugin](plugins-guide.md) to add a custom property that applies
  margins more selectively, e.g.
  `margin-y:8px; margin-right:8px; margin-left:0;`