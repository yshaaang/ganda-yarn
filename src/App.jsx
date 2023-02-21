import Layout from './Layout';
import { Home, About, Contact, Products } from './pages';
import { Routes, Route } from 'react-router-dom';
import BaguetteBags from './pages/Product_Categories/BaguetteBags';
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
} from './pages/Product_Categories';
import { CreateAnAccount, Login, ShoppingCart } from './components';
import SlideCart from './components/SlideCart';

const App = () => (
  <div>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />

        <Route path='category_baguette_bags' element={<BaguetteBags />} />
        <Route path='category_bandana' element={<Bandana />} />
        <Route path='category_bucket_hats' element={<BucketHats />} />
        <Route path='category_cardigan' element={<Cardigan />} />
        <Route path='category_earrings' element={<Earrings />} />
        <Route path='category_flowers' element={<Flowers />} />
        <Route
          path='category_hand_sanitizer_holder'
          element={<HandSanitizerHolder />}
        />
        <Route path='category_keychains' element={<Keychains />} />
        <Route path='category_lip_balm_holder' element={<LipBalmHolder />} />
        <Route path='category_phone_holder' element={<PhoneHolder />} />
        <Route
          path='category_spray_bottle_holder'
          element={<SprayBottleHolder />}
        />
        <Route path='category_tote_bags' element={<ToteBags />} />
        <Route path='category_tumbler_holder' element={<TumblerHolder />} />
        <Route path='category_wallets' element={<Wallets />} />

        <Route path='slidecart' element={<SlideCart />} />
        <Route path='shopping_cart' element={<ShoppingCart />} />

        <Route path='create_an_account' element={<CreateAnAccount />} />
        <Route path='login' element={<Login />} />
      </Route>
    </Routes>
  </div>
);

export default App;
