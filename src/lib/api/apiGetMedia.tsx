import { api } from "./baseConfig";
import { TCardFormat, TCard } from "../types";
import imgNotFound from "../../../public/image-not-found.png";
import { v4 as uuidv4 } from 'uuid';

export async function apiGetMediaData(query: string) {
    try {
        const response = await api.get(`search?term=${query}&media=all`);

        if (response.status !== 200) {
            throw new Error("Error")
        }

        return formatData(response.data.results)
    } catch (error) {
        console.error(error);
    }
}


function formatData(data: TCard[]) :TCardFormat[] {

    return data.map((item) => (
        {
            id: (item.collectionId || item.artistId) ?? uuidv4(),
            artistName: item.artistName ?? "",
            collectionName: item.collectionName ?? "",
            primaryGenreName: item.primaryGenreName ?? "",
            country: item.country ?? "",
            artworkUrl60: item.artworkUrl60 ?? imgNotFound
        } as TCardFormat
    )
    )
}