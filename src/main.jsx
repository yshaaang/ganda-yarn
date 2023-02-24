import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  BrowserRouter,
} from 'react-router-dom';
import './index.css';
import ScrollToTop from './ScrollToTop';
import { SlideCartProvider } from './context/SlideCartContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SlideCartProvider>
        <ScrollToTop />
        <App />
      </SlideCartProvider>
    </BrowserRouter>
  </React.StrictMode>
);
