"use client"

import React from "react";
import Image from "next/image";
import Logo from "../../../public/logo.svg";
import SwitchButton from "../SwitchButton/SwitchButton";
import useColorMode from "@/lib/hooks/useColorMode";


const Header = () => {
    const [colorMode, setColorMode] = useColorMode();

    const handlerChangeColorMode = () => {
        setColorMode(colorMode === 'light' ? 'dark' : 'light')
    }

    return (
        <header className="row-start-1 w-full flex sm:gap-2 md:gap-6 items-center justify-between">
            <div className="relative w-1/4">
                <Image src={Logo} alt="img_logo" width={100} height={100} />
            </div>

            <h1 className=" text-red-400 w-3/4 text-xl sm:text-2xl lg:text-4xl">Search your lovely  music, books, and other media just a click!</h1>
            <SwitchButton valueMode={colorMode}  handleClick={handlerChangeColorMode} />
        </header>
    )
}

export default Header