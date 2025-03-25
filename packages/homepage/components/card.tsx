/**
 * @file card.tsx
 * @description
 * This file exports the `Card` React component, which is used to visually present information
 * about a skip product (such as a waste container). It displays details including the skip size,
 * price, related tags, and a call-to-action section with buttons like "Select" and "View Details".
 *
 * If the `hasImage` prop is true, the component also displays a preview image alongside the content.
 *
 */
import Image from 'next/image';
import * as React from 'react';
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';

import { useFavoritesStore } from '../../../store/favoritesState';
import type { SkipDetails } from '../helpers/types';

/**
 * Props for the Card component.
 */
export interface CardProps {
  /**
   * Whether to show the image on the card.
   */
  hasImage: boolean;

  /**
   * Description text for the card (currently unused).
   */
  description: string;

  /**
   * List of tags to be displayed under the "Related" section.
   */
  tags: Array<string>;

  /**
   * Skip details including ID, size, and price before VAT.
   */
  skipDetails: Pick<SkipDetails, 'id' | 'size' | 'price_before_vat'>;
  onClickViewDetails: () => void;
  onSelect: () => void;
  data: SkipDetails;
}

/**
 * `Card` component displays information about a skip, including size, pricing, and related tags.
 * Optionally shows an image if `hasImage` is true.
 *
 * @param hasImage - Whether the card includes an image.
 * @param description - Description of the skip (currently not rendered).
 * @param tags - List of tags related to the skip.
 * @param skipDetails - Information about the skip, including size and price.
 *
 * @returns A styled card displaying skip details and call-to-action buttons.
 */
export default function Card({ hasImage, tags, skipDetails, onClickViewDetails, onSelect, data }: CardProps) {
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();
  const [hasHydrated, setHasHydrated] = React.useState(false);

  React.useEffect(() => {
    setHasHydrated(true);
  }, []);

  return (
    <div
      className={`${hasImage ? 'col-span-2' : 'col-span-1'} flex items-start gap-4 rounded-xl border border-solid border-gray-400 p-5 max-sm:flex-col`}>
      {/* Conditional image section */}
      {hasImage && (
        <Image
          src="https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800"
          width={400}
          height={400}
          alt=""
          className="aspect-square w-[45%] rounded-md"
        />
      )}
      <div>
        {/* Header section with size and heart icon */}
        <div className="flex justify-between">
          <p className="mb-1 w-fit rounded-full border border-gray-400 px-4 py-1 text-xs">
            {skipDetails.id != 0 ? skipDetails.size : '40+'} Yards
          </p>
          {hasHydrated && isFavorite(data.id) ? (
            <IoIosHeart fill="red" className="cursor-pointer" size={25} onClick={() => removeFavorite(data.id)} />
          ) : (
            <IoIosHeartEmpty className="cursor-pointer" size={25} onClick={() => addFavorite(data)} />
          )}
        </div>

        {/* Title and subtitle */}
        <p className="mb-2 text-lg">{!hasImage ? skipDetails.size : 'Custom'} Yard Skip</p>
        <p className="mb-2 text-sm">Book online with transparent pricing and assured loading every time.</p>

        {/* Tags section */}
        <div className="mb-2 flex flex-wrap items-center gap-x-2 gap-y-[6px] text-sm">
          <p className="text-gray-500">Related</p>
          {tags.map((tag) => {
            return (
              <p key={tag} className="w-fit rounded-full border border-gray-400 px-4 py-1 text-xs">
                {tag}
              </p>
            );
          })}
        </div>

        {/* Price display */}
        <div className="mb-3 flex items-end space-x-1">
          <p className="text-2xl font-semibold">{hasImage ? 'Ask For Price ' : `£${skipDetails.price_before_vat}`}</p>
          <p className="mb-1 text-sm">per week</p>
        </div>

        {/* Action buttons */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onSelect}
            className="rounded-md bg-sky-950 px-4 py-2 text-sm text-white duration-300 hover:bg-sky-900">
            Select
          </button>
          <button
            onClick={onClickViewDetails}
            className="rounded-md border border-solid border-gray-400 px-4 py-2 text-sm duration-300 hover:bg-gray-200">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
