import { Route, Routes } from "react-router-dom";
import {
  Checkout,
  CreateAnAccount,
  Login,
  OrderStatus,
  ShoppingCart,
} from "./components";
import SlideCart from "./components/SlideCart";
import Layout from "./Layout";
import { About, Contact, Home, OrdersPage, Product, Products } from "./pages";
import { AdminPage } from "./pages/Administrator";
import {
  Bandana,
  BucketHats,
  Cardigan,
  Earrings,
  Flowers,
  HandSanitizerHolder,
  Keychains,
  LipBalmHolder,
  PhoneHolder,
  SprayBottleHolder,
  ToteBags,
  TumblerHolder,
  Wallets,
} from "./pages/Product_Categories";
import BaguetteBags from "./pages/Product_Categories/BaguetteBags";

const App = () => (
  <div>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:id" element={<Product />} />

        <Route path="orders" element={<OrdersPage />} />

        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="admin_page" element={<AdminPage />} />

        <Route path="category_baguette_bags" element={<BaguetteBags />} />
        <Route path="category_bandana" element={<Bandana />} />
        <Route path="category_bucket_hats" element={<BucketHats />} />
        <Route path="category_cardigan" element={<Cardigan />} />
        <Route path="category_earrings" element={<Earrings />} />
        <Route path="category_flowers" element={<Flowers />} />
        <Route
          path="category_hand_sanitizer_holder"
          element={<HandSanitizerHolder />}
        />
        <Route path="category_keychains" element={<Keychains />} />
        <Route path="category_lip_balm_holder" element={<LipBalmHolder />} />
        <Route path="category_phone_holder" element={<PhoneHolder />} />
        <Route
          path="category_spray_bottle_holder"
          element={<SprayBottleHolder />}
        />
        <Route path="category_tote_bags" element={<ToteBags />} />
        <Route path="category_tumbler_holder" element={<TumblerHolder />} />
        <Route path="category_wallets" element={<Wallets />} />

        <Route path="slidecart" element={<SlideCart />} />
        <Route path="shopping_cart" element={<ShoppingCart />} />
        <Route path="checkout_item" element={<Checkout />} />
        <Route path="order_status/:id" element={<OrderStatus />} />

        <Route path="create_an_account" element={<CreateAnAccount />} />
        <Route path="login" element={<Login />} />
      </Route>
    </Routes>
  </div>
);

export default App;
