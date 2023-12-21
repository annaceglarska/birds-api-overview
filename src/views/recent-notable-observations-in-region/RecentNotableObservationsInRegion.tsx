import React, { useEffect, useState, useMemo } from "react";
import BarChart from "../../components/bar-chart/BarChart";
import RadarChart from "../../components/radar-chart/RadarChart";
import StatisticTable from "../../components/statisctic-table/StatisticTable";
import { DataForChart } from "../../components/radar-chart/RadarChart.types";
import { ChartData } from "chart.js";
import { StyledRow } from "../../styled/row/row.styled";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectRecentNotableObservationsInRegion } from "../../slices/bird/bird.slice";
import { getRecentNotableObservationInRegionAsync } from "../../slices/bird/bird.api-actions";
import { selectRegion } from "../../slices/config/config.slice";

const RecentNotableObservationsInRegion: React.FC = () => {
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

  return (
    <>
      <StyledRow>
        <BarChart data={barFinalData} />
        <RadarChart data={radarFinalData} />
      </StyledRow>
      <StatisticTable />
    </>
  );
};

export default RecentNotableObservationsInRegion;
