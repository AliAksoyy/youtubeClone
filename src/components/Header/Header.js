import React, { useRef, useState } from "react";
import YoutubeIcon from "../Icons/YoutubeIcon";
import { RxHamburgerMenu } from "react-icons/rx";
import "./header.css";
import RecordIcon from "../Icons/RecordIcon";
import { IoIosSearch } from "react-icons/io";
import CreatedIcon from "../Icons/CreatedIcon";
import { FaRegBell } from "react-icons/fa";
import avatar from "../../image/avatar.jpg";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showCloseIcon, setShowCloseIcon] = useState(false);
  const inputRef = useRef(null);

  const handleFocus = (e) => {
    setShowSearch(() => true);
  };

  const handleChange = (e) => {
    setShowCloseIcon(Boolean(e.target.value));
  };

  return (
    <div className="w-full px-8 py-4 border-2 border-red-600 h-20  flex items-center justify-between">
      <div className="flex gap-x-12 basis-2/12">
        <div className=" hover:bg-gray-200 hover:rounded-full p-3 duration-200">
          <RxHamburgerMenu
            cursor={"pointer"}
            fontSize={35}
            color="#424040"
            fontWeight={200}
          />
        </div>
        <YoutubeIcon />
      </div>
      <div className="basis-7/12 flex justify-around items-center py-3">
        <div className="relative justify-end flex basis-5/6 h-14 ">
          <input
            className=" w-5/6 focus:outline-none pl-7 focus:pl-20 border-2 border-stone-300 rounded-l-full text-slate-800 text-lg placeholder:text-slate-500 placeholder:text-xl focus:border-solid focus:border-cyan-800 focus:shadow-slate-400 focus:border focus:shadow-inputShadow focus:w-full "
            type="text"
            placeholder="Ara"
            onFocus={handleFocus}
            onBlur={() => setShowSearch(false)}
            onChange={handleChange}
            ref={inputRef}
          />
          {showSearch && (
            <div className="absolute top-1/2 left-6 -translate-y-1/2 ">
              <IoIosSearch color="#2c2c2c" fontSize={35} fontWeight={100} />
            </div>
          )}
          {showCloseIcon && (
            <div
              onClick={() => {
                setShowCloseIcon(false);
                inputRef.current.value = "";
              }}
              className=" cursor-pointer flex items-center justify-center  absolute top-1/2 w-14 h-5/6 right-24 -translate-y-1/2 rounded-full hover:bg-hoverSearch duration-200"
            >
              <div className="absolute bg-black -rotate-45 w-4/6 h-0.5 "></div>
              <div className="absolute bg-black rotate-45 w-4/6 h-0.5"></div>
            </div>
          )}
          <div className="basis-24 flex items-center border-y-2 border-r-2 border-stone-300 justify-center w-6 bg-search rounded-r-full hover:cursor-pointer hover:bg-hoverSearch duration-200">
            <IoIosSearch fontSize={35} />
          </div>
        </div>
        <div className="relative border p-3 bg-search hover:cursor-pointer rounded-full hover:bg-hoverSearch duration-200 custom-hover-after">
          <RecordIcon />
        </div>
      </div>
      <div className="h-full flex items-center  justify-between basis-2/12">
        <div className=" p-3 rounded-full  hover:bg-hoverSearch duration-200">
          <CreatedIcon />
        </div>
        <div className="p-3 rounded-full  hover:bg-hoverSearch duration-200">
          <FaRegBell fontSize={30} color="#3b3737" />
        </div>
        <div
          onClick={(e) => {
            if (e.target.tagName === "IMG") {
              e.target.classList.add("border-2", "border-cyan-500");
              setTimeout(() => {
                e.target.classList.remove("border-2", "border-cyan-500");
              }, 1000);
            }
          }}
        >
          <img
            className="cursor-pointer rounded-full w-12"
            src={avatar}
            alt="avatar"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
