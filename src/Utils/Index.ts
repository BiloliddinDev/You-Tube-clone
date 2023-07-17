import axios from "axios";

export const instance = axios.create({
  baseURL: "https://youtube-v31.p.rapidapi.com",
  timeout: 10000,
  headers: {
    "X-RapidAPI-Key": "6a0d17e2f6msh47d8699424df3d3p1508b8jsn33220cc34a87",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
  params: {
    maxResults: 50,
  },
});
