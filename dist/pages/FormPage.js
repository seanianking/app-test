import * as React from "react";
import { Link } from "react-router-dom";
import TableWithData from '../components/TableWithData';
import FormInputs from '../components/FormInputs';
export default function FormPage() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Link, {
    to: "/"
  }, "Box Page"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(FormInputs, null), /*#__PURE__*/React.createElement(TableWithData, null)));
}