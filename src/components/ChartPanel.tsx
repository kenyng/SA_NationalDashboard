// src/components/ChartPanel.tsx
import React from 'react';
import { Box, ThemeProvider } from '@mui/system';

interface ChartPanelProps {
  backgroundColor?: string;
  children: any;
}

const ChartPanel: React.FC<ChartPanelProps> = ({ backgroundColor = '#DCECF4', children }) => {
  return (
    <Box className="chart-panel" style={{
      //marginLeft: '100px', 
      backgroundColor, display: "flex"
    }}>
      {children}
    </Box>
  );
};

export default ChartPanel;
