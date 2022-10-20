import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from './utils/tests/test-utils';
import useFetchOpeningHours from './hooks/useFetchOpeningHours';
import App from './App';
import openingHours from './data/openingHours';

jest.mock('./hooks/useFetchOpeningHours');

const mockUseFetchOpeningHours = useFetchOpeningHours as jest.Mock;

test('should render opening hours container with a header', () => {
  mockUseFetchOpeningHours.mockReturnValue({loading: false, data: openingHours});
  renderWithProviders(<App />);
  
  expect(screen.getByTestId('opening-hours')).toBeInTheDocument();
  expect(screen.getByTestId('header')).toBeInTheDocument();
});
