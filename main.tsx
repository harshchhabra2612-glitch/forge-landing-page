import React from 'react';
import ReactDOM from 'react-dom/client';
import Page from './forge-devtool';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <Page />
    </React.StrictMode>
  );
}

