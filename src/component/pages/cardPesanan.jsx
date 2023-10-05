import Headers from "../layouts/Header";
import Footer2 from "../layouts/Footer2";

function CardPesanan() {
    return (
        <>
       <Headers/>
            <div className=" w-[156px] h-[35px] bg-red-400 mt-10 rounded-[20px] text-center text-[#ffffff] ml-20 font-[Quicksand] text-[21px] font-semibold"> Pesanan anda</div>
            <div className="px-20">
                <div className=" w-full h-1 bg-[#DEDEDEEE] mt-5"></div>
            </div>
        <div className="m-4 py-5 px-48">
          <div className="bg-red-200 p-9  rounded-lg">
            <h1 className="font-bold text-lg">Produk</h1>
            <label className="flex  justify-between my-2">
              <span>
                <h4>Kemeja</h4>
              </span>
              <p className="ml-10">1 X</p>
              <p>Rp 40.000</p>
            </label>
            <label className="flex items-center justify-between my-2">
              <span>
                <h4>Baju polos</h4>
              </span>
              <p className="m-2 ml-7">1 X</p>
              <p>Rp 20.000</p>
            </label>
            <div className=" w-full h-1 bg-[#a0a0a0ee] mt-5"></div>
            <label className="flex items-center justify-between my-2">
              <span>
                <b><span className="mt-3">JASA PENGIRIMAN</span></b><br /><br />
                <p className="mt-2">YadikaEXPRESS</p>
              </span>
              <p className="mt-14">Rp 25.000</p>
            </label>
            <div className=" w-full h-1 bg-[#a0a0a0ee] mt-5"></div>
            <div className="flex items-center justify-between mt-8 text-xl">
              <label htmlFor="pesan" className="block font-bold ">
              Total Pembayaran
              </label>
              <b><p className="">Rp 95.000</p></b>
            </div>
          </div>
        </div>
        <Footer2/>
        </>
    )
}

export default CardPesanan;
