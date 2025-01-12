"use client"

import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { Dispatch, SetStateAction } from "react";


const useColorMode = () => {
    const [colorMode, setColorMode] = useLocalStorage('color-mode', 'light');

    useEffect(() => {
        if (!window) return;

        const classNameDark = 'dark';
        const bodyClasses = window.document.body.classList;

        if(colorMode === 'dark'){
            bodyClasses.add(classNameDark);
        }else{
            bodyClasses.remove(classNameDark);
        }
    }, [colorMode])

    return [colorMode, setColorMode] as [string, Dispatch<SetStateAction<string>>]
}

export default useColorMode;