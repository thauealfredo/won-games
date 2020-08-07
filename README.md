<h1 align="center">BOILERPLATE</h1>

<h2 align="center">Base para NextJS com TypeScript</h2>

Com:
<br>
<a href="https://jestjs.io/" target="blank" >JEST</a>
<br>
<a href="https://styled-components.com/" target="blank" >Styled Components </a>
<br>
<a href="https://storybook.js.org/" target="blank" >StoryBook</a>
<br>
<a href="https://eslint.org/" target="blank" >Eslint</a>
+
<a href="https://prettier.io/" target="blank" >Prettier</a>
<br>
<a href="https://github.com/typicode/husky" target="blank" >Husky Hook</a>

<hr>
<h1 align="center">Install</h1>

<strong><h4>YARN</h4></strong>
<p>yarn create next-app -e https://github.com/thauealfredo/boilerplate </p>
<hr>

<strong><h4>NPM</h4></strong>
<p>npx create next-app -e https://github.com/thauealfredo/boilerplate </p>
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
