import * as React from "react";
import {Link} from "react-router-dom"
import CssBaseline from "@mui/material/CssBaseline";
import DarkBox from "../components/DarkBox";
import EmptyBox from "../components/EmptyBox";
import LightBox from "../components/LightBox";
import Container from "@mui/material/Container";

export default function BoxPage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fluid>
        <DarkBox />
        <EmptyBox />
        <LightBox />
        <Link to='/form'>To Form Page</Link>
      </Container>
    </React.Fragment>
  );
}
