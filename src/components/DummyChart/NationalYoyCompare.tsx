// LastYear.tsx
import React from 'react';
import Chart from 'react-apexcharts';

interface LastYearProps {
  data: number[];
  labels: string[];
}

const LastYear: React.FC<LastYearProps> = ({ data, labels }) => {
  const maxIndex = data.indexOf(Math.max(...data)); // Get the index of the maximum value
  // console.log(maxIndex)
  const colors = data.map((_, index) => (index === maxIndex ? '#FD5454' : '#3AC7F5')); // Set color based on index
  // console.log(colors)
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
      show: false
    },
    
    chart: {
      // Example customization for the chart
      // foreColor: '#333', // Font color
      toolbar: {
        show: false, // Hide the toolbar
      },
      
      // chart: {
      //   zoom: {
      //     enabled: true,
      //   }
      // },
    },

  };

  const series = [
    {
      data,
    },
  ];

  return <Chart options={options} series={series} type="bar" height={180} />;
};

export default LastYear;
