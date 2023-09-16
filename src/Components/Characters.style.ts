import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "transparent",
    position: "absolute",
    bottom: "0px",
    right: "0px",

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
}));
