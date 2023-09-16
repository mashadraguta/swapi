import { Grid, Pagination } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { fetchChars, fetchNextChars } from "../store/swapiActions";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { MainPreloader } from "../ReusableComponents/MainPreloader";
import { CharCard } from "../ReusableComponents/CharCard";
import { useStyles } from "./Characters.style";

export const Characters = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const alltodos = useAppSelector((state) => state.character.allCharacters);
  const loading = useAppSelector((state) => state.character.loading);
  const pageNr = useAppSelector((state) => state.character.pageNr);
  const [page, setPage] = useState(pageNr);
  const styles = useStyles();
  useEffect(() => {
    dispatch(fetchChars());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchNextChars(page));
  }, [dispatch, page]);

  function handleClick(name: string): any {
    navigate(`/character/${name}`);
  }
  // xs, extra-small: 0px
  // sm, small: 600px
  // md, medium: 900px
  // lg, large: 1200px
  // xl, extra-large: 1536px
  return (
    <>
      <div>
        {loading ? (
          <MainPreloader />
        ) : (
          <Grid
            container
            rowSpacing={{ xs: 3, sm: 3, md: 3, lg: 4, xl: 4 }}
            columnSpacing={{ xs: 3, sm: 3, md: 3, lg: 4, xl: 4 }}
            sx={{ position: "relative" }}
          >
            <Pagination
              variant="outlined"
              shape="rounded"
              count={9}
              page={page}
              onChange={(e: React.ChangeEvent<any>) => {
                setPage(Number(e.currentTarget.innerText));
                navigate(`/page/${e.currentTarget.innerText}`);
              }}
              className={styles.root}
              hidePrevButton
              hideNextButton
            />
            {alltodos.map((char) => (
              <Grid item xl={2} lg={3} md={3} sm={4}>
                <CharCard
                  onTitleClick={() => handleClick?.(char.name)}
                  variant="small"
                  name={char.name}
                  birthYear={char.birth_year}
                  gender={char.gender}
                  numberOfFilms={char.films.length}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </div>
    </>
  );
};
