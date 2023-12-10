import React from "react";
import styles from "./RadarChart.module.css";
import { Paper } from "@mui/material";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  type ChartData,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface RadarChartProps {
  data: ChartData<"radar", number[], string>;
}

const RadarChart: React.FC<RadarChartProps> = (props) => {
  return (
    <Paper className={styles["radar-chart"]}>
      <Radar data={props.data} />
    </Paper>
  );
};

export default RadarChart;
