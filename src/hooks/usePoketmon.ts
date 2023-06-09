import axios, { AxiosResponse } from "axios";
import { useQuery, UseQueryResult } from "react-query";
import { PokemonResponse } from "../types";

const poketmonApi = (id?: string) =>
  axios.get(`https://pokeapi.co/api/v2/pokemon/${id || ""}`, {
    params: { limit: 151 },
  });

const usePoketmon = <T>(
  id?: string
): UseQueryResult<AxiosResponse<T>, Error> => {
  return useQuery(id ? ["poketmon", id] : "poketmon", () => poketmonApi(id));
};

export default usePoketmon;
