import * as React from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import DarkBox from "../components/DarkBox";
import EmptyBox from "../components/EmptyBox";
import LightBox from "../components/LightBox";
import Container from "@mui/material/Container";
export default function BoxPage() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CssBaseline, null), /*#__PURE__*/React.createElement(Container, {
    fluid: true
  }, /*#__PURE__*/React.createElement(DarkBox, null), /*#__PURE__*/React.createElement(EmptyBox, null), /*#__PURE__*/React.createElement(LightBox, null), /*#__PURE__*/React.createElement(Link, {
    to: "/form"
  }, "To Form Page")));
}