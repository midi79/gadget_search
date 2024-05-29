# GadgetSearch.com - React Project

![스크린샷 2024-05-29 오후 9 18 48](https://github.com/midi79/gadget_search/assets/19512435/f45c3ebe-2ac4-4f19-958c-4f40d3ca5de1)

### Package List
- npm install @tanstack/react-query
- npm install axios
- npm install react-router-dom
- npm install zustand


### Reference sources
- https://github.com/SON7AE/YouTube_React
- https://github.com/academind/react-complete-guide-code/tree/20-building-mpas-with-react-router-updated
- https://github.com/ksjitendra18/zustand-setup




This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
