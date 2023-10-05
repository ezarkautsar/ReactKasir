import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
function Footer2() {
  return (
    <>
      <div className="bg-red-200 h-40 place-content-around" id="Footer">
        <div className="flex items-center">
          <h1 className="logo-mark w-[170px] text-4xl text-red-950 rounded-full text-center py-1 mx-10 mt-10">
            TokoKu
          </h1>
        </div>
        <div>
          <div className="py-1 mx-20">Aplikasi kasir</div>
        </div>
        <div className="mt-[-80px] list-none  w-38 h-28 ml-[30%]">
          <h2 className="text-xl">
            {" "}
            <b>Company</b>
          </h2>
          <div className="gap-4">
            <li>Contact</li>
            <li>Blog</li>
          </div>
        </div>

        <div className="mt-[-110px] list-none  w-38 h-28 ml-[55%] ">
          <h2 className="text-xl">
            {" "}
            <b>Social Media</b>
          </h2>
          <div className="flex gap-3 mt-4">
            <li className="">
              <a href="http://">
                <FaWhatsapp size={25} />
              </a>
            </li>
            <li>
              <a href="http://">
                <FaFacebook size={25} />
              </a>
            </li>
            <li>
              <a href="http://">
                <FaInstagram size={25} />
              </a>
            </li>
            <li>
              <a href="http://">
                <FaYoutube size={25} />
              </a>
            </li>
          </div>
          <div className="flex justify-end py-3 mx-20 mt-[-90px]">
            <img
              src="./img/BlackBanner.png"
              alt=""
              className="w-48 h-24 rounded-xl object-cover"
            />{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer2;
