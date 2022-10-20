import { useState, useEffect } from 'react';
import openingHours from '../data/openingHours';
import { IStoreTimes } from '../interfaces/timings';

const useFetchOpeningHours = () => {
  const [data, setData] = useState<IStoreTimes | undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(openingHours);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [data]);

  return { data, loading };
};

export default useFetchOpeningHours;
