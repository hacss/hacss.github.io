# Configuration Guide

While Hacss is bundled with a default configuration that makes it useful for
smaller projects and prototyping, most projects will require a custom
configuration to support such use cases as:

* Global variables, eg color palette or spacing presets
* Scoped variables, eg `small`, where the value depends on context
* Redefining rules, eg changing how `O` (outline) is implemented or custom
  parameterization of `Bxsh` (box shadow)
* Custom rules
* Custom breakpoints in responsive design
* Post-processing, eg replacing a given substring in all CSS output

This guide explains how to define a custom configuration as well as the
structure of a configuration module.

## Defining a Custom Configuration

Both the CLI and the [Webpack integration](webpack-guide.md) will look for a
`hacss.config.js` file in the working directory (ie the project root). You
can specify an alternate configuration file path by using the explicit `config`
option. See the CLI and [Webpack](webpack-guide.md) guides for more information.

The configuration module may export either
* a configuration object or
* a function that returns a configuration object.

In the latter case, Hacss will pass its default configuration object as an
argument, allowing you to create custom rules, scopes, and other configuration
easily on the basis of defaults.

In either case, custom configuration is applied on top of the default
configuration, so it is possible and even preferable to export a partial
configuration object reflecting only differences from the default configuration.

## Configuration Structure

```typescript
type RuleFn = (...args: any) => string;

type RuleSpec = RuleFn | Array<string | RuleFn>;

type ConfigSpec = {
    rules: { [ruleName: string]: RuleSpec },
    scopes: { [scopeName: string]: (css: string) => string },
    globalMapArg: (value: any, ruleName: string, argIndex: number) => any,
    globalMapOutput: (output: string, ruleName: string) => string,
}

type Config = Partial<ConfigSpec> | ((defaultConfig: ConfigSpec) => Partial<ConfigSpec>);
```

### `rules`

Conceptually, the `rules` object maps a rule name to the corresponding
declarations. Each value can take one of three basic forms:

1. A function that maps one or more arguments to the corresponding declarations.
   For example, the declarations for a class name `Tsh(2px,black)` can be
   generated from the rule
   `` Tsh: (size, color) => `text-shadow: ${size} ${size} ${color}` ``.
   While you can review the
   [default rules](https://github.com/hacss/hacss/blob/master/config/rules.js)
   as examples, note that, despite using a few utility functions to simplify
   their implementation, they are fundamentally just plain functions.
2. A string that contains the declarations. You would, of course, use this when
   no parameters are required.
3. An array containing a combination of the above. In this case, the value at
   index 0 should be a string (assuming no parameters are required) or `null`.
   The remaining indexes should correspond to the arity of the rule as used in
   code. (For example, when evaluating a class `Tsh(2px,black)`, Hacss would
   look for a function at index 2 of this array.) _Note: You can also use a map
   like `{ 0: "property: value", 2: (a, b) => "/* declarations */" }` instead
   of an array if you feel it provides better lookup performance or clarity._

### `scopes`
The `scopes` object maps a scope name to a function used to construct the
corresponding CSS block. Typically, this would be used for media queries. A
scope function is called with the corresponding block of CSS and returns a new
block. See the
[default scopes](https://github.com/hacss/hacss/blob/master/config/scopes.js)
for examples.

### `globalMapArg`
The `globalMapArg` function is applied to all arguments before they are passed
to a rule. The typical use case for this would be global variable lookups,
although it could be used for more complicated transformations as well. Consider
changing specific rules before using this option due to its global nature.

### `globalMapOutput`
The `globalMapOutput` function is applied to the output of all rules. Consider
changing specific rules before using this option due to its global nature.
