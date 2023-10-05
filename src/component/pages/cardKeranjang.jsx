function CardKeranjang() {
    return (
        <div className="bg-red-200 rounded-md w-full p-2 overflow-hidden  m-4 flex">
        <img
          src="https://source.unsplash.com/200x200?product+clothes"
          alt="food"
          className="w-1/2 "
        />
        <div className="py-6 px-6 w-1/2">
          <h3 className=" mb-3 font-semibold text-lg text-red-600">
            Nama barang
          </h3>

          <p className="font-medium text-base mb-4 text-black">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non!
          </p>
          <p className="font-medium text-end mb-4 text-black">
          <b>Harga barang</b>  
          </p>
          <button className="bg-red-700">Order</button>
          {/* <div className=" w-1/2 items-center flex justify-around">
            <button
             
              className="bg-slate-100  px-2 text-lg font-semibold"
            >
              -
            </button>
            <p className="px-3"></p>
            <button
            
              className="bg-slate-100  px-2 text-lg font-semibold"
            >
              +
            </button>
          </div> */}
        </div>
      </div>
    )
}

export default CardKeranjang;