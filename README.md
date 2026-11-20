# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
In a controlled component, the form element’s value is controlled by the React state. The component's state is the "single source of truth," and any changes to the form element's value are handled through React's state and event system. This means that the form's data is always in sync with the component’s state.

Key Points:

The input’s value is tied to the state (usually via the value prop).

React has full control over the form element.

Changes to the form input are handled by a state change (via the onChange event).

Useful for cases where you need to immediately access or manipulate the form value in React.

Uncontrolled Components

In an uncontrolled component, the form element’s value is not controlled by React state. Instead, React relies on the DOM itself to handle the form element’s value, and it can be accessed using a ref. When the form is submitted, you manually read the value of the form elements using ref to interact with the DOM directly.

Key Points:

The input’s value is not tied to React state.

React does not control the form element, which makes it similar to how forms work in traditional HTML.

To read the value of the input, you use useRef to access the DOM node directly.

Q1. What is an uncontrolled component in React?

An uncontrolled component is a form element where the DOM manages the input value instead of React state. We can access its value using useRef().

Q2. Why do we use useRef in uncontrolled components?

We use useRef() to access DOM elements directly and retrieve or modify their values without using React state.

Q3. Can we use useState in an uncontrolled component?

Yes, but it is not necessary for managing the input value. The defining characteristic is that the DOM, rather than React state, controls the value.

Q4. What is the difference between useRef and useState?

useRef stores a mutable reference and changing .current does not trigger a re-render.

useState stores component state, and updating it triggers a re-render when the state changes.

Q5. What is the purpose of inputRef.current.value?

It retrieves the current value entered into the referenced HTML input element.