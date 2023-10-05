import { FaBackspace, FaHome, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header(params) {
  return (
    <div className="bg-red-200 w-[1440x] h-[90px] flex justify-around">
      <div className="flex items-center">
        <h1 className="logo-mark bg-white w-[140px] text-2xl rounded-full text-center py-1 mx-10">
          TokoKu
        </h1>
        <div>
          <input
            type="text"
            className="bg-white py-2 w-[400px] rounded xl-[100px] p-2"
            placeholder="Search Product"
          />
        </div>
      </div>
      <div className="text-slate-800 grid grid-cols-3 gap-7 place-self-center ">
        
        
        <Link to="/register">
          <FaBackspace size={35} />
        </Link>
        <Link to="/home">
          <FaHome size={35} />
        </Link>
        <Link to="/keranjang">
          <FaShoppingCart size={35} />
        </Link>
      </div>
      <div className="w-14 h-14 rounded-full bg-white place-self-center"></div>
    </div>
  );
}

export default Header;
