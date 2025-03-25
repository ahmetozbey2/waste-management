import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { SkipDetails } from '../packages/homepage/helpers/types';

interface FavoritesState {
  favorites: SkipDetails[];
  addFavorite: (item: SkipDetails) => void;
  removeFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
  clearFavorites: () => void;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      addFavorite: (item) => {
        const current = get().favorites;
        if (!current.find((fav) => fav.id === item.id)) {
          set({ favorites: [...current, item] });
        }
      },
      removeFavorite: (id) => {
        set({
          favorites: get().favorites.filter((fav) => fav.id !== id),
        });
      },
      isFavorite: (id) => {
        return get().favorites.some((fav) => fav.id === id);
      },
      clearFavorites: () => {
        set({ favorites: [] });
      },
    }),
    {
      name: 'favorites-storage', // localStorage key
    },
  ),
);
