// components/Drawer.tsx
import React from 'react';
import { Drawer as MuiDrawer, List, ListItem, ListItemText } from '@mui/material';

const Drawer: React.FC = () => {
  return (
    <MuiDrawer variant="permanent" anchor="left">
      <List>
        <ListItem button>
          <ListItemText primary="User Info" />
        </ListItem>
        {/* Add more list items for other controls */}
      </List>
    </MuiDrawer>
  );
};

export default Drawer;
