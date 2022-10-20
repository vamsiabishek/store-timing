import React from 'react';
import { renderWithProviders } from '../../../utils/tests/test-utils';
import { H1, H2 } from '../Headings';
import { theme } from '../../theme/ThemeProvider';

describe('Headings', () => {

  test('should display H1 heading with specific styles', () => {
    const { container } = renderWithProviders(<H1/>);

    expect(container.firstChild).toHaveStyle(`font-size: 2em`);
    expect(container.firstChild).toHaveStyle(`font-weight: ${theme.fontWeights.extraBold}`);
  });

  test('should display H2 heading with specific styles', () => {
    const { container } = renderWithProviders(<H2 />);
    
    expect(container.firstChild).toHaveStyle(`font-size: 1.5em`);
    expect(container.firstChild).toHaveStyle(`font-weight: ${theme.fontWeights.extraBold}`);
  });
});