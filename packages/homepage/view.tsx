'use client';

import * as React from 'react';
import { BsFilterLeft } from 'react-icons/bs';
import { CiCircleList } from 'react-icons/ci';
import { IoIosHeartEmpty, IoIosSearch } from 'react-icons/io';
import { PiTruckLight } from 'react-icons/pi';

import AvatarContainer from './components/avatarContainer';
import Card from './components/card';
import { DetailModal } from './components/detailModal';
import type { AvatarProps, SkipDetails } from './helpers/types';

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

  const [selectedSkipData, setSelectedSkipData] = React.useState<SkipDetails>(sampleData[0]);
  const onSelectCard = (skipData: SkipDetails) => {
    setSelectedSkipData(skipData);
    setShowModal(true);
  };
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div className="container mx-auto px-4 pt-20">
      <div className="mb-8 w-full md:w-4/5 lg:w-3/5">
        <h1 className="mb-3 text-3xl leading-tight md:text-[40px] md:leading-[45px]">
          Choose your preferred skip size now
        </h1>
        <p className="mb-6">Select the skip size that best suits your needs</p>
        <div className="flex flex-col space-y-2 sm:flex-row sm:items-center sm:space-x-2 sm:space-y-0">
          <AvatarContainer avatars={avatars} />
          <p className="text-sm italic text-gray-500">Trusted by more than 100,000 customers worldwide.</p>
        </div>
      </div>

      <div className="bg-orange-60 mb-10 flex flex-col space-y-4 lg:flex-row lg:items-center lg:space-x-10 lg:space-y-0">
        <div className="flex w-full items-center space-x-4 md:w-1/2 lg:w-1/4">
          <div className="flex w-fit cursor-pointer items-center space-x-2 rounded-md border border-solid border-gray-400 px-4 py-2 duration-300 hover:bg-gray-300">
            <p>Filter</p>
            <BsFilterLeft size={20} />
          </div>
          <p className="text-sm">34 of 43 products</p>
        </div>

        <div className="flex w-full flex-col space-y-4 md:w-1/2 md:flex-row md:justify-between md:space-y-0 lg:w-3/4">
          <div className="flex w-full items-center space-x-3 border-b-2 pb-2 pr-0 md:w-auto md:pr-12">
            <label htmlFor="search">
              <IoIosSearch size={20} />
            </label>
            <input
              id="search"
              type="text"
              placeholder="What are you looking for ?"
              className="w-full focus:outline-none"
            />
          </div>
          <div className="flex items-center space-x-4 md:space-x-6">
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

      <div className="flex flex-col items-start space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0">
        <div className="w-full lg:w-1/4">
          <h1 className="mb-2">Filter</h1>
          <p className="text-sm italic">Choose your preferred type of service</p>
          <div className="space-y-2 pt-4">
            <div className="flex items-center justify-between py-1">
              <div className="flex items-center space-x-2">
                <PiTruckLight size={30} />
                <p className="text-lg">Allowed on Road</p>
              </div>
              <input type="checkbox" className="size-5" />
            </div>
            <div className="flex items-center justify-between py-1">
              <div className="flex items-center space-x-2">
                <PiTruckLight size={30} />
                <p className="text-lg">Private Property Only</p>
              </div>
              <input type="checkbox" className="size-5" />
            </div>
          </div>
        </div>

        <div className="flex w-full pb-40 lg:w-3/4">
          <div className="flex w-full grid-cols-1 gap-4 max-sm:flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3">
            <Card
              description="Book online with transparent pricing and assured loading every time."
              tags={['Waste Logistics', 'Transport', 'Intermodal Waste Logistics']}
              hasImage
              skipDetails={customSkipDetail}
              onClickViewDetails={() => onSelectCard(customSkipDetail)}
            />
            {sampleData.map((data, i) => (
              <Card
                key={data.id || i}
                description="Book online with transparent pricing and assured loading every time."
                tags={['Waste Logistics', 'Transport']}
                hasImage={false}
                skipDetails={data}
                onClickViewDetails={() => onSelectCard(data)}
              />
            ))}
          </div>
        </div>

        <DetailModal
          skipDetails={selectedSkipData}
          tags={['Waste Logistics', 'Transport']}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </div>
    </div>
  );
}
