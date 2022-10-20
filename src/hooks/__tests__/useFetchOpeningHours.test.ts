import { renderHook, act } from '@testing-library/react';
import useFetchOpeningHours from '../useFetchOpeningHours';
import openingHours from '../../data/openingHours'

describe('useFetchOpeningHours hook', () => {

  test('should return policy data', () => {
    jest.useFakeTimers();
    const {result} = renderHook(() => useFetchOpeningHours());
    
    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(result.current.data).toEqual(openingHours);
  });
});

