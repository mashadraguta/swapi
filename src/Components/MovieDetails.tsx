import { LinearProgress } from "@mui/material";
import React, { useEffect, useState } from "react";

import { movies } from "../models/reduxModels";

import { Api } from "../service/API";

import { useStyles } from "./MovieDetails.style";

interface IMovieDetails {
  arrayMovies: Array<string>;
  load: boolean;
}

export const MovieDetails: React.FC<IMovieDetails> = ({
  arrayMovies,
  load,
}) => {
  const axios = Api();
  const [movieDetails, setMovieDetails] = useState<movies[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const styles = useStyles({ isLoading });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const moviePromises = arrayMovies.map(async (movieUrl) => {
          const response = await axios.get(movieUrl);
          return response.data;
        });

        const movieDetailsData = await Promise.all(moviePromises);

        setMovieDetails(movieDetailsData);
        setIsLoading(false);
      } catch (error) {
        console.error("Encountered an error when loading movie details", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [arrayMovies]);

  const yearsAgo = (value: string) => {
    const releaseYear = new Date(value).getFullYear();
    const currentYear = new Date().getFullYear();
    return currentYear - releaseYear;
  };

  return (
    <div>
      <div className={styles.Root}>
        SERIES
        <div>
          {isLoading ? (
            <LinearProgress className={styles.Preloader} />
          ) : (
            movieDetails.map((movie, index) => (
              <ul>
                <li key={movie.title}>
                  {++index}. {movie.title}
                </li>
                <div style={{ fontSize: "24px" }}>
                  -released {yearsAgo(movie.release_date)} years ago-
                </div>
              </ul>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
