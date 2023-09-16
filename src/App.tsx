import { Characters } from "./Components/Characters";
import { Route, Routes } from "react-router-dom";
import MainCharacter from "./pages/MainCharacter";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Characters />} />
      <Route path="/page/:pagenumber" element={<Characters />} />
      <Route path="/character/:name" element={<MainCharacter />} />
    </Routes>
  );
};

export default App;
