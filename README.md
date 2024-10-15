# Simple ESM Bundler with Deno


This is a simple bundler which can bundle an entry URL and it's dependencies into a single js file.

## Install

```bash
deno task install
```

## Usage

```bash
deno index.js --entry=https://esm.sh/<package> --out=./dist/bundle.js
```