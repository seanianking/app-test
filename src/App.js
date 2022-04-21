import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoxPage from "./pages/BoxPage.js";
import FormPage from "./pages/FormPage.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BoxPage />}/>
            <Route path="/form" element={<FormPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
