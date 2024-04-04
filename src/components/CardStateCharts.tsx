// components/ChartCard.tsx
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface CardStateChartsProps {
  title: string;
  children: any;
}

const CardStateCharts: React.FC<CardStateChartsProps> = ({ title, children }) => {
  return (
    <Card style={{  
      marginLeft: '10px', 
      marginRight: '10px', 
      marginTop: '10px', 
      marginBottom: '10px', 
      flex: 1, 
      backgroundColor: 'white',
      borderRadius: '20px',
      height: '290px',
      boxShadow: '0px 10px 40px rgba(0, 0, 0, 0.06)' // x y blur color(r g b opacity)
      
    }}>
      <CardContent >
        <Typography fontSize="18px" component="div" style={{ fontWeight: 'bold' , color: ''}}>
          {title}
        </Typography>
        <div style={{ marginTop: '-18px' }}>
        {children}
        </div>
      </CardContent>
    </Card>
  );
};

export default CardStateCharts;
