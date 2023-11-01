import React, { useContext } from "react";
import engLogo from "../image/engLogo.png";
import { BsPersonCircle } from "react-icons/bs";
import { StoreContext } from "common/contexts/StoreContext";
import { useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [{ userData }] = useContext(StoreContext);

  const { pathname } = useLocation();
  if (pathname === "/login") return;

  return (
    <nav
      className=" flex w-full fixed justify-between items-center top-0 py-2 drop-shadow-lg bg-white px-3 lg:px-10 md:px-8 z-50"
      //navbar wrapper
    >
      <div
        className="flex items-center gap-2  md:gap-4"
        //navbar left content
      >
        <img
          src={engLogo}
          alt="EngLogo"
          className="lg:w-48 md:w-44 w-36  cursor-pointer"
          // CMU Logo Navbar
        />
      </div>
      <div
        className="py-2"
        //navbar right content
      >
        <div className="text-xl font-bold bg-gradient-to-l from-red-100 hover:bg-red-500 shadow-md duration-200 text-center rounded-3xl  px-12  justify-center border-[2px] border-red-500 text-red-500 flex items-center gap-3 hover:cursor-pointer hover:text-white">
          <BsPersonCircle />
          <p className=" text-stone-950">
            {userData?.first_name} {userData?.last_name}
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
