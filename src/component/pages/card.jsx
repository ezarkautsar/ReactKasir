function Card() {
  return (
    <>
      <div className="w-full px-4 lg:w-1/2 xl:w-1/5 mt-6">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg mb-10">
          <img
            src="https://source.unsplash.com/200x200?clothes"
            alt="draw"
            className="w-full hover:scale-110 transtion ease-in-out duration-100"
          />
          <div className="py-8 px-6">
            <a
              href=""
              className="block mb-3 font-semibold text-xl text-red-400 mt"
            >
              <h2><b>Kemeja Satin</b></h2>
            </a>
            <p className="font-medium text-base mb-4">
              Kemeja dengan berbahan satin yang berwarna elegan, juga lembut dan nyaman dipakai 
            </p>
            <p className="font-medium text-end mb-4">
             <b> Rp.20.000</b>
            </p>
            <button className="w-full h-8 font-[quick-sand] text-2xl bg-red-300 rounded-lg text-red-950 hover:bg-red-500">beli</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
