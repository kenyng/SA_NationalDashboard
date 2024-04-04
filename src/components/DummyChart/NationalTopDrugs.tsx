// TestType.tsx
import React from 'react';
import Chart from 'react-apexcharts';

interface TestTypeProps {
  data: number[];
  labels: string[];
}

const TestType: React.FC<TestTypeProps> = ({ data, labels }) => {
  const colors = ['#FD5454', '#BDFF33', '#E8B261', '#676641', '#43BCE2', '#FF93DA', '#557BFF', '#5BCF75', '#AE73F9'];
  const options = {
    xaxis: {
      categories: labels,
      labels:{
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        distributed: true,
        borderRadius: 6,
        horizontal: true,
        barHeight: '80%',
      },
    },
    grid: {
      xaxis: {
        lines: {
          show: false,
        }
      },
      yaxis: {
        lines: {
          show: false,
        }
      }
    },
    colors: colors,
    legend: {
      show: false,
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
      data,
    },
  ];

  return <Chart options={options} series={series} type="bar" height={180} />;
};

export default TestType;
