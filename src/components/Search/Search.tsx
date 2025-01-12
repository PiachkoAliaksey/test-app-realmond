"use client"

import React from "react"

import { useState } from "react";
import { apiGetMediaData } from "@/lib/api/apiGetMedia";
import { TCardFormat } from "@/lib/types";

import FieldSearchInput from "../FieldSearchInput/FieldSearchInput"
import ListSearchedData from "../ListSearchedData/ListSearchedData"

const Search = () => {
    const [query, setQuery] = useState("");
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
            <FieldSearchInput loading={loading} handleSearch={handleSearch} setQuery={setQuery} query={query} />
            <ListSearchedData resultsData={results} loading={loading} error={error} />
        </>
    )
}

export default Search;
