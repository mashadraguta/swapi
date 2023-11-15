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
    minWidth: ({ variant }: any) => (variant === "large" ? "400px" : ""),
    fontSize: ({ variant }: any) => (variant === "small" ? "" : "33px"),
   
  },
  ImageTitle: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
  },
  Info: {
    display: "flex",
    justifyContent: "space-between",
  },
  DataInfo: {
    fontWeight: "700",
  },
  Image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
  },
  Title: {
    fontSize: ({ variant }: any) => (variant === "small" ? "25px" : "42px"),
    fontWeight: "bold",
    textDecoration: "underline",
    cursor: ({ variant }: any) => (variant === "small" ? "pointer" : "default"),
  },
}));
