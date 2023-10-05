function CardCheckout() {
    return (
        <div className="bg-red-100 rounded-md w-full p-6 overflow-hidden m-4">
            <h1 className="p-2 w-1/3 rounded-2xl text-center font-[Quick-sand] text-slate-800 bg-red-300 text-lg font-semibold">Detail Pesanan</h1>
            <div className=" w-full h-1 bg-[#fefefeee] mt-5"></div>
            <div className="p-4 w-full rounded-2xl font-[Quick-sand] text-slate-800 bg-red-300 mt-4">
                <h1 className="text-lg font-bold"> Opsi Pengiriman</h1>
                <label className="flex items-center justify-between my-2 mt-9">
                    <span>
                        <input type="radio" name="shippingOption" />
                        <span className="m-2">SiCepatYadika</span>
                    </span>
                    <p>Rp 75.000</p>
                </label>
                <label className="flex items-center justify-between my-2">
                    <span>
                        <input type="radio" name="shippingOption" />
                        <span className="m-2">JNE Super Speed</span>
                    </span>
                    <p>Rp 5.000</p>
                </label>
                <label className="flex items-center justify-between my-2">
                    <span>
                        <input type="radio" name="shippingOption" />
                        <span className="m-2">J&T Super</span>
                    </span>
                    <p>Rp 25.000</p>
                </label>
            </div>
           <input type="text" className="p-3 w-full rounded-2xl text-xl font-[Quick-sand] bg-red-300 mt-2" placeholder="Pesan" />
            {/* <h1 className="p-3 w-full rounded-2xl font-[Quick-sand] text-slate-800 bg-red-300 mt-2">Pesan</h1> */}
            <div className=" w-full h-1 bg-[#fefefeee] mt-5"></div>
            <div className="p-2 w-1/3text-center font-[Quick-sand] text-slate-800 text-lg font-semibold">Total pesanan:<p>Rp 25.000</p></div>
            <button className="w-full h-10 rounded-md bg-red-300 text-slate-800 font-[Quick-sand] text-xl hover:bg-red-500">Buat Pesanan</button>
        </div>
    )
}

export default CardCheckout;