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
    minHeight: ({ variant }: any) => (variant === "small" ? "" : "500px"),
    minWidth: ({ variant }: any) => (variant === "small" ? "" : "500px"),
    fontSize: ({ variant }: any) => (variant === "small" ? "" : "32px"),
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
  Botton: {
    color: "red",
  },
  Image: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
  },
  Title: {
    fontSize: "30px",
    fontWeight: "bold",
    textDecoration: "underline",
    cursor: ({ variant }: any) => (variant === "small" ? "pointer" : "default"),
  },
}));
