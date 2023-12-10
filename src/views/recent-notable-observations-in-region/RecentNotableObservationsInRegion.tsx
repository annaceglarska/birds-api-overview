import React, { useEffect, useState, useMemo } from "react";
import BarChart from "../../components/bar-chart/BarChart";
import RadarChart from "../../components/radar-chart/RadarChart";
import StatisticTable from "../../components/statisctic-table/StatisticTable";
import { apiService } from "../../services/api/api.service";
import { RecentNotableObservationsInRegionDTO } from "../../services/api/api.types";
import { DataForChart } from "../../components/radar-chart/RadarChart.types";
import { ChartData } from "chart.js";
import { StyledRow } from "../../styled/row/row.styled";

const RecentNotableObservationsInRegion: React.FC = () => {
  const [recentObservation, setRecentObservations] =
    useState<RecentNotableObservationsInRegionDTO | null>(null);

  useEffect(() => {
    apiService
      .fetchRecentNotableObservationsInRegion()
      .then((data) => {
        setRecentObservations(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const chartData = useMemo<DataForChart>(() => {
    const getInitialCollector = (): DataForChart => ({
      labels: [],
      data: [],
    });
    const dataChart = recentObservation?.reduce<DataForChart>(
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
  }, [recentObservation]);

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
