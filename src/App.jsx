import "./App.scss";

import { Route, Routes } from "react-router";
import { Home } from "./pages/Home";

const App = () => {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
