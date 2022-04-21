import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
export default function FormInputs() {
  return /*#__PURE__*/React.createElement(Box, {
    component: "form",
    sx: {
      '& .MuiTextField-root': {
        m: 1,
        width: '25ch'
      }
    },
    noValidate: true,
    autoComplete: "off"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TextField, {
    required: true,
    id: "outlined-required",
    label: "Required",
    defaultValue: "Hello World"
  }), /*#__PURE__*/React.createElement(TextField, {
    disabled: true,
    id: "outlined-disabled",
    label: "Disabled",
    defaultValue: "Hello World"
  }), /*#__PURE__*/React.createElement(TextField, {
    id: "outlined-password-input",
    label: "Password",
    type: "password",
    autoComplete: "current-password"
  }), /*#__PURE__*/React.createElement(TextField, {
    id: "outlined-read-only-input",
    label: "Read Only",
    defaultValue: "Hello World",
    InputProps: {
      readOnly: true
    }
  }), /*#__PURE__*/React.createElement(TextField, {
    id: "outlined-number",
    label: "Number",
    type: "number",
    InputLabelProps: {
      shrink: true
    }
  }), /*#__PURE__*/React.createElement(TextField, {
    id: "outlined-search",
    label: "Search field",
    type: "search"
  }), /*#__PURE__*/React.createElement(TextField, {
    id: "outlined-helperText",
    label: "Helper text",
    defaultValue: "Default Value",
    helperText: "Some important text"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TextField, {
    required: true,
    id: "filled-required",
    label: "Required",
    defaultValue: "Hello World",
    variant: "filled"
  }), /*#__PURE__*/React.createElement(TextField, {
    disabled: true,
    id: "filled-disabled",
    label: "Disabled",
    defaultValue: "Hello World",
    variant: "filled"
  }), /*#__PURE__*/React.createElement(TextField, {
    id: "filled-password-input",
    label: "Password",
    type: "password",
    autoComplete: "current-password",
    variant: "filled"
  }), /*#__PURE__*/React.createElement(TextField, {
    id: "filled-read-only-input",
    label: "Read Only",
    defaultValue: "Hello World",
    InputProps: {
      readOnly: true
    },
    variant: "filled"
  }), /*#__PURE__*/React.createElement(TextField, {
    id: "filled-number",
    label: "Number",
    type: "number",
    InputLabelProps: {
      shrink: true
    },
    variant: "filled"
  }), /*#__PURE__*/React.createElement(TextField, {
    id: "filled-search",
    label: "Search field",
    type: "search",
    variant: "filled"
  }), /*#__PURE__*/React.createElement(TextField, {
    id: "filled-helperText",
    label: "Helper text",
    defaultValue: "Default Value",
    helperText: "Some important text",
    variant: "filled"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(TextField, {
    required: true,
    id: "standard-required",
    label: "Required",
    defaultValue: "Hello World",
    variant: "standard"
  }), /*#__PURE__*/React.createElement(TextField, {
    disabled: true,
    id: "standard-disabled",
    label: "Disabled",
    defaultValue: "Hello World",
    variant: "standard"
  }), /*#__PURE__*/React.createElement(TextField, {
    id: "standard-password-input",
    label: "Password",
    type: "password",
    autoComplete: "current-password",
    variant: "standard"
  }), /*#__PURE__*/React.createElement(TextField, {
    id: "standard-read-only-input",
    label: "Read Only",
    defaultValue: "Hello World",
    InputProps: {
      readOnly: true
    },
    variant: "standard"
  }), /*#__PURE__*/React.createElement(TextField, {
    id: "standard-number",
    label: "Number",
    type: "number",
    InputLabelProps: {
      shrink: true
    },
    variant: "standard"
  }), /*#__PURE__*/React.createElement(TextField, {
    id: "standard-search",
    label: "Search field",
    type: "search",
    variant: "standard"
  }), /*#__PURE__*/React.createElement(TextField, {
    id: "standard-helperText",
    label: "Helper text",
    defaultValue: "Default Value",
    helperText: "Some important text",
    variant: "standard"
  })));
}