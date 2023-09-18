import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  Container: {
    paddingTop: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  },
  LinkBack: {
    cursor: "pointer",
  },
  LinkTitle: {
    cursor: "default",
  },
  Breadcrumbs: {
    marginBottom: "20px",
    "& .MuiBreadcrumbs-separator": {
      color: "white",
    },
    "& .MuiLink-root": {
      color: "white",
      fontFamily: '"Coda", cursive',
    },
  },
  Information: {
    display: "flex",
    gap: "20px",
    paddingBottom: "50px",
    [theme.breakpoints.down("md")]: {
      // 1200px
      flexDirection: "column",
      paddingBottom: "50px",
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: "300px",
      minWidth: "300px",
    },
  },
}));
