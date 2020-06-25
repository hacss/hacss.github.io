# Pseudo Selectors

Hacss supports the following pseudo selectors.

## Pseudo-elements

* `::after`
* `::before`
* `::first-letter`
* `::first-line`
* `::placeholder`
* `::selection`

_Note: Pseudo-elements cannot be applied to context._

## Pseudo-classes

* `:active`
* `:checked`
* `:disabled`
* `:empty`
* `:enabled`
* `:first-child`
* `:first-of-type`
* `:focus`
* `:focus-within`
* `:hover`
* `:in-range`
* `:intersection()` _Note: This cannot be applied to context._
* `:invalid`
* `:lang()`
* `:last-child`
* `:last-of-type`
* `:link`
* `:not()` _Note: This can only be used to negate other pseudo-classes._
* `:nth-child()`
* `:nth-last-child()`
* `:nth-last-of-type()`
* `:nth-of-type()`
* `:only-of-type`
* `:only-child`
* `:optional`
* `:out-of-range`
* `:read-only`
* `:read-write`
* `:required`
* `:root`
* `:target`
* `:valid`
* `:visited`

### `:intersection()` Pseudo-class

The `:intersection()` pseudo-class allows styles to be applied conditionally
when some other class is added to the same element.

For example:

```html
<span class=":intersection(err){color:red;}">Phone Number</span><br>
<span class="err :intersection(err){color:red;}">Phone Number</span>
```

<span class=":intersection(err){color:red;}">Phone Number</span><br/>
<span class="err :intersection(err){color:red;}">Phone Number</span>
