import React from "react";
import YoutubeIcon from "../Icons/YoutubeIcon";
import { RxHamburgerMenu } from "react-icons/rx";

import RecordIcon from "../Icons/RecordIcon";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <div className="w-full px-8 py-4 border-2 border-red-600 h-20  flex items-center justify-between">
      <div className="flex gap-x-12 basis-2/12">
        <div className=" hover:bg-gray-200 hover:rounded-full p-3 transition-all">
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
        <div className=" flex basis-5/6 h-14 justify-between">
          <input
            className="w-full focus:outline-none pl-7 border-2 border-stone-300 rounded-l-full text-2xl "
            type="text"
            placeholder="Ara"
          />
          <div className="basis-24 flex items-center border-y-2 border-r-2 border-stone-300 justify-center w-6 bg-search rounded-r-full hover:cursor-pointer hover:bg-hoverSearch transition-all">
            <IoIosSearch fontSize={35} />
          </div>
        </div>
        <div className="border p-3 bg-search hover:cursor-pointer rounded-full hover:bg-hoverSearch transition-all">
          <RecordIcon />
        </div>
      </div>
      <div className="border-4 basis-2/12">c</div>
    </div>
  );
};

export default Header;
