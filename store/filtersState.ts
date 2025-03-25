import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { FilterState } from '../packages/homepage/helpers/types';

interface FilterStore extends FilterState {
  setAllowsHeavyWaste: (value: boolean) => void;
  setAllowedOnRoad: (value: boolean) => void;
  setMinValue: (value: number) => void;
  setMaxValue: (value: number) => void;
  resetFilters: () => void;
}

export const useFilterStore = create<FilterStore>()(
  persist(
    (set) => ({
      allows_heavy_waste: false,
      allowed_on_road: false,
      minValue: 0,
      maxValue: 100,
      setAllowsHeavyWaste: (value) => set({ allows_heavy_waste: value }),
      setAllowedOnRoad: (value) => set({ allowed_on_road: value }),
      setMinValue: (value) => set({ minValue: value }),
      setMaxValue: (value) => set({ maxValue: value }),
      resetFilters: () =>
        set({
          allows_heavy_waste: false,
          allowed_on_road: false,
          minValue: 0,
          maxValue: 100,
        }),
    }),
    {
      name: 'filter-storage',
    },
  ),
);
