import axios from "axios"

const BASE_URL = "https://itunes.apple.com/";

export const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        Accept: "application/json"
    },
});
