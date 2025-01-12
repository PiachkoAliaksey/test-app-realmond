"use client"

import React, { useRef, useCallback, useLayoutEffect, useState } from "react";
import Button from "../common/Button/Button";
import FieldInput from "../common/FieldInput/FieldInput";
import { BsSearch } from "react-icons/bs";
import { TFieldSearchInput } from "@/lib/types";
import useScreenSizeHook from "@/lib/hooks/useScreenSizeHook";




const FieldSearchInput = ({ handleSearch, setQuery, query, loading }: TFieldSearchInput) => {
    const refSearch = useRef<HTMLFormElement>(null);
    const { width } = useScreenSizeHook();
    const [bottomSearch, setBottomSearch] = useState<number>(0);
    const [isFixedSearch,setIsFixedSearch] = useState(false);

    const onScroll = useCallback(() => {
        if (!window) return;

        if (window.scrollY > bottomSearch) {
            setIsFixedSearch(true)
        } else {
            setIsFixedSearch(false)
        }
    }, [bottomSearch, width]);

    useLayoutEffect(()=>{
        if (refSearch.current) {
            setBottomSearch(refSearch.current.getBoundingClientRect().bottom)
        }

    },[])

    useLayoutEffect(() => {
        if (width > 768) {
            window.addEventListener('scroll', onScroll);
            return () => {
                window.removeEventListener('scroll', onScroll);
            }
        }
    }, [onScroll]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        handleSearch(query);
        setQuery('');
    };

    const handlerOnChange = (e: React.SyntheticEvent<HTMLInputElement>) => {
        const inputValue = (e.target as HTMLInputElement).value.toLowerCase().trim();
        setQuery(inputValue)
    }

    return (
        <form ref={refSearch} onSubmit={handleSubmit} className={`${isFixedSearch&& 'fixed z-10 top-0 rounded-none'} w-full flex flex-col gap-3 sm:flex-row bg-red-400 py-4 px-8 rounded-lg transition`}>
            <FieldInput
                value={query}
                onChange={(e) => handlerOnChange(e)}
                type="text"
                addClassNames="caret-inherit w-full bg-red-400 border-b-2 border-b-red-400 text-white  placeholder-gray-200 placeholder-opacity-50 text-[20px] sm:text-4xl focus:border-b-red-300 py-3 pl-12 flex-grow focus:outline-none transition"
                placeholder="Search music, books, etc."
            >
                <BsSearch size={"40px"} className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-200 text-opacity-50" />
            </FieldInput>
            <Button
                type="submit"
                addClassNames={`${loading && "cursor-progress"} bg-red-600 bg-opacity-50 backdrop-blur-md text-white rounded-lg px-5 py-2 hover:bg-red-600 transition`}
                title={loading ? "Searching..." : "Search"}
            />
        </form>
    )
}

export default FieldSearchInput