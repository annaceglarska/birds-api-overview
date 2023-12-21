import React from "react";
import { DataGrid } from "@mui/x-data-grid/DataGrid";
import { Paper } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { useAppSelector } from "../../app/hooks";
import { selectRecentNotableObservationsInRegion } from "../../slices/bird/bird.slice";
import { RecentNotableObservationsInRegion } from "../../services/api/api.types";

const StatisticTable = () => {
  const recentObservations = useAppSelector(
    selectRecentNotableObservationsInRegion
  );

  const columns: GridColDef<RecentNotableObservationsInRegion>[] = [
    {
      field: "speciesCode",
      headerName: "Species Code",
    },
    {
      field: "comName",
      headerName: "Com Name",
    },
    {
      field: "sciName",
      headerName: "Sci Name",
    },
    {
      field: "locId",
      headerName: "Loc ID",
    },
    {
      field: "locName",
      headerName: "Local Name",
    },
    {
      field: "obsDt",
      headerName: "Observation Date",
    },
    {
      field: "howMany",
      headerName: "How Many",
    },
  ];

  return (
    <Paper>
      <DataGrid
        columns={columns}
        rows={recentObservations}
        getRowId={(row) => row.subId}
      />
    </Paper>
  );
};

export default StatisticTable;
