import React from "react";
import icons from "../ultis/Icon";
import {Search} from "./";

const { HiOutlineArrowSmRight, HiOutlineArrowSmLeft } = icons;

const Header = () => {
    return (
        <div className="flex w-full justify-between">
            <div className="flex gap-[20px] w-full items-center">
                <div className="flex gap-6 text-gray-400">
                    <span>
                        <HiOutlineArrowSmLeft size={24} />
                    </span>
                    <span>
                        <HiOutlineArrowSmRight size={24} />
                    </span>
                </div>
                <div className="w-1/2">
                    <Search />
                </div>
            </div>
                <div>Login</div>
        </div>
    );
};

export default Header;
