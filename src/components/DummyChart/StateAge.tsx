// StateAge.tsx
import React from 'react';
import Chart from 'react-apexcharts';

interface StateAgeProps {
  data: number[][];
  labels: string[];
  stackLabels: string[];
}

const StateAge: React.FC<StateAgeProps> = ({ data, labels, stackLabels }) => {
  const options = {
    xaxis: {
      categories: labels,
      labels:{
        show: true
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
          horizontal: false,
        //   columnWidth: '50%',
          borderRadius: 4,
        },
      },
    // plotOptions: {
    //   bar: {
    //     horizontal: false,
    //     borderRadius: 10,
    //     dataLabels: {
    //       total: {
    //         enabled: true,
    //         offsetX: 0,
    //         style: {
    //           fontSize: '13px',
    //           fontWeight: 900
    //         }
    //       }
    //     }
    //   },
    // },
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
      stacked: false,
    },
  };

  const series = data.map((stack, index) => ({
    name: stackLabels[index],
    data: stack,
  }));

  return <Chart options={options} series={series} type="bar" height={220} />;
};

export default StateAge;
