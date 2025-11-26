/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Safety check: Only attempt to render React if the 'root' element exists.
// This prevents errors when running the Vue.js application (which uses #app) in the same environment.
const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  // Silent fallback: Do nothing if we are in the Vue environment.
  console.log("React app inactive: 'root' element not found. Assuming Vue environment.");
}