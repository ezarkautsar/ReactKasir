import Header from "./Header";
import Footer from "./Footer";
import Register from "../pages/Register";
import Login from "../pages/Login";

function MainLayout() {
    return(
        <>
        <Header/>
        <Register />
        <Footer/>
        </>
    );
}

export default MainLayout;
