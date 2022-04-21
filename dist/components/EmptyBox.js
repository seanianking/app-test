import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
export default function EmptyBox() {
  return /*#__PURE__*/React.createElement(Box, {
    component: "span",
    sx: {
      p: 2,
      border: '1px dashed grey'
    }
  }, /*#__PURE__*/React.createElement(Button, null, "Save"));
}