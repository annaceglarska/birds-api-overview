import React from "react";
import { Outlet } from "react-router-dom";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <div>
      <header>Birds</header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default App;
