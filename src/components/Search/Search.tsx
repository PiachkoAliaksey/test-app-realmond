"use client"

import React from "react"

import { useState } from "react";

import { apiGetMediaData } from "@/lib/api/apiGetMedia";
import { TCardFormat } from "@/lib/types";

import SearchInput from "./SearchInput/SearchInput";
import SearchResults from "./SearchResults/SearchResults";

const Search = () => {
    const [results, setResults] = useState<TCardFormat[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);


    const handleSearch = async (queryParam: string) => {
        if (!queryParam) return;

        setLoading(true);
        setError(null);
        try {
            const data = await apiGetMediaData(queryParam);
            if (data) {
                setResults(data);
            }

        } catch {
            setError("Failed to fetch results. Please try again.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <SearchInput loading={loading} handleSearch={handleSearch}/>
            <SearchResults resultsData={results} loading={loading} error={error} />
        </>
    )
}

export default Search;
