import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StaticSection from "./components/StaticSection";
import BestSellers from "./components/BestSellers";
import Category from "./components/Category";
import Hotdeals from "./components/Hotdeals";
import BannerArea from "./components/BannerArea";
import FeaturedProducts from "./components/FeaturedProducts"
import BrandArea from "./components/BrandArea"
import RecentAddedProducts from "./components/RecentAddedProducts";
import BannerArea2 from "./components/BannerArea2";
import Compare from "./pages/Compare";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import MyAccount from "./pages/MyAccount";
import LoginSignUp from "./pages/LoginSignUp";
import { SingleProduct } from "./pages/SingleProduct";
import { Shop } from "./pages/Shop";
import { OffCanvasMenu } from "./components/OffCanvasMenu";
import { CartContext } from "./context/CartContext";
import { UserContext } from "./context/UserContext";
import { EditAccount } from "./pages/EditAccount";
import { MyOrder } from "./pages/MyOrder";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <UserContext>
      <CartContext>
      <Header />
      <Routes>
        <Route path="/" element={<>
          <Home />
          <StaticSection />
          <BestSellers />
          <Category />
          {/* <Hotdeals /> */}
          <BannerArea/>
          {/* <FeaturedProducts /> */}
          <BannerArea2/>
          {/* <RecentAddedProducts/> */}
          <BrandArea />
          </>}/>
          <Route path="/compare" element={<Compare/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/wishlist" element={<Wishlist/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/checkout" element={<Checkout/>}/>
          <Route path="/my-account" element={<MyAccount/>}/>
          <Route path="/login" element={<LoginSignUp/>}/>
          <Route path="/single-product" element={<SingleProduct/>}/>
          <Route path="/shop" element={<Shop/>}/>
          <Route path="/offcanvas-mobile-menu" element={<OffCanvasMenu/>}/>
          <Route path="/edit-account" element={<EditAccount/>}/>
          <Route path="/order-list" element={<MyOrder/>}/>
      
      </Routes>
      <Footer />
      </CartContext>
      </UserContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
