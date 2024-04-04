// components/CardNationalPie.tsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

interface ChartCardProps {
  title: string;
  children: any;
}

const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, sans-serif', // Use Roboto as the default font
  },
});

const CardNationalPie: React.FC<ChartCardProps> = ({ title, children }) => {
  return (
    <Card style={{  
      marginLeft: '10px', 
      marginRight: '10px', 
      marginTop: '10px', 
      marginBottom: '10px', 
      flex: 1, 
      backgroundColor: '#A3E3F7',
      borderRadius: '20px',
      boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.09)', // x y blur color(r g b opacity)
      height: '210px'
    }}>
      <CardContent >
      <ThemeProvider theme={theme}>
          {/* <div style={{ backgroundColor: '#DCECF4', padding: '10px' }}> */}
            <Typography fontSize="22px" component="div" style={{ fontWeight: 'medium', color: '#395E73' }}>
              {title}
            </Typography>

            {/* Filter content */}
          {/* </div> */}
        </ThemeProvider>
        <div>
        {children}
        </div>
      </CardContent>
    </Card>
  );
};

export default CardNationalPie;
