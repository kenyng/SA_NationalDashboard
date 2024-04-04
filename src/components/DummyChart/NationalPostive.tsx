// DummyChart.tsx
import { Typography } from '@mui/material';
import React from 'react';
import Chart from 'react-apexcharts';
import { ThemeProvider, createTheme } from '@mui/material/styles';

interface DummyChartProps {
  data: number[];
  labels: string[];
}

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif', // Use Roboto as the default font
  },
});

const TotalPatients: React.FC<DummyChartProps> = ({ data, labels }) => {
  const options = {
    labels,
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 90,
      },
    },
    stroke: {
      show: false,
      width: 0
    },
    // fill: {
    //   colors: ['#FD5454', '#FAFBDB']
    // },
    colors: ['#FD5454', '#FAFBDB'],
    legend: {
      show: false,
      
    },
  };

  const series = data;

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Chart options={options} series={series} type="donut" height={180} />
      <ThemeProvider theme={theme}>
        {/* <div style={{ backgroundColor: '#DCECF4', padding: '10px' }}> */}
        <Typography fontSize="32px" component="div" style={{
          fontWeight: 'Bold',
          color: '#395E73',
          position: 'absolute',
          top: '55%',
          left: '37%',
        }}>
          {data[0]}%
        </Typography>
      </ThemeProvider>
    </div>
  );
};

export default TotalPatients;