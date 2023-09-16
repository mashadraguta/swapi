import { makeStyles } from "@mui/styles";

const VARIANTS = {
  small: "small",
  large: "large",
};

export type ICardVariants = keyof typeof VARIANTS;
export interface IStyleProps {
  small: string;
  large: string;
}

export const useStyles = makeStyles<IStyleProps>(() => ({
  root: {
    padding: "15px",
    backgroundColor: "rgba(255,217,102,0.9)",
    "-webkit-box-shadow": "10px 10px 5px 0px rgba(255,255,255,1)",
    "-moz-box-shadow": "10px 10px 5px 0px rgba(255,255,255,1)",
    boxShadow: "10px 10px 5px 0px rgba(255,255,255,1)",
    borderRadius: "10px",
    minHeight: "300px",
    minWidth: "300px",
    position: "relative",
    fontSize: "32px",
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
