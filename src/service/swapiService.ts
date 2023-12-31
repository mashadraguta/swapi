import { Api } from "./service";

const characterApi = Api();

export const Service = {
  async getAllCharacters() {
    try {
      const response = await characterApi.get("people");
      return response.data.results;
    } catch (error) {
      console.error("Error fetching all characters:", error);
      throw error;
    }
  },
  //PAGINATION
  async getNextCharacters(pageNr: number) {
    try {
      const response = await characterApi.get(`people/?page=${pageNr}`);
      return response.data.results;
    } catch (error) {
      console.error("Error fetching all characters:", error);
      throw error;
    }
  },
  async getCharacter(name: string) {
    try {
      const response = await characterApi.get(`people?search=${name}`);
      const characters = response.data.results;

      if (characters.length > 0) {
        return characters[0];
      } else {
        throw new Error("Character not found");
      }
    } catch (error) {
      console.error(`Error fetching character by name (${name}):`, error);
      throw error;
    }
  },
};
