import Header from "../layouts/Header";
import CardCheckout from "./cardChekout";
import CardKeranjang from "./cardKeranjang";

function Keranjang() {
    return (
        <>
        <Header/>
        <div className=" w-[130px] h-[34px] bg-red-300 mt-10 rounded-[20px] text-center text-[#ffffff] ml-20 font-[Quicksand] text-[21px]"> Keranjang </div>
        <div className="px-20">
                <div className=" w-full h-1 bg-[#DEDEDEEE] mt-9 mb-9"></div>
            </div>
            <div className="flex flex-wrap w-full justify-evenly items-start">
          <div className="w-1/3">
           <CardKeranjang/>
           <CardKeranjang/>
           <CardKeranjang/>
          </div>
          <div className="w-1/3 mt-10">
           <CardCheckout/>
         
          </div>
        </div>
        </>
    )
}

export default Keranjang;