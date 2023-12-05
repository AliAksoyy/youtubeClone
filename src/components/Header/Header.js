import React from "react";
import YoutubeIcon from "../Icons/YoutubeIcon";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <div className="w-full px-8 py-4 border-2 border-red-600 h-20  flex items-center justify-between">
      <div className="flex gap-x-12">
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
      <div>b</div>
      <div>c</div>
    </div>
  );
};

export default Header;
