# OpenStay Frontend

This project uses [Vite](https://vitejs.dev/) as the build tool and [React](https://reactjs.org/) for the UI.

## Code Style

This project enforces a **no-semicolon** coding style. Both ESLint and Prettier are configured to reject code with semicolons.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

### `npm run preview`

Locally preview the production build.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run lint`

Runs ESLint to check for code quality issues.\
Fails if any errors or warnings are found.

### `npm run lint:fix`

Runs ESLint and automatically fixes issues where possible.

### `npm run format`

Checks code formatting with Prettier.\
Fails if any files don't match the expected format.

### `npm run format:fix`

Automatically formats all code with Prettier.

## Code Quality Standards

### No Semicolons

This codebase enforces a no-semicolon style:

- **ESLint rule**: `semi: ['error', 'never']`
- **Prettier setting**: `"semi": false`

Any code with semicolons will fail both linting and formatting checks.

### Example

✅ **Good** (no semicolons):

```javascript
import React from 'react'

function MyComponent() {
  const value = 42
  return <div>{value}</div>
}

export default MyComponent
```

❌ **Bad** (has semicolons):

```javascript
import React from 'react';

function MyComponent() {
  const value = 42;
  return <div>{value}</div>;
}

export default MyComponent;
```

## Learn More

- [Vite documentation](https://vitejs.dev/)
- [React documentation](https://reactjs.org/)
- [ESLint documentation](https://eslint.org/)
- [Prettier documentation](https://prettier.io/)
