import { Pagination } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import { fetchChars, fetchNextChars } from "../store/swapiActions";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MainPreloader } from "../ReusableComponents/MainPreloader";
import { CharCard } from "../ReusableComponents/CharCard";
import { useStyles } from "./Characters.style";

export const Characters = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const allCharacters = useAppSelector(
    (state) => state.character.allCharacters
  );
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

  return (
    <>
      <div>
        {loading ? (
          <MainPreloader />
        ) : (
          <React.Fragment>
            <div
              className={styles.GridContainer}
              role="list"
              title="star wars characters"
            >
              {allCharacters.map((char) => (
                <CharCard
                  onTitleClick={() => handleClick?.(char.name)}
                  variant="small"
                  name={char.name}
                  birthYear={char.birth_year}
                  gender={char.gender}
                  numberOfFilms={char.films.length}
                  className={styles.GridItem}
                />
              ))}
            </div>
            <Pagination
              variant="outlined"
              shape="rounded"
              count={9}
              page={page}
              onChange={(e: React.ChangeEvent<any>) => {
                setPage(Number(e.currentTarget.innerText));
                navigate(`/page/${e.currentTarget.innerText}`);
              }}
              className={styles.Pagination}
              hidePrevButton
              hideNextButton
            />
          </React.Fragment>
        )}
      </div>
    </>
  );
};
