import { StaticImageData } from "next/image"

export type TCard = {
    artistId:number,
    collectionId: number,
    artistName: string,
    collectionName: string,
    primaryGenreName: string,
    country: string,
    artworkUrl60?: StaticImageData
}

export type TCardFormat = {
    id:number,
    artistName: string,
    collectionName: string,
    primaryGenreName: string,
    country: string,
    artworkUrl60?: StaticImageData
}

export type TFieldSearchInput = {
    handleSearch: (queryParam: string) => void,
    loading:boolean
}

export type TListSearchedData = {
    resultsData: TCardFormat[],
    loading: boolean,
    error: string | null
  }
