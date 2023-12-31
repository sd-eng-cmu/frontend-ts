import React, { useContext, useState } from "react";
import engLogo from "../image/engLogo.png";
import { BsPersonCircle } from "react-icons/bs";
import { StoreContext, writePartialStore } from "common/contexts/StoreContext";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getLogout } from "common/apis/logout";

import { ClientRouteKey, LocalStorageKey } from "common/constants/keys";

const Navbar: React.FC = () => {
  const [{ userData }, setStore] = useContext(StoreContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  if (pathname === "/login") return null;

  const [isProfileMenuOpen, setProfileMenuOpen] = useState(false);
  const [isProfileButtonActive, setProfileButtonActive] = useState(false);

  const toggleProfileMenu = () => {
    setProfileMenuOpen(!isProfileMenuOpen);
    setProfileButtonActive(!isProfileButtonActive);
  };

  const handleLogout = async () => {
    await getLogout();
    setStore(writePartialStore({ userData: null }));
    localStorage.removeItem(LocalStorageKey.Auth);
    navigate(ClientRouteKey.Login);
  };

  return (
    <nav className="flex w-full sticky justify-between items-center top-0 py-2 drop-shadow-lg bg-white px-3 lg:px-10 md:px-8 z-50">
      <div className="flex items-center gap-2 md:gap-4">
        <img
          src={engLogo}
          alt="EngLogo"
          className="lg:w-48 md:w-44 w-36 cursor-pointer"
        />
      </div>
      <div className="py-2 relative">
        <div
          className={`text-xl font-bold bg-gradient-to-l from-red-100 ${
            isProfileButtonActive ? "to-red-400 " : "hover:bg-red-300"
          } shadow-md duration-200  rounded-3xl px-4  border-[1px] border-red-600 text-red-600 flex items-center gap-3 cursor-pointer `}
          onClick={toggleProfileMenu}
        >
          <BsPersonCircle color={isProfileButtonActive ? "white" : undefined} />
          <div className="flex items-end">
            <div className="ml-1">
              <p className="text-stone-950 text-[15px] font-medium -mb-2">
                {userData?.first_name} {userData?.last_name}
              </p>
              <p className="text-stone-950 text-[14px] font-medium">
                {userData?.student_id}
              </p>
            </div>
          </div>
        </div>
        {isProfileMenuOpen && (
          <div className="absolute bg-white  rounded-md shadow-md mt-2 py-2 px-4 w-200">
            <button
              className="text-red-500 hover:text-white hover:bg-red-600 px-2 py-1 rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
