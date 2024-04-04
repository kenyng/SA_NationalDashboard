// src/components/ControlPanel.tsx
import React from 'react';
import Button from '@mui/material/Button';

interface ControlPanelProps {
  onButtonAClick: () => void;
  onButtonBClick: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({ onButtonAClick, onButtonBClick }) => {
  return (
    <div className="control-panel">
      <div className="logo">Logo</div>
      <Button onClick={onButtonAClick} variant='outlined'>Button A</Button>
      <button onClick={onButtonBClick}>Button B</button>
      {/* Add your collection of filtering buttons here */}
      <button>Filter 1</button>
      <button>Filter 2</button>
      <button>Refresh</button>
    </div>
  );
};

export default ControlPanel;
