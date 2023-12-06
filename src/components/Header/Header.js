import React from "react";
import YoutubeIcon from "../Icons/YoutubeIcon";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";
import RecordIcon from "../Icons/RecordIcon";

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
      <div className="border basis-7/12">
        <input className="border-4" type="text" />
        <div>
          <IoSearchOutline />
        </div>
        <div>
          <RecordIcon />
        </div>
      </div>
      <div className="border-4 basis-2/12">c</div>
    </div>
  );
};

export default Header;
