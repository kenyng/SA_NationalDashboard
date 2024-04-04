// StateCategory.tsx
import React from 'react';
import Chart from 'react-apexcharts';

interface StateCategoryProps {
  data: number[][];
  labels: string[];
  stackLabels: string[];
}

const StateCategory: React.FC<StateCategoryProps> = ({ data, labels, stackLabels }) => {
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
    // plotOptions: {
    //   bar: {
    //     horizontal: true,
    //     barHeight: '80%',
    //     distributed: true,
    //   },
    // },
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 10,
        dataLabels: {
          total: {
            enabled: true,
            offsetX: 0,
            style: {
              fontSize: '13px',
              fontWeight: 900
            }
          }
        }
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
    
    chart: {
      // foreColor: '#333',
      toolbar: {
        show: false,
      },
      stacked: true,
    },
  };

  const series = data.map((stack, index) => ({
    name: stackLabels[index],
    data: stack,
  }));

  return <Chart options={options} series={series} type="bar" height={220} />;
};

export default StateCategory;
