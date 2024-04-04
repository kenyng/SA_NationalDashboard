// App.tsx
import React, { useState } from 'react';
import NavigationPanel from './layout/NavigationPanel';
import FilterPanel from './layout/FilterPanel';
import ChartsPanel from './layout/ChartsPanel';

const App: React.FC = () => {
  // outputing the page
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '62px 224px auto', height: '100vh' }}>
      <NavigationPanel />
      <FilterPanel />
      <ChartsPanel />
    </div>
  );
};

export default App;