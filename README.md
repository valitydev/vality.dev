<div align="center">
  <img src="./assets/images/shadowed-logo.svg" height="150"/>
</div>

> Vality team [website](https://vality.dev)

## Stack

- [Gatsby](https://www.gatsbyjs.com) React-based framework
- [MUI Base](https://mui.com/base) library of headless UI components and low-level hooks
- [MUI System](https://mui.com/system) CSS utilities
- [Emotion](https://emotion.sh) library for writing CSS styles with JS
- [i18next](https://www.i18next.com) internationalization-framework

Only utilities are used from the `@mui/material` (for themes), you should not import from it from the root.

## Prerequisites

To use this repository, you need the following installed locally:

- [NodeJS](https://nodejs.org) with NPM

## Running the website locally

```shell
npm ci
npm start
```

## Internationalization

[Traverse code in order to find i18next translation keys](https://i18next-extract.netlify.app):

```shell
npm run extract-locales
```
