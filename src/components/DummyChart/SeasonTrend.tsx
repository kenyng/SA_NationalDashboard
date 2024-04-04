// AreaChart.tsx
import React from 'react';
import Chart from 'react-apexcharts';

interface SeasonTrendProps {
  data: number[];
  labels: string[];
}

const SeasonTrend: React.FC<SeasonTrendProps> = ({ data, labels }) => {
  const options = {
    xaxis: {
      categories: labels,
    },
    chart: {
      // Example customization for the chart
      // foreColor: '#333', // Font color
      toolbar: {
        show: false, // Hide the toolbar
      },
    },
  };

  const series = [
    {
      data: data,
    },
  ];

  return <Chart options={options} series={series} type="area" height={260} />;
};

export default SeasonTrend;
