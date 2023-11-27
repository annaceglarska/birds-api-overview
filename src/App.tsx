import React, { useEffect } from "react";
import Styles from "./App.module.css";
import Table from "./components/table/Table";
import { apiService } from "./services/api/api.service";

interface AppProps {}

const App: React.FC<AppProps> = () => {
  useEffect(() => {
    apiService
      .fetchTop100Product(200, { year: "2000", month: "05", day: "21" })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <Table />;
};

export default App;
