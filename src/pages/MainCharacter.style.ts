import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  root: {},
  Link: {
    color: "white",
    fontFamily: '"Coda", cursive',
  },
  Breadcrumbs: {
    color: "white",
    "& .MuiLink-root": {
      color: "white",
      fontFamily: '"Coda", cursive',
      //   "& :nth-child(1)": {
      //     cursor: "pointer",
      //   },
      //   "& :nth-child(2)": {
      //     cursor: "default",
      //   }, // tbd
    },
  },
}));
