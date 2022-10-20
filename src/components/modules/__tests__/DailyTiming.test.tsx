import React from 'react';
import { renderWithProviders } from '../../../utils/tests/test-utils';
import { screen } from '@testing-library/react';
import DailyTiming from '../DailyTiming';
import { Day } from '../../../interfaces/timings';

describe('Timings component', () => {
  const defaultProps = {
    day: Day.monday,
    open: '10 AM',
    close: '5 PM',
    isToday: true,
  }
  test('should show day, its open and close timing', () => {
    renderWithProviders(<DailyTiming {...defaultProps} />);

    expect(screen.getByText('monday')).toBeInTheDocument();
    expect(screen.getByText('10 AM - 5 PM')).toBeInTheDocument();
    expect(screen.getByText('today')).toBeInTheDocument();
  });

  test('should indicate today, when isToday is true', () => {
    renderWithProviders(<DailyTiming {...defaultProps} />);

    expect(screen.getByText('today')).toBeInTheDocument();
  });
  test('should show closed when isClosed is true', () => {
    const closedProps = {
      day: Day.monday,
      isClosed: true
    }
    renderWithProviders(<DailyTiming {...closedProps}/>);

    expect(screen.getByText('closed')).toBeInTheDocument();
  });
});

