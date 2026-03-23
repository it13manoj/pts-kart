import { Outlet } from "react-router-dom";
import Header from "./Components/Layouts/Header";
import HeaderPart from "./Components/Layouts/HeaderPart";
import NavbarPart from "./Components/Layouts/NavbarPart";
import CategorySidebar from "./Components/Layouts/CategorySidebar";
import CartSidebar from "./Components/Layouts/CartSidebar";
import NavSidebar from "./Components/Layouts/NavSidebar";
import MobileMenu from "./Components/Layouts/MobileMenu";
import Footer from "./Components/Banner/Suggession/Footer";

const Layout = (props) => (


  <>
    {/* common UI */}
    <Header {...props} />
    <HeaderPart {...props} />
    <NavbarPart />
    <CategorySidebar />
    {props.isActiveCart && <CartSidebar setIsActiveCart={props.setIsActiveCart} />}
    <NavSidebar />

    <Outlet />

    <Footer />
  </>
);

export default Layout;