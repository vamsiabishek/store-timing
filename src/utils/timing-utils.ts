import { ITiming, IStoreTimes, IOpeningHour, Day } from '../interfaces/timings';
import { weekdays, weekdaysFromMonToSun } from '../constants/common';

export const formatTimeWithAMPM = (hours: number, minutes: number) => {
  const AmPm = hours >= 12 ? 'PM' : 'AM';
  
  // converts hours into 12hr format
  if (hours >= 13) {
    hours = hours - 12
  } 

  return minutes > 0 ? `${hours}:${minutes} ${AmPm}` : `${hours} ${AmPm}`;
}

export const convertSecondsToTime = (seconds?: number) => {
  let time = '';
  if(seconds) {
    let minutes = seconds / 60;
    const hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
    
    time = formatTimeWithAMPM(hours, minutes);
  }
  return time
}

export const formatTimingsForTheDay = ({day, dayIdx, timings, openingHour}: {day: Day, dayIdx: number, timings: ITiming[], openingHour: IOpeningHour[]}) => {
  const timing: ITiming = { 
    day,
    isToday: weekdays[new Date().getDay()] === day
  };

  if (openingHour.length) {
    for(let idx = 0; idx < openingHour.length; idx++) {
      const { type, value } = openingHour[idx]
      if(idx === 0 && type === 'close') {
        timings[dayIdx - 1].close = convertSecondsToTime(value)
      } else if (type === 'open') {
        timing.open = convertSecondsToTime(value)
      } else if (type === 'close') {
        timing.close = convertSecondsToTime(value)
      }
    }
  } else {
    timing.isClosed = true;
  }

  return timing;
}

export const formatTimings = (openingHours: IStoreTimes) => {
  const timings: ITiming[]  = [];
  
  // timings of weekdays starting from Monday and ending with Sunday 
  for (let dayIdx = 0; dayIdx < weekdaysFromMonToSun.length; dayIdx++) {
    const day: Day = weekdaysFromMonToSun[dayIdx] as Day;
    const openingHour: IOpeningHour[] = openingHours[day];

    const timing: ITiming = formatTimingsForTheDay({day, dayIdx, timings, openingHour});
    
    timings.push(timing);
  }

  return timings;
}