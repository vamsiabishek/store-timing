import React from 'react';
import useFetchOpeningHours from '../../hooks/useFetchOpeningHours';
import Loading from '../atoms/Loading';
import Header from '../atoms/Header';
import Timings from '../modules/Timings';
import Text from '../atoms/Text';
import Box from '../atoms/Box';
import { theme } from '../theme/ThemeProvider';

function OpeningHours() {

  const {data, loading} = useFetchOpeningHours();

  if (loading) {
    return <Loading />
  }

  return (
    <Box 
      paddingX="lg" 
      paddingY="md" 
      paddingBottom="lg" 
      borderRadius="xl"
      data-testid="opening-hours"
      background={theme.colors.white}
      width={400}
      boxShadow={`0px 0px 15px ${theme.colors.grey_2}`}
      boxSizing="border-box"
      height="fit-content"
    >
      <Header />
      {data ? <Timings timings={data}/> : <Text fontSize="sm" padding="sm">No timings available</Text>}
    </Box>
  );
}

export default OpeningHours;