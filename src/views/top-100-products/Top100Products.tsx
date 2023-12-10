import React, { useEffect, useState } from "react";
import { Top100ProductDTO } from "../../services/api/api.types";
import { apiService } from "../../services/api/api.service";
import Table from "../../components/table/Table";

const Top100Products: React.FC = () => {
  const [top100DataResponse, setTop100DataResponse] =
    useState<Top100ProductDTO>([]);

  useEffect(() => {
    apiService
      .fetchTop100Product({ year: "2000", month: "05", day: "21" })
      .then((data) => {
        setTop100DataResponse(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return <Table top100DataResponse={top100DataResponse} />;
};

export default Top100Products;
