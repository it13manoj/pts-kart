

import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import Header from "./Components/Layouts/Header";
import Home from "./Components/Home";
import HeaderPart from "./Components/Layouts/HeaderPart";
import NavbarPart from "./Components/Layouts/NavbarPart";
import CategorySidebar from "./Components/Layouts/CategorySidebar";
import CartSidebar from "./Components/Layouts/CartSidebar";
import NavSidebar from "./Components/Layouts/NavSidebar";
import MobileMenu from "./Components/Layouts/MobileMenu";
import Promotion from "./Components/Layouts/Promotion";
import Featured from "./Components/Banner/Suggession/Featured";
import NewItem from "./Components/Banner/Suggession/NewItem";

import Man from "./Components/Modal/Man/Man";
import Woman from "./Components/Modal/Woman/Woman";
import Boys from "./Components/Modal/Boys/Boys";
import Girls from "./Components/Modal/Girls/Girls";
import Kids from "./Components/Modal/Kids/Kids";
import Contact from "./Components/Modal/Contact/Contact";

import Register from "./Components/Modal/Register";

import { useEffect, useState } from "react";
import Wishlist from "./Components/Wishlist";
import Invoice from "./Components/Layouts/Invoice";
import Checkout from "./Components/Checkout";
import Login from "./Components/Modal/Login";
import Layout from "./Layout ";
import ProtectedRoute from "./ProtectedRoute ";
import { isTokenValid, verifyTokenByAPI, isToken } from "./utils/auth";
import axios from "axios";
import URL from "./Components/config/API";
import FAQPage from "./Components/Layouts/Faq";
import Navbar from "./Components/Layouts/navbar";
import HomeGrid from "./Components/Layouts/HomeGrid";
import HomeIndex from "./Components/Layouts/HomeIndex";
import TermsAndConditions from "./Components/Layouts/TermCondition";
import SingleProduct from "./Components/SingleProduct";
import Footer from "./Components/Banner/Suggession/Footer";

function App() {
  const [getValue, setValue] = useState(0);
  const [islogin, setIslogin] = useState()
  const [getCart, setCart] = useState(false);
  const [isActiveCart, setIsActiveCart] = useState(false)
  const [authChecked, setAuthChecked] = useState(false);
  const [getTotal, setTotal] = useState(0);
  const [token, setToken] = useState(localStorage.getItem("token"))
  const urlParams = useParams()
  const params = new URLSearchParams(window.location.search);

  // useEffect(() => {
  //   const tokens = params?.get("token");
  //   console.log(tokens);
  //   setToken(tokens)
  //   localStorage.setItem("token", tokens)
  //     console.log(token);
  //   setToken(() => {

  //     if (tokens)
  //       window.location.href = "/"
  //   }, 5000)

  // }, [params])


  useEffect(() => {
    const verify = async () => {
      const valid = await verifyTokenByAPI();
      if(!valid) localStorage.removeItem('token')

      setAuthChecked(true);
    };
    verify();
  }, []);


  // const getprice = async () => {
  //   try {
  //     const res = await axios.get(`${URL.BASE_URL}/getPrice`, {
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     setTotal(res?.data?.data?.[0]?.total);
  //   } catch (error) {
  //     if (error.response) {
  //       // Server responded with status
  //       if (error.response.status === 401) {
  //         console.log("Unauthorized - token expired");

  //         // Clear token
  //         // localStorage.removeItem("token");
  //       } else {
  //         console.log("API Error:", error.response.data);
  //       }
  //     } else {
  //       console.log("Network Error:", error.message);
  //     }
  //   }
  // };


  useEffect(() => {
    console.log(token);
    if (token) setIslogin(true)
    // getprice()
  }, [token])




  return (
    <>
      <BrowserRouter>

        <Routes>

          {/* 🔓 Public Route */}
          <Route
            path="/"
            element={
              islogin ? <Navigate to="/home" replace /> : <Login setIslogin={setIslogin} />
            }
          />

          {/* 🔒 Protected Routes */}
          <Route
            element={
              <ProtectedRoute islogin={islogin}>
                <Layout
                  islogin={islogin}
                  setIslogin={setIslogin}
                  getValue={getValue}
                  setIsActiveCart={setIsActiveCart}
                  getCart={getCart}
                  isActiveCart={isActiveCart}
                  setCart={setCart}
                  getTotal={getTotal}

                />
              </ProtectedRoute>
            }
          >
            <Route path="/home" element={<Home getValue={getValue} setValue={setValue} />} />
            <Route path="/wishlist" element={<Wishlist getValue={getValue} setValue={setValue} setCart={setCart} />} />
            <Route path="/checkout" element={<Checkout setIsActiveCart={setIsActiveCart} />} />
            <Route path="/invoice" element={<Invoice setTotal={setTotal} />} />
            <Route path="/" element={<HomeIndex />} />
            <Route path="/man" element={<Man/>}/>
            <Route path="/woman" element={<Woman/>}/>
            <Route path="/boy" element={<Boys/>}/>
            <Route path="/girl" element={<Girls/>}/>
            <Route path="/kids" element={<Kids/>}/>
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/TermCondition" element={<TermsAndConditions />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/HomeGrid" element={<HomeGrid />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />

          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
