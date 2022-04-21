import * as React from 'react';
import Box from '@mui/material/Box';
export default function LightBox() {
  return /*#__PURE__*/React.createElement(Box, {
    sx: {
      width: 300,
      height: 300,
      backgroundColor: 'primary.light',
      '&:hover': {
        backgroundColor: 'primary.main',
        opacity: [0.9, 0.8, 0.7]
      }
    }
  });
}