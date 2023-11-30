import { Characters } from "./Components/Characters";
import { Route, Routes } from "react-router-dom";
import MainCharacter from "./pages/MainCharacter";
import { Theme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/styles";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
declare module "@mui/styles/defaultTheme" {
  interface DefaultTheme extends Theme { }
}
const App = () => {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Characters />} />
        <Route path="/*" element={<Characters />} />
        <Route path="/page/:pagenumber" element={<Characters />} />
        <Route path="/character/:name" element={<MainCharacter />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;


