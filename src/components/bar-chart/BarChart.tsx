import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import styles from "./BarChart.module.css";
import { Paper } from "@mui/material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

export interface BarChartProps {
  data: ChartData<"bar", number[], string>;
}

const BarChart: React.FC<BarChartProps> = (props) => {
  return (
    <Paper className={styles["bar-chart"]}>
      <Bar options={options} data={props.data} />
    </Paper>
  );
};

export default BarChart;
