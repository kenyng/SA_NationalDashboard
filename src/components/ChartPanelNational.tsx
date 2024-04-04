// src/components/ChartPanelNational.tsx
import React from 'react';
import { Box, ThemeProvider } from '@mui/system';

interface ChartPanelNationalProps {
  backgroundColor?: string;
  children: any;
}

const ChartPanelNational: React.FC<ChartPanelNationalProps> = ({ backgroundColor = '#DCECF4', children }) => {
  return (
    <Box className="chart-panel" style={{
      backgroundColor, display: "flex"
    }}>
      
      {children}
    </Box>
  );
};

export default ChartPanelNational;
