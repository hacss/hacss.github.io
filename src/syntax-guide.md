# Syntax

Hacss mostly builds upon the familiar syntax of CSS and native inline styles
with only minor adjustments.

## Whitespace

The most important thing to understand is that whitespace is strictly forbidden.
When necessary, double-underscores (`__`) can be used instead to represent
spaces.

## Value

The simplest type of value is an unquoted literal, e.g. `1px`. This type of
value may not include syntactically-significant characters: `;}'`

A value containing syntactically-significant characters can be surrounded by
single quotes. For example: `';'`

Another simple type of value is a variable that constitutes the entirety of the
value, e.g. `$red500`.

A URL value must be enclosed in single quotes, e.g.
`url('http://abc.xyz/logo.gif')`.

Calculations are much the same as in native CSS, except that whitespace must
omitted around operators (e.g. `calc(50%+1px)`) where it would be required in
native CSS.

Variables can be included in other values using the interpolation syntax, e.g.
`#{$red500}__url('#{$asset-base-url}/logo-background.gif')`.


## Variable

A valid variable follows a `$` and consists of lowercase letters and
non-consecutive hyphens.

## Property

A valid property consists of lowercase letters and non-consecutive hyphens.
It must begin and end with a letter unless a vendor prefix is used, e.g. `-moz`,
`-ms`, `-o`, or `-webkit`.

CSS properties are well-documented elsewhere, such as
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Properties_Reference).

## Declaration

A declaration is the combination of a property and the corresponding value,
separated by a colon (`:`), for example `font-size:14px`.

## Class

A class can be used to apply a given style rule conditionally. It can be either
a _named class_ or a _pseudo-class_.

### Named Class

A named class is an arbitrary tag typically attached to an element's class list
programmatically to indicate some sort of state, such as an error condition.
A named class is qualified by a leading `.` and can contain lowercase letters
and non-consecutive hyphens. For example, the rule `.has-error{color:red}` has a
named class `has-error`. The `color:red` declaration would be activated when the
element has both the `has-error` class and the `.has-error{color:red}` class.
When `has-error` is omitted, on the other hand, `.has-error{color:red}` will
have no effect.

### Pseudo-Class

A valid pseudo-class follows a `:` and consists of lowercase letters and
non-consecutive hyphens. It must begin and end with a letter unless a vendor
prefix is used, e.g. `-moz`, `-ms`, `-o`, or `-webkit`.

A pseudo-class is functionally similar to a named class. However, unlike a named
class, the browser activates the pseudo-class automatically based on the state
of the corresponding element. For example, the rule `:focus{color:red}` has a
pseudo-class `focus`. The `color:red` declaration would be activated when the
element has focus.

Known pseudo-classes are well-documented elsewhere, such as
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes).

Hacss introduces no additional capabilities to pseudo-classes (although its
output could be processed by [PostCSS](https://postcss.org) for such a purpose).
Perhaps its only noteworthy limitation is that the `:not()` pseudo-class may
only be applied to a class list, e.g. `:not(.foo.bar:focus:hover)`.

## Pseudo-Element

A valid pseudo-element follows `::` and consists of lowercase letters and
non-consecutive hyphens. It must begin and end with a letter unless a vendor
prefix is specified, e.g. `-moz`, `-ms`, `-o`, or `-webkit`.

A pseudo-element creates a presentational element outside of the DOM tree.

Known pseudo-elements are well-documented elsewhere, such as
[MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements).

## Context

A context consists of a class list used to match some other element, followed by
a combinator describing the relationship of that element to the current element.

The available combinators are:
* `_` - ancestor
* `>` - parent
* `~` - general sibling
* `+` - adjacent sibling

An example of a context is `:checked+`, which asserts that the current element's
previous sibling matches the `checked` pseudo-class.

## Selector

A selector consists of a context, a class list, and/or a pseudo-element. Some
examples of valid selectors are:

* `.error~`
* `:hover>`
* `.success`
* `.status.completed:hover`
* `.important::after`
* `.error_.field:focus::placeholder`

### At-Scope

At-scopes correspond to
[conditional group rules](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule#Conditional_group_rules),
most commonly media queries.

A valid at-scope follows an `@`, consists of lowercase letters and
non-consecutive hyphens, and corresponds to a key in the `atScopes` map of the
Hacss configuration, as documented in the
[configuration guide](configuration-guide.md).

## Priority

Hacss moves rules that include at-scopes to the end of the style sheet. Aside
from that, it is unable to guarantee any particular ordering of rules in the CSS
output. Therefore,
[specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) must
be used to prioritize style rules.

A priority can be used to control specificity explicitly. It is represented as a
list of exclamation points. Each exclamation point increases the priority of a
rule and, in turn, its specificity.

## Rules

A rule consists of declarations, a selector, an at-scope, and/or a priority.

The only required component is a single declaration. The
[style guide](style-guide.md) encourages one declaration per rule in general;
however, it is possible to include multiple declarations through juxtaposition,
e.g. `font-size:16px;font-weight:bold;`.

In the absence of a selector or at-scope, the last declaration must be trailed
by a semicolon. Otherwise, that semicolon must be omitted, with semicolons only
being used to separate multiple declarations.

A selector requires the declarations to be surrounded by curly braces, e.g.
`.error{color:red;transform:scale(1.5)}`.

Similarly, curly braces must be added for at-scopes, e.g. `@sm{padding:0}`.

A combination of an at-scope and a selector requires two sets of curly braces,
e.g. `@sm{.loading{display:none}}`.

Any rule can optionally be followed by a priority, e.g. `color:red;!!` or
`:hover{font-weight:bold}!`.
