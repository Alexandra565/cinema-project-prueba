import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BASE_URL}`;
const BASE_URL_2 = `${import.meta.env.VITE_BASE_URL_2}`;

const options = {
  method: "GET",
  url: BASE_URL,
  headers: {
    "x-rapidapi-key": "e46133c197msh102a8b29437c9dap125303jsnccdf53d5f8d0",
    "x-rapidapi-host": "imdb-top-100-movies.p.rapidapi.com",
  },
};

const options2 = {
  method: "GET",
  url: BASE_URL_2,
};

const CityServices = {
  getAll: async () =>
    await axios
      .request(options)
      .then((res) => res)
      .catch((err) => console.error(err)),
  getOnly: async (data) =>
    await axios
      .request({ ...options2, params: data })
      .then((res) => res)
      .catch((err) => console.error(err)),
};

export default CityServices;
