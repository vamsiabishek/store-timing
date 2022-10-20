import React, { PropsWithChildren } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import ThemeProvider from '../../components/theme/ThemeProvider';

export function renderWithProviders(
  ui: React.ReactElement,
  {
    ...renderOptions
  }: RenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren) {
    return <ThemeProvider>{children}</ThemeProvider>
  }
  
  return { ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

export default renderWithProviders;