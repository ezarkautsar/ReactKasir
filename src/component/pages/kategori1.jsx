import { useEffect, useState } from "react";
import Card from "./card";
import Header from "../layouts/Header";
import Footer2 from "../layouts/Footer2";

function Kategori() {
  const [produk, setProduk] = useState("");

  useEffect(() => {
    const fetchProductData = async () => {
      try{
        const response = await fetch('./data/product.json');
        const data = await response.json();
        setProduk(data);

        console.log(data);
      } catch (error){
        console.error(error);
      }
    }

    fetchProductData();
  }, []);

  return (
    <>
      <Header />
      <div className="px-20">
        <div className=" w-full h-80 bg-red-100 mt-10 rounded-xl">
          <img
            src="./img/Banner.png"
            alt=""
            className="w-full h-80  rounded-xl object-cover"
          />{" "}
        </div>
      </div>
      <div className="flex justify-center gap-3 mt-10">
        <div className="bg-red-200 rounded-[10%] mt-5">
          <img
            src="./img/kemeja.jpg"
            alt=""
            className="object-cover rounded-[10%] w-52"
          />
        </div>
        <div className="bg-red-200 rounded-[10%] mt-5">
          <img
            src="./img/jens.webp"
            alt=""
            className="object-cover rounded-[10%] w-52"
          />
        </div>
        <div className="bg-red-200 rounded-[10%] mt-5">
          <img
            src="./img/topi.jpg"
            alt=""
            className="object-cover rounded-[10%] w-52"
          />
        </div>
        <div className="bg-red-200 rounded-[10%] mt-5">
          <img
            src="./img/kaos.webp"
            alt=""
            className="object-cover rounded-[10%] w-52"
          />
        </div>
      </div>

      <div className="px-20">
        <div className=" w-full h-1 bg-[#DEDEDEEE] mt-16"></div>
      </div>
      {/* Kategori */}
      <div className="px-10">
        <div className=" w-[129px] h-[30px] bg-red-300 mt-10 rounded-[20px] text-center text-[#ffffff] ml-7 font-semibold text-[18px]">
          {" "}
          Kategori 1
        </div>
        <div className="flex">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className=" w-[129px] h-[30px] bg-red-300 mt-10 rounded-[20px] text-center text-[#ffffff] ml-7 font-semibold text-[18px]">
          {" "}
          Kategori 2
        </div>
        <div className="flex">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
      <Footer2 />
    </>
  );
}

export default Kategori;
