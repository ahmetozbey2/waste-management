import Image from 'next/image';
import React, { type Dispatch, type SetStateAction } from 'react';
import { AiOutlineRollback } from 'react-icons/ai';
import { CiEdit } from 'react-icons/ci';
import { IoIosHeart, IoIosHeartEmpty } from 'react-icons/io';
import { IoAirplaneOutline, IoCloseOutline } from 'react-icons/io5';
import { LuNotebookPen } from 'react-icons/lu';
import { PiShippingContainer, PiTruckLight } from 'react-icons/pi';

import { Dialog, DialogClose, DialogContent } from '@/components/ui/dialog';

import { useFavoritesStore } from '../../../store/favoritesState';
import type { SkipDetails } from '../helpers/types';

interface DetailModalProps {
  tags: Array<string>;
  skipDetails: Pick<SkipDetails, 'id' | 'size' | 'price_before_vat'> | null;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  onSelect: () => void;
}
export function DetailModal({ skipDetails, tags, showModal, setShowModal, onSelect }: DetailModalProps) {
  if (!skipDetails) {
    return;
  }
  const { addFavorite, removeFavorite, isFavorite } = useFavoritesStore();
  const [hasHydrated, setHasHydrated] = React.useState(false);

  React.useEffect(() => {
    setHasHydrated(true);
  }, []);
  return (
    <Dialog open={showModal}>
      <DialogContent
        className="w-[80vh] max-w-[90%] max-sm:h-[500px] max-sm:overflow-auto lg:max-w-screen-2xl"
        onFocusOutside={() => setShowModal(false)}>
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-5">
            <Image
              src="https://www.maersk.com/~/media_sc9/maersk/product-hub/product-icons/ocean-transport.svg"
              width={60}
              height={60}
              alt=""
            />
            <div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => {
                  return <p className="w-fit rounded-full border border-gray-400 px-4 py-1 text-xs">{tag}</p>;
                })}
              </div>

              <h1 className="text-xl">{skipDetails?.id != 0 ? skipDetails?.size : 'Custom'} Skip</h1>
            </div>
          </div>
          {skipDetails.id != 0 && (
            <div className="cursor-pointer rounded-md border border-solid border-gray-400 p-[4px]">
              {hasHydrated && isFavorite(skipDetails.id) ? (
                <IoIosHeart
                  fill="red"
                  className="cursor-pointer"
                  size={25}
                  onClick={() => removeFavorite(skipDetails.id)}
                />
              ) : (
                <IoIosHeartEmpty
                  className="cursor-pointer"
                  size={25}
                  onClick={() => addFavorite(skipDetails as SkipDetails)}
                />
              )}
            </div>
          )}
        </div>

        <p className="text-sm font-light">
          With waste management needs constantly evolving, our Skip Booking platform is the most efficient way to stay
          ahead. Available 24/7 via web or mobile, it lets you browse, book, and manage skip sizes instantly—whenever
          and wherever you need. Simplify your operations with transparent pricing, fast delivery, and tailored services
          for homes, businesses, and construction sites.
        </p>
        <div className="flex flex-col gap-y-2">
          <div className="flex items-center gap-2">
            <PiTruckLight size={30} />
            <p>Guaranteed skip delivery and pickup</p>{' '}
          </div>
          <div className="flex items-center gap-2">
            <AiOutlineRollback size={30} />
            <p>Roll-on/Roll-off skip options</p>{' '}
          </div>
          <div className="flex items-center gap-2">
            <IoAirplaneOutline size={30} />
            <p>Integrated service for site-to-site logistics</p>{' '}
          </div>
          <div className="flex items-center gap-2">
            <LuNotebookPen size={25} />
            <p>Modify or cancel bookings instantly</p>{' '}
          </div>
          <div className="flex items-center gap-2">
            <CiEdit size={30} />
            <p>Flexible rental periods and extension options</p>{' '}
          </div>
          <div className="flex items-center gap-2">
            <PiShippingContainer size={30} />
            <p>Get notified when skips are available near you</p>{' '}
          </div>
          <button
            onClick={onSelect}
            className="mt-5 w-fit rounded-md bg-sky-950 px-8 py-3 text-sm text-white duration-300 hover:bg-sky-900">
            Select
          </button>
        </div>
        <DialogClose asChild>
          <button
            className="absolute right-0 flex size-10 items-center justify-center rounded-full bg-white text-gray-500  transition hover:text-gray-800 sm:-top-14"
            onClick={() => setShowModal(false)}>
            <IoCloseOutline size={25} />
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
