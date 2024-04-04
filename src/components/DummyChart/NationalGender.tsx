// DummyChart.tsx
import { Typography } from '@mui/material';
import React from 'react';
import Chart from 'react-apexcharts';

interface DummyChartProps {
  data: number[];
  labels: string[];
}

const NationalGender: React.FC<DummyChartProps> = ({ data, labels }) => {
  const options = {
    labels,
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
      },
    },
    stroke: {
      show: false,
      width: 0
    },
    // fill: {
    //   colors: ['#3AC7F5', '#FD5454', '#FAFBDB']
    // },
    colors: ['#3AC7F5', '#FD5454', '#FAFBDB'],
    legend: {
      show: true,
      labels: {
        colors: '#395E73' // Change legend text color to black
      },
      markers: {
        fillColors: ['#3AC7F5', '#FD5454', '#FAFBDB'] // Change dot colors
      }
    }
  };

  const series = data;

  return (
    <div>
      <Chart options={options} series={series} type="donut" height={180} />
      {/* <Typography>total: </Typography> */}
      {/* <Typography>{data[0] + data[1] + data[2]}</Typography> */}
    </div>
  );
};

export default NationalGender;
