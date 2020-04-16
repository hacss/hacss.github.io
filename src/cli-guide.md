# Command-Line Interface

Perhaps the simplest method to use Hacss is through its bundled command-line
interface. This short guide will help you to install the Hacss CLI and show you
how to use it.

## Installation

Begin with a global installation of the
[`hacss` package](https://npmjs.org/package/hacss):

```bash
npm install -g hacss
```

## Usage

You can run the `hacss` command with no arguments at any time in order to see
the available options described below.

```bash
hacss [--config <config-file>] [--output <output-file>] <sources>
```

### Parameters

The CLI accepts one to three parameters: Along with the required `sources`
argument, you can optionally specify `config` and `output` paths.

#### ```[--config <config-file>]```
When a `config` argument is specified, the configuration file specified by the
`<config-file>` path will be used. When not specified, `hacss.config.js` will be
used if it exists. It is not strictly necessary to have a configuration file, as
Hacss is bundled with a default configuration. See the
[configuration guide](configuration-guide.md) for more details.

#### ```[--output <output-file>]```
When an `output` argument is specified, the generated CSS output will be written
to the `<output-file>` path. When not specified, the CSS output will be written
to the standard output.

#### ```<sources>```
The [glob](https://www.npmjs.com/package/glob) pattern specified here will be
used to search for source files where atomic CSS classes are used. The list of
classes found within these files will be included in the CSS output. You can
also specify a series of glob patterns.
