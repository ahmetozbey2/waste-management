import * as React from 'react';
import { BsFilterLeft } from 'react-icons/bs';
import { CiCircleList } from 'react-icons/ci';
import { IoIosHeartEmpty, IoIosSearch } from 'react-icons/io';
import { PiTruckLight } from 'react-icons/pi';

import AvatarContainer from './components/avatarContainer';
import Card from './components/card';
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

  const sampleData = [
    {
      id: 11554,
      size: 4,
      hire_period_days: 14,
      transport_cost: null,
      per_tonne_cost: null,
      price_before_vat: 311,
      vat: 20,
      postcode: 'NR32',
      area: null,
      forbidden: false,
      created_at: '2021-04-06T17:04:42',
      updated_at: '2024-04-02T09:22:38',
      allowed_on_road: true,
      allows_heavy_waste: true,
    },
    {
      id: 11555,
      size: 6,
      hire_period_days: 14,
      transport_cost: null,
      per_tonne_cost: null,
      price_before_vat: 342,
      vat: 20,
      postcode: 'NR32',
      area: null,
      forbidden: false,
      created_at: '2021-04-06T17:04:42',
      updated_at: '2024-04-02T09:22:38',
      allowed_on_road: true,
      allows_heavy_waste: true,
    },
    {
      id: 11556,
      size: 8,
      hire_period_days: 14,
      transport_cost: null,
      per_tonne_cost: null,
      price_before_vat: 420,
      vat: 20,
      postcode: 'NR32',
      area: null,
      forbidden: false,
      created_at: '2021-04-06T17:04:42',
      updated_at: '2024-04-02T09:22:38',
      allowed_on_road: true,
      allows_heavy_waste: true,
    },
    {
      id: 11557,
      size: 10,
      hire_period_days: 14,
      transport_cost: null,
      per_tonne_cost: null,
      price_before_vat: 448,
      vat: 20,
      postcode: 'NR32',
      area: null,
      forbidden: false,
      created_at: '2021-04-06T17:04:42',
      updated_at: '2024-04-02T09:22:38',
      allowed_on_road: false,
      allows_heavy_waste: false,
    },
    {
      id: 11558,
      size: 12,
      hire_period_days: 14,
      transport_cost: null,
      per_tonne_cost: null,
      price_before_vat: 491,
      vat: 20,
      postcode: 'NR32',
      area: null,
      forbidden: false,
      created_at: '2021-04-06T17:04:42',
      updated_at: '2024-04-02T09:22:38',
      allowed_on_road: false,
      allows_heavy_waste: false,
    },
    {
      id: 11559,
      size: 14,
      hire_period_days: 14,
      transport_cost: null,
      per_tonne_cost: null,
      price_before_vat: 527,
      vat: 20,
      postcode: 'NR32',
      area: null,
      forbidden: false,
      created_at: '2021-04-06T17:04:42',
      updated_at: '2024-04-02T09:22:38',
      allowed_on_road: false,
      allows_heavy_waste: false,
    },
    {
      id: 11560,
      size: 16,
      hire_period_days: 14,
      transport_cost: null,
      per_tonne_cost: null,
      price_before_vat: 556,
      vat: 20,
      postcode: 'NR32',
      area: null,
      forbidden: false,
      created_at: '2021-04-06T17:04:42',
      updated_at: '2024-04-02T09:22:38',
      allowed_on_road: false,
      allows_heavy_waste: false,
    },
    {
      id: 11561,
      size: 20,
      hire_period_days: 14,
      transport_cost: 236,
      per_tonne_cost: 236,
      price_before_vat: 944,
      vat: 20,
      postcode: 'NR32',
      area: null,
      forbidden: false,
      created_at: '2021-04-06T17:04:42',
      updated_at: '2024-04-02T09:22:38',
      allowed_on_road: false,
      allows_heavy_waste: true,
    },
    {
      id: 11562,
      size: 40,
      hire_period_days: 14,
      transport_cost: 236,
      per_tonne_cost: 236,
      price_before_vat: 944,
      vat: 20,
      postcode: 'NR32',
      area: null,
      forbidden: false,
      created_at: '2021-04-06T17:04:42',
      updated_at: '2024-04-02T09:22:38',
      allowed_on_road: false,
      allows_heavy_waste: false,
    },
  ];

  const customSkipDetail = {
    id: 11562,
    size: 40,
    hire_period_days: 14,
    transport_cost: 236,
    per_tonne_cost: 236,
    price_before_vat: 944,
    vat: 20,
    postcode: 'NR32',
    area: null,
    forbidden: false,
    created_at: '2021-04-06T17:04:42',
    updated_at: '2024-04-02T09:22:38',
    allowed_on_road: false,
    allows_heavy_waste: false,
  };
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
        <div className="flex w-3/4">
          <div className="grid w-full grid-cols-3  gap-4">
            <Card
              description="Book online with transparent pricing and assured loading every time."
              tags={['Waste Logistics', 'Transport']}
              hasImage
              skipDetails={customSkipDetail}
            />
            {sampleData.map((data, i) => {
              return (
                <Card
                  description="Book online with transparent pricing and assured loading every time."
                  tags={['Waste Logistics', 'Transport']}
                  hasImage={false}
                  skipDetails={data}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
