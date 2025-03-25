// src/hooks/useSkipsByLocation.ts
import { useQuery } from '@tanstack/react-query';

import { fetchSkipsByLocation } from './api';
import type { SkipDetails } from './types';

export const useSkipsByLocation = (postcode: string, area: string) => {
  return useQuery<SkipDetails[]>({
    queryKey: ['skips', postcode, area],
    queryFn: () => fetchSkipsByLocation(postcode, area),
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
  });
};
