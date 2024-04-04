// DummyChart.tsx
import React from 'react';
import Chart from 'react-apexcharts';

interface DummyChartProps {
  data: number[];
  labels: string[];
}

const TotalPatients: React.FC<DummyChartProps> = ({ data, labels }) => {
  const options = {
    labels,
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
      },
    },
  };

  const series = data;

  return <Chart options={options} series={series} type="donut" height={180} />;
};

export default TotalPatients;
