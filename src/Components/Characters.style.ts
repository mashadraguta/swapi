import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  Pagination: {
    backgroundColor: "transparent",
    position: "fixed",
    bottom: "10px",
    right: "10px",
    "& .MuiPaginationItem-root": {
      color: "white",
      fontFamily: '"Coda", cursive',
      "&.Mui-selected": {
        backgroundColor: "rgba(255,217,102,0.7)",
      },
    },
    "& .MuiButtonBase-root": {
      color: "white",
      backgroundColor: "black",
      boxShadow:
        "rgba(255 255 255 / 25%) 0px 30px 60px -12px inset, rgba(255 255 255 / 25%) 0px 18px 36px -18px inset",
    },
  },
  GridContainer: {
    display: "grid",
    padding: "20px 0",
    justifyContent: "center",
    overflowY: "hidden",
    gap: "25px",

    [theme.breakpoints.up("xl")]: {
      //  1536px
      gridTemplateColumns: "repeat(5, 0.2fr)",
    },
    [theme.breakpoints.down("xl")]: {
      //1536px
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "repeat(auto, 1fr)",
    },
    [theme.breakpoints.down("lg")]: {
      // 1200px
      gridTemplateColumns: "repeat(3, 1fr)",
      gridTemplateRows: "repeat(auto, 1fr)",
    },
    [theme.breakpoints.down("md")]: {
      //  900px
      gridTemplateColumns: "repeat(2, 1fr)",
      gridTemplateRows: "repeat(auto, 1fr)",
    },
    [theme.breakpoints.down("sm")]: {
      //  600px
      gridTemplateColumns: "repeat(1, 1fr)",
      gridTemplateRows: "repeat(auto, 0.5fr)",
    },
  },
  GridItem: {
    justifySelf: "stretch",
  },
}));
