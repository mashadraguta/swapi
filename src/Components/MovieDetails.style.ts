import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  Root: {
    padding: "15px",
    backgroundColor: "rgba(255,217,102,0.9)",
    "-webkit-box-shadow": "10px 10px 5px 0px rgba(255,255,255,1)",
    "-moz-box-shadow": "10px 10px 5px 0px rgba(255,255,255,1)",
    boxShadow: "10px 10px 5px 0px rgba(255,255,255,1)",
    borderRadius: "10px",
    position: "relative",
    fontSize: "32px",
    minHeight: "200px",
    minWidth: "450px",
    [theme.breakpoints.down("sm")]: {
      minWidth: "300px",
    },
    "& ul": {
      listStyleType: "none",
    },
    "& li": {
      fontStyle: "italic",
    },
  },
  Preloader: {
    "&.MuiLinearProgress-root": {
      position: "absolute",
      top: "50%",
      left: "0",
      width: "100%",
      height: "20px",
    },
  },
}));
