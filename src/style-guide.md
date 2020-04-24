# Style Guide

## Atomic Classes

### What

Use classes as single-purpose units of style, avoiding multiple declarations in
a single class in general.

### Why

While a single class can include multiple declarations, e.g.
`background:red;color:white;`, each additional declaration affects composability
and code reuse. Separating this example into two classes, `background:red;` and
`color:white;`, would allow the `color:white;` CSS to be reused with other
classes such as `background:blue;`.
