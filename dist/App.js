import { BrowserRouter, Routes, Route } from "react-router-dom";
import BoxPage from "./pages/BoxPage.js";
import FormPage from "./pages/FormPage.js";
import "./App.css";

function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(BrowserRouter, null, /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route, {
    path: "/",
    element: /*#__PURE__*/React.createElement(BoxPage, null)
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/form",
    element: /*#__PURE__*/React.createElement(FormPage, null)
  }))));
}

export default App;