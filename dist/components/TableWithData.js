import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein
  };
}

const rows = [createData('Frozen yoghurt', 159, 6.0, 24, 4.0), createData('Ice cream sandwich', 237, 9.0, 37, 4.3), createData('Eclair', 262, 16.0, 24, 6.0), createData('Cupcake', 305, 3.7, 67, 4.3), createData('Gingerbread', 356, 16.0, 49, 3.9)];
export default function TableWithData() {
  return /*#__PURE__*/React.createElement(TableContainer, {
    component: Paper
  }, /*#__PURE__*/React.createElement(Table, {
    sx: {
      minWidth: 650
    },
    "aria-label": "simple table"
  }, /*#__PURE__*/React.createElement(TableHead, null, /*#__PURE__*/React.createElement(TableRow, null, /*#__PURE__*/React.createElement(TableCell, null, "Dessert (100g serving)"), /*#__PURE__*/React.createElement(TableCell, {
    align: "right"
  }, "Calories"), /*#__PURE__*/React.createElement(TableCell, {
    align: "right"
  }, "Fat\xA0(g)"), /*#__PURE__*/React.createElement(TableCell, {
    align: "right"
  }, "Carbs\xA0(g)"), /*#__PURE__*/React.createElement(TableCell, {
    align: "right"
  }, "Protein\xA0(g)"))), /*#__PURE__*/React.createElement(TableBody, null, rows.map(row => /*#__PURE__*/React.createElement(TableRow, {
    key: row.name,
    sx: {
      '&:last-child td, &:last-child th': {
        border: 0
      }
    }
  }, /*#__PURE__*/React.createElement(TableCell, {
    component: "th",
    scope: "row"
  }, row.name), /*#__PURE__*/React.createElement(TableCell, {
    align: "right"
  }, row.calories), /*#__PURE__*/React.createElement(TableCell, {
    align: "right"
  }, row.fat), /*#__PURE__*/React.createElement(TableCell, {
    align: "right"
  }, row.carbs), /*#__PURE__*/React.createElement(TableCell, {
    align: "right"
  }, row.protein))))));
}