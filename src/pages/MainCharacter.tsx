import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { fetchParticularChar } from "../store/swapiActions";
import MovieDetails from "../Components/MovieDetails";
import { CharCard } from "../ReusableComponents/CharCard";
import { Breadcrumbs, Link } from "@mui/material";
import { MainPreloader } from "../ReusableComponents/MainPreloader";
import { useStyles } from "./MainCharacter.style";

const MainCharacter: React.FC = () => {
  const { name } = useParams();
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const character = useAppSelector((state) => state.character.character);
  const loading = useAppSelector((state) => state.character.loading);
  const page = useAppSelector((state) => state.character.pageNr);
  useEffect(() => {
    if (name) dispatch(fetchParticularChar(name));
  }, [dispatch, name]);

  return (
    <div key={character.name} className={styles.Container}>
      {loading ? (
        <MainPreloader />
      ) : (
        <div>
          <Breadcrumbs aria-label="breadcrumb" className={styles.Breadcrumbs}>
            <Link
              className={styles.Link}
              onClick={() => navigate(`/page/${page}`)}
            >
              back
            </Link>
            <Link className={styles.Link}>{character.name.toUpperCase()}</Link>
          </Breadcrumbs>
          <div className={styles.Information}>
            <div>
              <CharCard
                variant="large"
                name={character.name}
                height={character.height}
                mass={character.mass}
                skinColor={character.skin_color}
                eyeColor={character.eye_color}
                hairColor={character.hair_color}
                birthYear={character.birth_year}
                gender={character.gender}
                numberOfFilms={character.films.length}
              />
            </div>
            <MovieDetails arrayMovies={character.films} load={loading} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MainCharacter;
