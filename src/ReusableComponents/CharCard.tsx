import React from "react";
import { useStyles, ICardVariants } from "./ChardCard.style";
import CharImage from './altImg.png'
interface ICharCard {
  onTitleClick?: (key: string) => any;
  name: string;
  birthYear: string;
  gender: string;
  numberOfFilms: number;
  image?: string;
  height?: string;
  skinColor?: string;
  eyeColor?: string;
  hairColor?: string;
  mass?: string;
  variant?: ICardVariants;
  className?: string;
}

export function CharCard({
  onTitleClick,
  name,
  birthYear,
  gender,
  numberOfFilms,
  image,
  mass,
  eyeColor,
  hairColor,
  skinColor,
  variant,
  className,
}: ICharCard) {
  const styles = useStyles({ variant });

  return (
    <div className={className}>
      <div className={styles.root} role="listitem" title={name} tabIndex={0}>
        <div className={styles.ImageTitle}>
          <div className={styles.Title} onClick={() => onTitleClick?.(name)}>
            {name.toUpperCase()}{" "}
          </div>
          {mass ? null : (
            <img
              src={CharImage}
              alt="star wars character"
              className={styles.Image}
            />
          )}
        </div>

        <div>
          <div className={styles.Info}>
            <div>birth year</div>
            <div className={styles.DataInfo}>{birthYear}</div>
          </div>
          <div className={styles.Info}>
            <div>gender</div>
            <div className={styles.DataInfo}>{gender}</div>
          </div>
          <div className={styles.Info}>
            <div>number of movies</div>
            <div className={styles.DataInfo}>{numberOfFilms}</div>
          </div>
          {mass ? (
            <div>
              <div className={styles.Info}>
                <div>eye color</div>
                <div className={styles.DataInfo}>{eyeColor}</div>
              </div>
              <div className={styles.Info}>
                <div>hair color</div>
                <div className={styles.DataInfo}>{hairColor}</div>
              </div>
              <div className={styles.Info}>
                <div>skin color</div>
                <div className={styles.DataInfo}>{skinColor}</div>
              </div>
              <div className={styles.Info}>
                <div>mass</div>
                <div className={styles.DataInfo}>{mass}</div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
