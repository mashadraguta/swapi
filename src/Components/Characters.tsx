import { Grid, Pagination } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { fetchChars, fetchNextChars } from "../store/swapiActions";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MainPreloader } from "../ReusableComponents/MainPreloader";
import { CharCard } from "../ReusableComponents/CharCard";

export const Characters = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const alltodos = useAppSelector((state) => state.character.allCharacters);
  const loading = useAppSelector((state) => state.character.loading);
  const pageNr = useAppSelector((state) => state.character.pageNr);
  const [page, setPage] = useState(pageNr);

  useEffect(() => {
    dispatch(fetchChars());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchNextChars(page));
  }, [dispatch, page]);
  //https://swapi.dev/api/people/?page=2
  function handleClick(name: string): any {
    navigate(`/character/${name}`);
  }

  return (
    <>
      <div>
        <Pagination
          variant="outlined"
          shape="rounded"
          count={9}
          page={page}
          onChange={(e: React.ChangeEvent<any>) => {
            setPage(Number(e.currentTarget.innerText));
            navigate(`/page/${e.currentTarget.innerText}`);
          }}
          sx={{ backgroundColor: "white", fontFamily: '"Coda", cursive' }}
          hidePrevButton
          hideNextButton
        />
        <Grid
          container
          rowSpacing={{ xs: 1, sm: 2, md: 3, lg: 8 }}
          columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 8 }}
          sx={{ marginTop: "20px" }}
        >
          {loading ? (
            <MainPreloader />
          ) : (
            alltodos.map((char) => (
              <Grid item xs={7} sm={5} md={3} lg={3}>
                <CharCard
                  onTitleClick={() => handleClick?.(char.name)}
                  variant="small"
                  name={char.name}
                  birthYear={char.birth_year}
                  gender={char.gender}
                  numberOfFilms={char.films.length}
                />
              </Grid>
            ))
          )}
        </Grid>
      </div>
    </>
  );
};
