import axios from "axios";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

export const popularMovie = async () => {
  try {
    const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
    return movie.data.results;
  } catch (error) {
    console.error(error);
    throw new Error("Gagal melakukan pencarian film");
  }
};

export const searchMovie = async (q) => {
  try {
    const search = await axios.get(
      `${baseUrl}/search/movie?query=${q}&api_key=${apiKey}`
    );
    return search.data;
  } catch (error) {
    console.error(error);
    throw new Error("Gagal melakukan pencarian film");
  }
};

export const nowPlaying = async () => {
  try {
    const moviePlaying = await axios.get(
      `${baseUrl}/movie/now_playing?language=en-US&page=1&api_key=${apiKey}`
    );
    return moviePlaying.data.results; 
  } catch (error) {
    console.error(error);
    throw new Error("Gagal mendapatkan film yang sedang diputar");
  }
};