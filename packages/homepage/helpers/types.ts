/**
 * Represents the props for a single avatar.
 * @property imageSrc - The URL of the avatar image.
 * @property fallback - The fallback text displayed when the image fails to load.
 */

export interface AvatarProps {
  imageSrc: string;
  fallback: string;
}

export interface SkipDetails {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string | null;
  forbidden: boolean;
  created_at: string; // ISO date string
  updated_at: string; // ISO date string
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}
