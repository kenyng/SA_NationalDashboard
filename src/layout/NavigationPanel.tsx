import React, { useState } from 'react';
import { IconButton, Menu, MenuItem, Drawer, List, ListItem, ListItemText, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavigationPanel: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleDrawerClose = () => {
        setDrawerOpen(false);
    };

    const handleMenuItemClick = () => {
        // Handle menu item click
        setDrawerOpen(false);
    };

    return (
        <div style={{ backgroundColor: '#5DD0F4', padding: '10px' }}>
            {/* Hamburger icon */}
            <IconButton
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={() => setDrawerOpen(true)}
                style={{ marginBottom: '10px', color: 'white' }}
            >
                <MenuIcon />
            </IconButton>

            {/* Slide-in panel */}
            <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}
                PaperProps={{
                    style: {
                        width: 210,
                        backgroundColor: '#5DD0F4'
                    }
                }}>

                <div style={{ height: '48px' }}>
                    <IconButton onClick={handleDrawerClose} style={{ position: 'absolute', right: '0', color: 'white' }}>
                        <CloseIcon />
                    </IconButton>
                </div>
                <List>
                    {/* <Divider /> */}
                    <ListItem button onClick={handleMenuItemClick}>
                        <ListItemText primary="Item 1" style={{ textAlign: 'center', color: 'white' }} />
                    </ListItem>
                    <ListItem button onClick={handleMenuItemClick}>
                        <ListItemText primary="Item 2" style={{ textAlign: 'center', color: 'white' }} />
                    </ListItem>
                    <ListItem button onClick={handleMenuItemClick}>
                        <ListItemText primary="Item 3" style={{ textAlign: 'center', color: 'white' }} />
                    </ListItem>
                </List>
            </Drawer>

            {/* Additional navigation content */}
        </div>
    );
};

export default NavigationPanel;