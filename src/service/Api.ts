import axios from "axios";

export function Api  ()  {
  return axios.create({
    baseURL: "https://swapi.dev/api/",
  });
};
