import type { SkipDetails } from './types';

export const fetchSkipsByLocation = async (postcode: string, area: string): Promise<SkipDetails[]> => {
  const response = await fetch(`https://app.wewantwaste.co.uk/api/skips/by-location?postcode=${postcode}&area=${area}`);

  if (!response.ok) {
    throw new Error('Failed to fetch skips');
  }

  return response.json();
};
