import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import { Home } from "./pages/Home/Home";
import { TopNav } from "./components/TopNav/TopNav";
import { Footer } from "./components/Footer/Footer";
import { MainBlog } from "./pages/BlogPage/MainBlog/MainBlog";
import { BlogPage } from "./pages/BlogPage/BlogPage";
import { SignUp } from "./pages/SignUp/SignUp";
import usePageLoader from "./usePageLoader";
import Loader from "./components/Loader/Loader";
import { Store } from "./pages/Store/Store";
import { CartItems } from "./pages/Store/CartItems";
import { useState } from "react";
import { Welcome } from "./pages/AboutUs/Welcome/Welcome";
import { Apply } from "./pages/AboutUs/Apply/Apply";
import { History } from "./pages/AboutUs/History/History";
import { Testimonials } from "./pages/AboutUs/Testimonials/Testimonials";
import { VisionMission } from "./pages/AboutUs/Vision&Mission/Vision&Mission";
import { JuniorSecondary } from "./pages/Academics/JuniorSecondary/JuniorSecondary";
import { SeniorSecondary } from "./pages/Academics/SeniorSecondary copy/SeniorSecondary";
import ScrollToTop from "./components/scrollToTop";
import { Overview } from "./pages/Academics/Overview/Overview";
import { WhoWeAre } from "./pages/AboutUs/WhoWeAre/WhoWeAre";
import { ContactUs } from "./pages/ContactUs/ContactUs";
import { OurFacilities } from "./pages/AboutUs/Facilities/Facilities";
import { WhyBCS } from "./pages/Admission/WhyBSC/WhyBCS";
import { Tuition } from "./pages/Admission/Tuition/Tuition";
import { Gallery } from "./pages/StudentLife/Gallery/Gallery";
import { Directory } from "./pages/AboutUs/Directory/Directory";

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
      <ScrollToTop />
      <TopNav />
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="main-news/:blog_id" element={<MainBlog />} />
        <Route path="blog-page" element={<BlogPage />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="welcome" element={<Welcome />} />
        <Route path="apply" element={<Apply />} />
        <Route path="history" element={<History />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="vision" element={<VisionMission />} />
        <Route path="junior" element={<JuniorSecondary />} />
        <Route path="senior" element={<SeniorSecondary />} />
        <Route path="overview" element={<Overview />} />
        <Route path="who-we-are" element={<WhoWeAre />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="facilities" element={<OurFacilities />} />
        <Route path="why-bsc" element={<WhyBCS />} />
        <Route path="tuition" element={<Tuition />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="directory" element={<Directory />} />
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
