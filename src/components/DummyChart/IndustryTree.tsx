// treemap.tsx
import React from 'react';
import Chart from 'react-apexcharts';

// interface IndustryTreeProps {
//   // data: number[];
//   // labels: string[];
//   data: { label: string; value: number }[];
// }
interface DataItem {
  x: string;
  y: number;
}

interface DataSeries {
  name: string;
  data: DataItem[];
}

interface IndustryTreeProps {
  data: DataSeries[];
}

const IndustryTree: React.FC<IndustryTreeProps> = ({ data }) => {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    legend: {
      show: true,
    },
    
  };

  const series = data;

  return <Chart options={options} series={series} type="treemap" height={250} />;
};

export default IndustryTree;