import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  Container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  Title: {
    color: "#ffffff",
    fontSize: "42px",
  },
  LinearProgress: {
    "&.MuiLinearProgress-root": {
      position: "absolute",
      top: "50%",
      left: "0",
      width: "100%",
      height: "20px",
      color: "#2986cc",
    },
  },
}));
