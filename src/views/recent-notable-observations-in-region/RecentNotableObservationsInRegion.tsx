import React, { useEffect, useMemo, useState } from "react";
import BarChart from "../../components/bar-chart/BarChart";
import RadarChart from "../../components/radar-chart/RadarChart";
import StatisticTable from "../../components/statisctic-table/StatisticTable";
import { DataForChart } from "../../components/radar-chart/RadarChart.types";
import { ChartData } from "chart.js";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectRecentNotableObservationsInRegion } from "../../slices/bird/bird.slice";
import { getRecentNotableObservationInRegionAsync } from "../../slices/bird/bird.api-actions";
import { selectRegion } from "../../slices/config/config.slice";
import { ConfigBar } from "../../components/config-bar/ConfigBar";
import classes from "./RecentNotableObservationsInRegion.module.css";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import IconButton from "@mui/material/IconButton";

export type SelectedChartType = "bar" | "radar";

const RecentNotableObservationsInRegion: React.FC = () => {
  const [selectedChart, setSelectedChart] = useState<SelectedChartType>("bar");
  const dispatch = useAppDispatch();
  const recentObservations = useAppSelector(
    selectRecentNotableObservationsInRegion
  );
  const region = useAppSelector(selectRegion);

  useEffect(() => {
    dispatch(getRecentNotableObservationInRegionAsync(region));
  }, [region]);

  const chartData = useMemo<DataForChart>(() => {
    const getInitialCollector = (): DataForChart => ({
      labels: [],
      data: [],
    });
    const dataChart = recentObservations?.reduce<DataForChart>(
      (accumulator, observation) => {
        const comNameIndex: number = accumulator.labels.findIndex(
          (label) => label === observation.comName
        );

        if (comNameIndex > -1) {
          accumulator.data[comNameIndex] += observation.howMany || 0;
        } else {
          accumulator.labels.push(observation.comName);
          accumulator.data.push(observation.howMany || 0);
        }

        return accumulator;
      },
      getInitialCollector()
    );
    return dataChart || getInitialCollector();
  }, [recentObservations]);

  const radarFinalData = useMemo<ChartData<"radar", number[], string>>(() => {
    return {
      labels: chartData.labels,
      datasets: [
        {
          label: "Birds",
          data: chartData.data,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    };
  }, [chartData]);

  const barFinalData = useMemo<ChartData<"bar", number[], string>>(() => {
    return {
      labels: chartData.labels,
      datasets: [
        {
          label: "Birds",
          data: chartData.data,
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    };
  }, [chartData]);

  const changeChart = () => {
    setSelectedChart(selectedChart === "bar" ? "radar" : "bar");
  };

  return (
    <>
      <div>
        <header>
          <ConfigBar />
        </header>
        <h1>Notable observations</h1>
      </div>
      <div className={classes.mainContent}>
        <nav></nav>
        <article>
          <div></div>
          <div>
            <IconButton
              onClick={changeChart}
              sx={{
                float: "right",
              }}
            >
              <ChangeCircleIcon />
            </IconButton>
            {selectedChart === "bar" ? (
              <BarChart data={barFinalData} />
            ) : (
              <RadarChart data={radarFinalData} />
            )}
          </div>
          <StatisticTable />
        </article>
        <aside></aside>
      </div>
    </>
  );
};

export default RecentNotableObservationsInRegion;
