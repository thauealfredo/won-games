<h1 align="center">BOILERPLATE</h1>

<h2 align="center">Base para NextJS com TypeScript</h2>

- [TypeScript](https://www.typescriptlang.org/)
- [NextJS](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)

<hr>
<h1 align="center">Install</h1>

<strong><h4>YARN</h4></strong>
<p>yarn create next-app -e https://github.com/thauealfredo/boilerplate </p>
<strong>yarn dev</strong>
<hr>

<strong><h4>NPM</h4></strong>
<p>npx create next-app -e https://github.com/thauealfredo/boilerplate </p>
<strong>npm run dev</strong>
<br>


```js
// package.json
{
"test:watch": "npm test -- --watch",
"test:bail": "npm test  --findRelatedTests --bail",



 "lint-staged": {
    "src/**/*": [
      "npm run fix --fix",
      "npm run -- test:bail "
    ]
  }
  
}
```
