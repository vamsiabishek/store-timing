import React from 'react';
import { renderWithProviders } from '../../../utils/tests/test-utils';
import { screen } from '@testing-library/react';
import OpeningHours from '../OpeningHours';
import useFetchOpeningHours from '../../../hooks/useFetchOpeningHours';
import openingHours from '../../../data/openingHours';

jest.mock('../../../hooks/useFetchOpeningHours');

const mockUseFetchOpeningHours = useFetchOpeningHours as jest.Mock;

describe('OpeningHours component', () => {
  test('should show loading spinner on initial load', () => {
    mockUseFetchOpeningHours.mockReturnValue({loading: true});
    renderWithProviders(<OpeningHours />);

    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();

  });
  test('should render header and timings when timings are provided', () => {
    mockUseFetchOpeningHours.mockReturnValue({loading: false, data: openingHours});
    renderWithProviders(<OpeningHours />);

    expect(screen.queryByTestId('header')).toBeInTheDocument();
    expect(screen.queryByTestId('timings')).toBeInTheDocument();
  });

  test('should display no timings available message when no timings are provided', () => {
    mockUseFetchOpeningHours.mockReturnValue({loading: false});
    renderWithProviders(<OpeningHours />);

    expect(screen.getByText('No timings available')).toBeInTheDocument();
  });
});

