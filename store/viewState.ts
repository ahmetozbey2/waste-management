import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { SectionViewType } from '../packages/homepage/helpers/types';

interface ViewStateStore {
  viewState: SectionViewType;
  setViewState: (state: SectionViewType) => void;
}

export const useViewState = create<ViewStateStore>()(
  persist(
    (set) => ({
      viewState: 'List',
      setViewState: (state) => set({ viewState: state }),
    }),
    {
      name: 'viewState-storage',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
