export interface personCharacter {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: Array<string>;
  species: never[];
  vehicles: never[];
  starships:never[];
  created: string;
  edited: string;
  url: string;
}
export interface movies {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: [];
  planets: [];
  starships: [];
  vehicles: [];
  species: [];
  created: string;
  edited: string;
  url: string;
}

export interface personCharacterArray {
  character: personCharacter;
  allCharacters: personCharacter[];
  movies: movies;
  error: string | null;
  loading: boolean;
  pageNr: number;
}
