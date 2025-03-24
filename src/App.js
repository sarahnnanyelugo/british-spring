import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./pages/Home/Home";
import { TopNav } from "./components/TopNav/TopNav";
import { Footer } from "./components/Footer/Footer";
import { History } from "./pages/History/History";
import { MainBlog } from "./pages/BlogPage/MainBlog/MainBlog";
import { BlogPage } from "./pages/BlogPage/BlogPage";
import { SignUp } from "./pages/SignUp/SignUp";
import usePageLoader from "./usePageLoader";
import Loader from "./components/Loader/Loader";
import { Store } from "./pages/Store/Store";
import { CartItems } from "./pages/Store/CartItems";
import { useState } from "react";

function App() {
  const loading = usePageLoader();
  const [cartItems, setCartItems] = useState([]);
  const handleAddToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (i) => i.productName === item.productName
      );
      if (existingItem) {
        return prevItems.map((i) =>
          i.productName === item.productName
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };
  const getTotalItemCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };
  return (
    <>
      {loading && <Loader />}
      <TopNav />
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="main-news/:blog_id" element={<MainBlog />} />
        <Route path="blog-page" element={<BlogPage />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route
          path="sch-store"
          element={
            <Store
              cartItems={cartItems}
              onAddToCart={handleAddToCart}
              totalItemCount={getTotalItemCount()}
            />
          }
        />
        <Route
          path="/cart-items"
          element={
            <CartItems
              cartItems={cartItems}
              setCartItems={setCartItems}
              totalItemCount={getTotalItemCount()}
            />
          }
        />{" "}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
