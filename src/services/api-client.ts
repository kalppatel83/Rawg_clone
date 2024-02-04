import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "233fc958c3f74ef48d1b1da5d767e627",
  },
});
