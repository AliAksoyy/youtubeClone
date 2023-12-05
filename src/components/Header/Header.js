import React from "react";
import YoutubeIcon from "../Icons/YoutubeIcon";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <div className="w-full px-8 border-2 border-red-600 h-16 flex items-center justify-between">
      <div className="flex gap-x-12">
        <RxHamburgerMenu
          cursor={"pointer"}
          fontSize={35}
          color="#424040"
          fontWeight={200}
        />
        <YoutubeIcon />
      </div>
      <div>b</div>
      <div>c</div>
    </div>
  );
};

export default Header;
