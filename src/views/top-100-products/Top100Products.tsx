import React, { useEffect } from "react";
import Table from "../../components/table/Table";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectTop100BirdProduct } from "../../slices/bird/bird.slice";
import { getTop100ProductAsync } from "../../slices/bird/bird.api-actions";
import { selectDate, selectRegion } from "../../slices/config/config.slice";

const Top100Products: React.FC = () => {
  const dispatch = useAppDispatch();
  const top100Product = useAppSelector(selectTop100BirdProduct);
  const date = useAppSelector(selectDate);
  const region = useAppSelector(selectRegion);

  useEffect(() => {
    const dateValue = date ? new Date(date) : new Date();
    dispatch(
      getTop100ProductAsync({
        dateConfig: {
          year: dateValue.getFullYear().toString() || "",
          month: dateValue.getMonth().toString() || "",
          day: dateValue.getDate().toString() || "",
        },
        regionCode: region,
      })
    );
  }, [date, region]);
  return <Table top100DataResponse={top100Product} />;
};

export default Top100Products;
