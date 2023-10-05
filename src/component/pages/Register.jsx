import Footer from "../layouts/Footer";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="mt-20">
      <div className="flex justify-around">
        <div className="img">
          <img src="./img/dog-jump.svg" alt="Gambar" className="w-[600px]" />
        </div>
        <div className="flex flex-col space-y-4">
          <div className="w-[550px] h-[388px] shadow-md text-center rounded">
            <h1 className="logo-mark text-pink-600 text-5xl mt-5 mb-5">
              TokoKu
            </h1>
            <input
              type="text"
              name=""
              id=""
              className="w-[400px] h-[55px] mb-5 bg-zinc-300 rounded p-4"
              placeholder="Username"
            />{" "}
            <br />
            <input
              type="text"
              name=""
              id=""
              className="w-[400px] h-[55px] mb-5 bg-zinc-300 rounded p-4"
              placeholder="Password"
            />{" "}
            <br />
            <button className="w-[400px] h-[55px] mb-5 bg-pink-600 rounded text-white font-bold">
              Daftar
            </button>
          </div>

          <p className="w-[550px] h-[120px] shadow-md text-center mt-5">
            Sudah Punya Akun? <Link to="/"><span className="text-blue-600">Login</span></Link>
            
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Register;
