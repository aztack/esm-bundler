# Simple ESM Bundler with Deno


This is a simple bundler which can bundle an entry URL and it's dependencies into a single js file.

## Install

```bash
deno task install
```

## Usage

```bash
esm-bundler -entry=https://esm.sh/<package> --out=./dist/bundle.js
```

## Example

```bash
esm-bundler -entry=https://esm.sh/sass --out=./dist/sass-esm.js
```
