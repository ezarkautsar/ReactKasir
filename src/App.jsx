import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./component/layouts/Main.layout";
import RegisterPage from "./component/pages/Register";
import LoginPage from "./component/pages/Login";
import Home from "./component/pages/kategori1"
import Keranjang from "./component/pages/keranjang";
import CardPesanan from "./component/pages/cardPesanan";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/keranjang" element={<Keranjang />} />
          <Route path="/pesanan" element={<CardPesanan />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
