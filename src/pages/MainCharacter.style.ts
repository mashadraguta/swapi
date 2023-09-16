import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  Container: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  Link: {
    color: "white",
    fontFamily: '"Coda", cursive',
  },
  Breadcrumbs: {
    "& .MuiBreadcrumbs-separator": {
      color: "white",
    },
    "& .MuiLink-root": {
      color: "white",
      fontFamily: '"Coda", cursive',
    },
  },
}));
