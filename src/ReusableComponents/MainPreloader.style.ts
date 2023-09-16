import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  Container: {
    display: "flex",
    flexDirection: "column",
    gap: "100px",
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
