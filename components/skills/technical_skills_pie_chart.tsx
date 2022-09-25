import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function TechnicalSkillsPieChart() {
  const ADVANCED_THRESHOLD = 24;
  const INTERMEDIATE_THRESHOLD = 10;

  const data = {
    labels: [
      "JavaScript, TypeScript",
      "React, NextJS, Redux",
      "Java, Python",
      "REST API, GraphQL",
      "CSS, SASS, MUI",
      "MongoDB, MySQL",
      "Flutter, Firebase",
      "AWS, GCP, Netlify",
    ],
    datasets: [
      {
        label: "skill level",
        data: [25, 15, 14, 14, 11, 10, 6, 5],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(232, 233, 99, 0.5)",
          "rgba(193, 170, 219, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(232, 233, 99, 1)",
          "rgba(193, 170, 219, 1)",
        ],
        borderWidth: 0.5,
      },
    ],
  };

  const option = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (tooltipItem: any) {
            //get the current items value
            const currentValue =
              tooltipItem.dataset.data[tooltipItem.dataIndex];

            return (
              tooltipItem.label +
              ": " +
              (currentValue > ADVANCED_THRESHOLD
                ? "advance"
                : currentValue > INTERMEDIATE_THRESHOLD
                ? "intermediate"
                : "beginner")
            );
          },
        },
      },
    },
  };

  return (
    <div id="chart">
      <Doughnut data={data} options={option} />
    </div>
  );
}
