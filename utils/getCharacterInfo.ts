import { rickMortyApi } from "../api";
import { Character } from "../interfaces";

export const getCharacterInfo = async (id:string) => {

    try {
        const { data } = await rickMortyApi.get<Character>(`/character/${id}`);
        return {
          props: {
            character: data,
          },
        };
      } catch (error) {
        return null
      }

}