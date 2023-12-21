import React from "react";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";
import { ConfigBar } from "./components/config-bar/ConfigBar";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Container maxWidth="xl">
      <header>
        <ConfigBar />
      </header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default App;
