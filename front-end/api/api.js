// Fetch ou Axios
import axios from "axios";

// const { NODE_ENV } = process.env;
const URL = "https://para-teste.onrender.com/api";
// const URL = "https://deploy-jornada-full-stack.onrender.com/api";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
