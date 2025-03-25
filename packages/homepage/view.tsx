'use client';

import * as React from 'react';
import { BsFilterLeft } from 'react-icons/bs';
import { CiCircleList } from 'react-icons/ci';
import { IoIosHeartEmpty, IoIosSearch } from 'react-icons/io';

import { useFavoritesStore } from '../../store/favoritesState';
import { useFilterStore } from '../../store/filtersState';
import AvatarContainer from './components/avatarContainer';
import Card from './components/card';
import { DetailModal } from './components/detailModal';
import Filter from './components/filter';
import type { AvatarProps, SkipDetails } from './helpers/types';

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
export default function HomepageView() {
  const avatars: Array<AvatarProps> = [
    {
      imageSrc: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg',
      fallback: '',
    },
    {
      imageSrc: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-6.jpg',
      fallback: '',
    },
    {
      imageSrc: 'https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png',
      fallback: '',
    },
    {
      imageSrc: 'https://www.svgrepo.com/show/382106/male-avatar-boy-face-man-user-9.svg',
      fallback: '',
    },
    {
      imageSrc:
        'https://static.vecteezy.com/system/resources/previews/019/896/012/non_2x/female-user-avatar-icon-in-flat-design-style-person-signs-illustration-png.png',
      fallback: '',
    },
    {
      imageSrc:
        'https://img.freepik.com/premium-vector/man-avatar-profile-picture-isolated-background-avatar-profile-picture-man_1293239-4841.jpg',
      fallback: '',
    },
    {
      imageSrc: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-5.jpg',
      fallback: '',
    },
  ];

  const customSkipDetail = {
    id: 0,
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

  const [showModal, setShowModal] = React.useState(false);
  const [showDrawer, setShowDrawer] = React.useState(false);
  const [isFilterSectionOpen, setIsSectionFilterOpen] = React.useState(true);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedSkipData, setSelectedSkipData] = React.useState<SkipDetails>(sampleData[0]);
  const [openedSkipData, setOpenedSkipData] = React.useState<SkipDetails>(sampleData[0]);
  const {
    allows_heavy_waste,
    allowed_on_road,
    minValue,
    maxValue,
    setAllowsHeavyWaste,
    setAllowedOnRoad,
    setMinValue,
    setMaxValue,
  } = useFilterStore();
  const [filteredResults, setFilteredResults] = React.useState<SkipDetails[]>(sampleData);
  const [isFavoriteSelected, setIsFavoriteSelected] = React.useState(false);
  const { favorites } = useFavoritesStore();
  React.useEffect(() => {
    const results = sampleData
      .filter((data) => (allows_heavy_waste ? data.allows_heavy_waste === true : true))
      .filter((data) => (allowed_on_road ? data.allowed_on_road === true : true))
      .filter((data) => (minValue ? data.size >= minValue : true))
      .filter((data) => (maxValue ? data.size <= maxValue : true))
      .filter((data) => (isFavoriteSelected ? favorites.some((fav) => fav.id === data.id) : true))
      .filter((data) => {
        const lowerSearch = searchTerm.toLowerCase();
        return (
          data.postcode?.toLowerCase().includes(lowerSearch) ||
          data.size.toString().includes(lowerSearch) ||
          data.price_before_vat.toString().includes(lowerSearch)
        );
      });

    setFilteredResults(results);
  }, [searchTerm, isFavoriteSelected, favorites, sampleData, allowed_on_road, allows_heavy_waste, minValue, maxValue]);

  const onClickViewDetails = (skipData: SkipDetails) => {
    setShowDrawer(false);
    setOpenedSkipData(skipData);
    setShowModal(true);
  };

  const onSelectCard = (skipData: SkipDetails) => {
    setSelectedSkipData(skipData);
    setShowDrawer(true);
  };

  const [hasHydrated, setHasHydrated] = React.useState(false);

  React.useEffect(() => {
    setHasHydrated(true);
  }, []);

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

      <div className="mb-10 flex flex-col space-y-4 lg:flex-row lg:items-center lg:space-x-10 lg:space-y-0">
        <div className="flex w-full items-center space-x-4 md:w-1/2 lg:w-1/4">
          <div
            onClick={() => setIsSectionFilterOpen((prev) => !prev)}
            className="flex w-fit cursor-pointer items-center space-x-2 rounded-md border border-solid border-gray-400 px-4 py-2 duration-300 hover:bg-gray-300">
            <p>Filter</p>
            <BsFilterLeft size={20} />
          </div>

          <p className="text-sm">
            {filteredResults.length} of {sampleData.length} products
          </p>
        </div>
        {isFilterSectionOpen && hasHydrated && (
          <Filter
            isAllowed={allowed_on_road}
            setIsAllowed={setAllowedOnRoad}
            allows_heavy_waste={allows_heavy_waste}
            onAllowsHeavyWasteValChange={setAllowsHeavyWaste}
            minValue={minValue}
            setMinValue={setMinValue}
            maxValue={maxValue}
            setMaxValue={setMaxValue}
            className="animate-slideTop sm:hidden"
          />
        )}
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
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
          </div>
          <div className="flex items-center space-x-4 md:space-x-6">
            <div
              className={`flex cursor-pointer items-center space-x-2 rounded-sm py-2 duration-300 hover:bg-gray-200 sm:px-4 ${isFavoriteSelected && 'bg-gray-200'}`}
              onClick={() => setIsFavoriteSelected((prev) => !prev)}>
              <p className="text-[#353535]">Favourites</p>
              <IoIosHeartEmpty className="cursor-pointer" />
            </div>
            <div className="flex cursor-pointer items-center space-x-2 rounded-sm px-4 py-2 duration-300 hover:bg-gray-200">
              <p className="text-[#353535]">List</p>
              <CiCircleList size={20} />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start sm:space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0">
        {isFilterSectionOpen && hasHydrated && (
          <Filter
            isAllowed={allowed_on_road}
            setIsAllowed={setAllowedOnRoad}
            allows_heavy_waste={allows_heavy_waste}
            onAllowsHeavyWasteValChange={setAllowsHeavyWaste}
            minValue={minValue}
            setMinValue={setMinValue}
            maxValue={maxValue}
            setMaxValue={setMaxValue}
            className="animate-slideTop max-sm:hidden"
          />
        )}

        <div className={`flex w-full pb-40 ${isFilterSectionOpen ? 'lg:w-3/4' : 'lg:w-full'} `}>
          <div className="flex w-full grid-cols-1 gap-4 max-sm:flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {hasHydrated && (
              <Card
                description="Book online with transparent pricing and assured loading every time."
                tags={['Waste Logistics', 'Transport', 'Intermodal Waste Logistics']}
                hasImage
                skipDetails={customSkipDetail}
                onClickViewDetails={() => onClickViewDetails(customSkipDetail)}
                onSelect={() => onSelectCard(customSkipDetail)}
                data={customSkipDetail}
              />
            )}
            {hasHydrated &&
              filteredResults.map((data, i) => (
                <Card
                  key={data.id || i}
                  description="Book online with transparent pricing and assured loading every time."
                  tags={['Waste Logistics', 'Transport']}
                  hasImage={false}
                  skipDetails={data}
                  onClickViewDetails={() => onClickViewDetails(data)}
                  onSelect={() => onSelectCard(data)}
                  data={data}
                />
              ))}
          </div>
        </div>

        <DetailModal
          skipDetails={openedSkipData}
          tags={['Waste Logistics', 'Transport']}
          showModal={showModal}
          setShowModal={setShowModal}
          onSelect={() => onSelectCard(openedSkipData)}
        />
      </div>
      {showDrawer && (
        <div className="fixed bottom-0 left-0 w-screen animate-slideTop border-t-2 border-solid border-gray-200 bg-white py-4">
          <div className="container mx-auto flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-2">
            <div className="flex items-end gap-2">
              <p className="text-3xl font-bold">
                {selectedSkipData.id != 0 ? `£${selectedSkipData.price_before_vat}` : 'Ask for Price'}
              </p>
              <p>per week</p>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowDrawer(false)}
                className="rounded-md bg-sky-950 px-4 py-2 text-sm text-white duration-300 hover:bg-sky-900">
                Back
              </button>
              <button className="rounded-md border border-solid border-gray-400 px-4 py-2 text-sm duration-300 hover:bg-gray-200">
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
