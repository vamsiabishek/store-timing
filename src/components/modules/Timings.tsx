import React, { useState, useEffect } from 'react';
import Box from '../atoms/Box';
import DailyTiming from '../modules/DailyTiming';
import { IStoreTimes, ITiming } from '../../interfaces/timings';
import { formatTimings } from '../../utils/timing-utils';

function Timings({ timings }: {timings?: IStoreTimes}) {
  const [dailyHours, setDailyHours] = useState<ITiming[]>();

  useEffect(() => {
    if(timings) {
      setDailyHours(formatTimings(timings));
    }
  }, [timings]);

  if(!dailyHours?.length) {
    return null;
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      data-testid="timings"
    >
      {dailyHours?.map(timing => 
        <DailyTiming 
          day={timing.day}
          open={timing.open} 
          close={timing.close} 
          isClosed={timing.isClosed} 
          isToday={timing.isToday} 
          key={`timing-for-${timing.day}`}
        />
      )}
    </Box>
  );
}

export default Timings;