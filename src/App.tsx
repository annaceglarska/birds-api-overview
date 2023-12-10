import React from "react";
import { Outlet } from "react-router-dom";
import Container from "@mui/material/Container";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <Container maxWidth="xl">
      <header>Birds</header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};

export default App;
