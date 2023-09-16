import { LinearProgress } from "@mui/material";
import { useStyles } from "./MainPreloader.style";

export const MainPreloader = () => {
  const styles = useStyles();
  return (
    <div className={styles.Container}>
      <div className={styles.Title}>
        STAY TUNED. WE ARE LOADING YOUR FAVORITE CHARACTERS...
      </div>
      <div>
        <LinearProgress className={styles.LinearProgress} />
      </div>
    </div>
  );
};
