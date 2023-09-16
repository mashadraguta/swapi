// @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700");
// #root {

// }
// .App-logo {
//   height: 40vmin;
//   pointer-events: none;
// }

import { createStyles, makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      minHeight: "100vh",
      minWidth: "100vw",
     // boxSizing: "borderBox",
    },
  })
);
