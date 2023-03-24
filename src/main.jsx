import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, createBrowserRouter } from "react-router-dom";
import App from "./App";
import { AccountProvider } from "./context/AccountContext";
import { CartProvider } from "./context/CartContext";
import { SlideCartProvider } from "./context/SlideCartContext";
import "./index.css";
import ScrollToTop from "./ScrollToTop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AccountProvider>
        <CartProvider>
          <SlideCartProvider>
            <ScrollToTop />
            <App />
            <Toaster position="bottom-right" reverseOrder={false} />
          </SlideCartProvider>
        </CartProvider>
      </AccountProvider>
    </QueryClientProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
