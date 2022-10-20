import React from 'react';
import Box from '../atoms/Box';
import Text from '../atoms/Text';
import { ITiming } from '../../interfaces/timings';

function DailyTiming({day, open, close, isClosed, isToday}: ITiming) {
  return (
    <Box 
      paddingY="sm"
      borderBottomWidth="sm" 
      borderBottomColor="grey_2" 
      borderBottomStyle="solid"
      width="100%"
      display="flex"
      alignItems="center" 
      justifyContent="space-between"
    >
      <Box>
        <Text fontSize="lg" fontWeight="bold" textTransform="capitalize">{day}</Text>
        {isToday && 
          <Text 
            fontSize="md" 
            fontWeight="bold" 
            textTransform="uppercase"
            paddingLeft="sm"
            color="green">
              today
          </Text>
        }
      </Box>
      {isClosed ? 
        <Text fontSize="lg" textTransform="capitalize" color="grey_3">closed</Text>
        : 
        <Text fontSize="lg">{`${open} - ${close}`}</Text>
      }
    </Box>
  );
}

export default DailyTiming;