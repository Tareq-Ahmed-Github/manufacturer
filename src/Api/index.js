import axios from "axios";

const fetcher = axios.create({
  baseURL: "https://bike-hunt.herokuapp.com",
});

export default fetcher;