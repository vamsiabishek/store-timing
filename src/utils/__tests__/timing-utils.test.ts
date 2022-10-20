import { formatTimings, formatTimeWithAMPM, convertSecondsToTime, formatTimingsForTheDay } from '../timing-utils';
import { IOpeningHour, ITiming, Day } from '../../interfaces/timings';
import { weekdays } from '../../constants/common';
import openingHours from '../../data/openingHours';

describe('timing-utils', () => {
  test('format hours and minutes with AM/PM', () => {
    expect(formatTimeWithAMPM(22, 30)).toBe('10:30 PM');
    expect(formatTimeWithAMPM(11, 30)).toBe('11:30 AM');
    expect(formatTimeWithAMPM(12, 10)).toBe('12:10 PM');
    expect(formatTimeWithAMPM(10, 0)).toBe('10 AM');
  });

  test('convert seconds to hours and minutes with AM/PM', () => {
    expect(convertSecondsToTime(64800)).toBe('6 PM');
    expect(convertSecondsToTime(36000)).toBe('10 AM');
    expect(convertSecondsToTime(3600)).toBe('1 AM');
    expect(convertSecondsToTime()).toBe('');
  })

  test('format open and close timings for each day', () => {
    const openingHour: IOpeningHour[] = [
      {type: 'open', value: 36000},
      {type: 'close', value: 64800}
    ];
    const dayData = {
      day: weekdays[new Date().getDay()] as Day,
      dayIdx: 1,
      timings: [],
      openingHour
    };
    const timing: ITiming = formatTimingsForTheDay(dayData);

    expect(timing.open).toBe('10 AM');
    expect(timing.close).toBe('6 PM');
    expect(timing.isToday).toBe(true);
  })

  test('format open and close timings for the whole week', () => {
    const timings: ITiming[] = formatTimings(openingHours);
    
    expect(timings[0].isClosed).toBe(true);
    expect(timings[4].open).toBe('10 AM');
    expect(timings[4].close).toBe('1 AM')
  })
});