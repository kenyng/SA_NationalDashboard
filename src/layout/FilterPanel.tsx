// FilterPanel.tsx
import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

import saLogo from '../sa_logo.svg';
import safeworkLogo from '../safework_logo.png';
import { padding } from '@mui/system';

const theme = createTheme({
    typography: {
        fontFamily: 'Roboto, sans-serif', // Use Roboto as the default font
    },
});

const FilterPanel: React.FC = () => {
    const buttons = [
        <Button key="one">2024</Button>,
        <Button key="two">2023</Button>,
        <Button key="three">2022</Button>,
        <Button key="four">2021</Button>,
    ];

    return (
        <ThemeProvider theme={theme}>
            <div style={{ backgroundColor: '#DCECF4', padding: '10px', borderRight: '2px solid #BDEBFA' }}>
                <div style={{ position: 'absolute', top: '20px', left: '72px' }}>
                    <img src={saLogo} alt="SA Logo" style={{ width: '6.5%', marginRight: '12px' }} />
                    <img src={safeworkLogo} alt="Safework Logo" style={{ width: '20%' }} />
                </div>

                {/* <Typography variant="h1" style={{ fontWeight: 'bold', color: '#395E73', fontSize: 36 }}>
                    Dashboard
                </Typography> */}
                {/* Filter content */}

                {/* <Typography style={{ fontWeight: 'light', color: '#395E73', fontSize: 20 }}>
                    (filters here)
                </Typography> */}
                <br />
                <Box>
                    <ButtonGroup orientation="vertical" aria-label="Vertical button group" style={{ paddingTop: '150%', paddingLeft: '2%' }}>
                        {buttons}
                    </ButtonGroup>

                </Box>
            </div>
        </ThemeProvider>
    );
};

export default FilterPanel;