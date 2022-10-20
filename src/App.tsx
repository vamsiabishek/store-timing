import React from 'react';
import ThemeProvider, { theme } from './components/theme/ThemeProvider';
import OpeningHours from './components/modules/OpeningHours';
import Box from './components/atoms/Box';

function App() {
  return (
    <ThemeProvider>
      <Box
        display="flex"
        justifyContent="center"
        padding="md"
        background={theme.colors.grey_1}
      >
        <OpeningHours />
      </Box>
    </ThemeProvider>
  );
}

export default App;
