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
        alignItems="center"
        padding="md"
        boxSizing="border-box"
        background={theme.colors.grey_1}
        minHeight="100vh"
      >
        <OpeningHours />
      </Box>
    </ThemeProvider>
  );
}

export default App;
