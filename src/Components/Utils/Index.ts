import axios from "axios";

export const instance = axios.create({
  baseURL: "https://youtube-v31.p.rapidapi.com/captions",
  timeout: 10000,
  headers: {
    "X-RapidAPI-Key": "7930076292mshb4efbd47e9ed9ccp168fd2jsn842d3fa25eeb",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
});
