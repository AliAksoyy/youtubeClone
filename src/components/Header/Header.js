import React, { useRef, useState } from "react";
import YoutubeIcon from "../Icons/YoutubeIcon";
import { RxHamburgerMenu } from "react-icons/rx";
import "./header.css";
import RecordIcon from "../Icons/RecordIcon";
import { IoIosSearch } from "react-icons/io";

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
              className="cursor-pointer border h-5/6 flex items-center justify-center absolute right-28 top-1 w-12 hover:bg-hoverSearch duration-200 rounded-full"
            >
              <div className="border-t border w-full border-zinc-900 translate-x-full -rotate-45"></div>
              <div className=" border-t border w-full border-zinc-900 rotate-45"></div>
            </div>
          )}
          <div className="basis-24 flex items-center border-y-2 border-r-2 border-stone-300 justify-center w-6 bg-search rounded-r-full hover:cursor-pointer hover:bg-hoverSearch duration-200">
            <IoIosSearch fontSize={35} />
          </div>
        </div>
        <div className="border p-3 bg-search hover:cursor-pointer rounded-full hover:bg-hoverSearch duration-200">
          <RecordIcon />
        </div>
      </div>
      <div className="border-4 basis-2/12">c</div>
    </div>
  );
};

export default Header;
