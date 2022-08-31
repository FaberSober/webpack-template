import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App'

// ReactDom.render(<App />, document.getElementById('root'));

// 新的 createRoot API
const container = document.getElementById('root');

// @ts-ignore
const root = createRoot(container);
root.render(<App />);
