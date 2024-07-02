"use client";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ accounts }: DoughnutChartProps) => {
  const data = {
    datasets: [
      {
        label: "Orders Count",
        data: [1250, 600, 23211],
        backgroundColor: ["#0747b7", "#2265d8", "#2f91fa"],
      },
    ],
    labels: ["Bank 1", "Bank 2", "Bank 3"],
  };

  return <Doughnut data={data} />;
};

export default DoughnutChart;
