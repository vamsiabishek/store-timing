import React from 'react';
import { renderWithProviders } from '../../../utils/tests/test-utils';
import { screen } from '@testing-library/react';
import Header from '../Header';

describe('Header component', () => {

  test('should display header with icon and label', () => {
    renderWithProviders(<Header />);

    expect(screen.queryByAltText('header-icon')).toBeInTheDocument();
    expect(screen.queryByText('Opening hours')).toBeInTheDocument();
  });
});

