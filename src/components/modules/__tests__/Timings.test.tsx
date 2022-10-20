import React from 'react';
import { renderWithProviders } from '../../../utils/tests/test-utils';
import { screen } from '@testing-library/react';
import Timings from '../Timings';
import openingHours from '../../../data/openingHours'

describe('Timings component', () => {
  const defaultProps = {
    timings: openingHours
  }
  test('should show timings for each day of the week', () => {
    renderWithProviders(<Timings {...defaultProps} />);

    expect(screen.getByText('monday')).toBeInTheDocument();
    expect(screen.getByText('tuesday')).toBeInTheDocument();
    expect(screen.getByText('wednesday')).toBeInTheDocument();
    expect(screen.getByText('thursday')).toBeInTheDocument();
    expect(screen.getByText('friday')).toBeInTheDocument();
    expect(screen.getByText('saturday')).toBeInTheDocument();
    expect(screen.getByText('sunday')).toBeInTheDocument();
  });
  test('should not render anything when timings are not available', () => {
    const { container } = renderWithProviders(<Timings />);

    expect(container.firstChild).toBeNull();
  });
});

