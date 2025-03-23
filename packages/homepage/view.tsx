import * as React from 'react';
import { BsFilterLeft } from 'react-icons/bs';
import { CiCircleList } from 'react-icons/ci';
import { IoIosHeartEmpty, IoIosSearch } from 'react-icons/io';
import { PiTruckLight } from 'react-icons/pi';

import AvatarContainer from './components/avatarContainer';
import type { AvatarProps } from './helpers/types';

export default function HomepageView() {
  const avatars: Array<AvatarProps> = [
    {
      imageSrc: 'https://github.com/shadcn.png',
      fallback: 'CN',
    },
    {
      imageSrc: 'https://github.com/shadcn.png',
      fallback: 'CN',
    },
    {
      imageSrc: 'https://github.com/shadcn.png',
      fallback: 'CN',
    },
    {
      imageSrc: 'https://github.com/shadcn.png',
      fallback: 'CN',
    },
    {
      imageSrc: 'https://github.com/shadcn.png',
      fallback: 'CN',
    },
    {
      imageSrc: 'https://github.com/shadcn.png',
      fallback: 'CN',
    },
    {
      imageSrc: 'https://github.com/shadcn.png',
      fallback: 'CN',
    },
  ];
  return (
    <div className="container mx-auto pt-20">
      <div className="mb-8 w-3/5">
        <h1 className="mb-3 text-[40px] leading-[45px]">Choose your preferred skip size now</h1>
        <p className="mb-6">Select the skip size that best suits your needs</p>
        <div className="flex items-center space-x-2">
          <AvatarContainer avatars={avatars} />
          <p className="text-sm italic text-gray-500">Trusted by more than 100,000 customers worldwide.</p>
        </div>
      </div>
      <div className="bg-orange-60 mb-10 flex items-center space-x-10">
        <div className="flex w-1/4 items-center space-x-4">
          <div className="flex w-fit cursor-pointer items-center space-x-2 rounded-md border border-solid border-gray-400 px-4 py-2 duration-300 hover:bg-gray-300">
            <p>Filter</p>
            <BsFilterLeft size={20} />
          </div>
          <p>34 of 43 products</p>
        </div>
        <div className="flex w-3/4 justify-between">
          <div className="flex w-fit items-center space-x-3 border-b-2 pb-2 pr-12">
            <label htmlFor="search">
              <IoIosSearch size={20} />
            </label>
            <input id="search" type="text" placeholder="What are you looking for ?" className="focus:outline-none" />
          </div>
          <div className="flex items-center space-x-12">
            <div className="flex cursor-pointer items-center space-x-2 rounded-sm px-4 py-2 duration-300 hover:bg-gray-200">
              <p className="text-[#353535]">Favourites</p>
              <IoIosHeartEmpty />
            </div>
            <div className="flex cursor-pointer items-center space-x-2 rounded-sm px-4 py-2 duration-300 hover:bg-gray-200">
              <p className="text-[#353535]">List</p>
              <CiCircleList size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start space-x-10">
        <div className="w-1/4">
          <h1 className="mb-2">Filter</h1>
          <p className="text-sm italic">Choose your preferred type of service</p>
          <div className="pt-4">
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-2">
                <PiTruckLight size={30} />
                <p className="text-lg">Allowed on Road</p>
              </div>
              <input type="checkbox" className="size-5" />
            </div>
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-2">
                <PiTruckLight size={30} />
                <p className="text-lg">Allowed on Road</p>
              </div>
              <input type="checkbox" className="size-5" />
            </div>
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-2">
                <PiTruckLight size={30} />
                <p className="text-lg">Allowed on Road</p>
              </div>
              <input type="checkbox" className="size-5" />
            </div>
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-2">
                <PiTruckLight size={30} />
                <p className="text-lg">Allowed on Road</p>
              </div>
              <input type="checkbox" className="size-5" />
            </div>
          </div>
        </div>
        <div className="flex w-3/4">xas</div>
      </div>
    </div>
  );
}
