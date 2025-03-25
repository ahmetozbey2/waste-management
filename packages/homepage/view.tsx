'use client';

import * as React from 'react';
import { BsFilterLeft } from 'react-icons/bs';
import { CiCalendarDate, CiCircleList } from 'react-icons/ci';
import { IoIosHeartEmpty, IoIosSearch } from 'react-icons/io';
import { LuMapPin, LuShield } from 'react-icons/lu';
import { MdOutlinePayments } from 'react-icons/md';
import { PiTruckLight } from 'react-icons/pi';
import { RiDeleteBin5Line } from 'react-icons/ri';

import { useFavoritesStore } from '../../store/favoritesState';
import { useFilterStore } from '../../store/filtersState';
import { useViewState } from '../../store/viewState';
import AvatarContainer from './components/avatarContainer';
import Card from './components/card';
import { DetailModal } from './components/detailModal';
import Filter from './components/filter';
import SteppedProgress from './components/steppedProgress';
import type { AvatarProps, SkipDetails, Step } from './helpers/types';
import { useSkipsByLocation } from './helpers/useSkipByLocation';

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
export default function HomepageView() {
  const { data, isLoading } = useSkipsByLocation('NR32', 'Lowestoft');

  const [hasHydrated, setHasHydrated] = React.useState(false);
  React.useEffect(() => {
    setHasHydrated(true);
  }, []);

  const customSkipDetail: SkipDetails = {
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
  const [selectedSkipData, setSelectedSkipData] = React.useState<SkipDetails | null>(null);
  const [openedSkipData, setOpenedSkipData] = React.useState<SkipDetails | null>(null);

  const { viewState, setViewState } = useViewState();
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
  const [filteredResults, setFilteredResults] = React.useState<SkipDetails[] | null>(null);
  const [isFavoriteSelected, setIsFavoriteSelected] = React.useState(false);
  const { favorites } = useFavoritesStore();
  React.useEffect(() => {
    if (!data) return;
    const results = data
      .filter((d) => (allows_heavy_waste ? d.allows_heavy_waste === true : true))
      .filter((d) => (allowed_on_road ? d.allowed_on_road === true : true))
      .filter((d) => (minValue ? d.size >= minValue : true))
      .filter((d) => (maxValue ? d.size <= maxValue : true))
      .filter((d) => (isFavoriteSelected ? favorites.some((fav) => fav.id === d.id) : true))
      .filter((d) => {
        const lowerSearch = searchTerm.toLowerCase();
        return (
          d.postcode?.toLowerCase().includes(lowerSearch) ||
          d.size.toString().includes(lowerSearch) ||
          d.price_before_vat.toString().includes(lowerSearch)
        );
      });
    setFilteredResults(results);
    setSelectedSkipData(results[0] || null);
    setOpenedSkipData(results[0] || null);
  }, [searchTerm, isFavoriteSelected, favorites, data, allowed_on_road, allows_heavy_waste, minValue, maxValue]);

  const onClickViewDetails = (skipData: SkipDetails) => {
    setShowDrawer(false);
    setOpenedSkipData(skipData);
    setShowModal(true);
  };

  const onSelectCard = (skipData: SkipDetails) => {
    setSelectedSkipData(skipData);
    setShowDrawer(true);
  };
  const currentStep = 2;
  const steps: Array<Step> = [
    {
      name: 'Postcode',
      icon: <LuMapPin size={30} className={`w-10 ${currentStep >= 0 && 'text-blue-700'}`} />,
    },
    {
      name: 'Waste Type',
      icon: <RiDeleteBin5Line size={30} className={`w-14 ${currentStep >= 1 && 'fill-blue-700'}`} />,
    },
    {
      name: 'Select Skip',
      icon: <PiTruckLight size={30} className={`w-14 ${currentStep >= 2 && 'fill-blue-700'}`} />,
    },
    {
      name: 'Permit Check',
      icon: <LuShield size={35} className={`w-14 ${currentStep >= 3 ? 'fill-blue-700' : 'text-gray-500'}`} />,
    },
    {
      name: 'Choose Data',
      icon: <CiCalendarDate size={30} className={`w-14 ${currentStep >= 4 ? 'fill-blue-700' : 'text-gray-500'}`} />,
    },
    {
      name: 'Payment',
      icon: <MdOutlinePayments size={20} className={` ${currentStep >= 5 ? 'fill-blue-700' : 'text-gray-400'}`} />,
    },
  ];
  return (
    <div className="container mx-auto px-4 pt-12">
      <SteppedProgress steps={steps} activeStep={2} />

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

      <div className="mb-10 flex flex-col space-y-4 lg:flex-row lg:items-center  lg:space-y-0">
        <div className="flex w-full items-center space-x-4 md:w-1/2 lg:w-1/4">
          <div
            onClick={() => setIsSectionFilterOpen((prev) => !prev)}
            className="flex w-fit cursor-pointer items-center space-x-2 rounded-md border border-solid border-gray-400 px-4 py-2 duration-300 hover:bg-gray-300">
            <p>Filter</p>
            <BsFilterLeft size={20} />
          </div>

          <p className="text-sm">
            {filteredResults?.length} of {data?.length} products
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
              className={`flex cursor-pointer items-center space-x-2 rounded-sm px-4 py-2 duration-300 hover:bg-gray-200 ${isFavoriteSelected && 'bg-gray-200'}`}
              onClick={() => setIsFavoriteSelected((prev) => !prev)}>
              <p className="text-[#353535]">Favourites</p>
              <IoIosHeartEmpty className="cursor-pointer" />
            </div>
            <div
              onClick={() => setViewState(viewState == 'List' ? 'Grid' : 'List')}
              className={`flex cursor-pointer items-center space-x-2 rounded-sm px-4 py-2 duration-300 hover:bg-gray-200 ${viewState == 'List' && 'bg-gray-200'}`}>
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
        {!data || isLoading ? (
          <div />
        ) : (
          <div className={`flex w-full animate-slideTop pb-40 ${isFilterSectionOpen ? 'lg:w-3/4' : 'lg:w-full'} `}>
            <div
              className={`flex w-full ${viewState == 'Grid' ? 'grid-cols-1 gap-4 max-sm:flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3' : 'flex-col gap-y-2'} `}>
              {hasHydrated && (
                <Card
                  description="Book online with transparent pricing and assured loading every time."
                  tags={['Waste Logistics', 'Transport', 'Intermodal Waste Logistics']}
                  hasImage
                  skipDetails={customSkipDetail}
                  onClickViewDetails={() => onClickViewDetails(customSkipDetail)}
                  onSelect={() => onSelectCard(customSkipDetail)}
                  data={customSkipDetail}
                  viewType={viewState}
                />
              )}
              {hasHydrated &&
                filteredResults?.map((data, i) => (
                  <Card
                    key={data.id || i}
                    description="Book online with transparent pricing and assured loading every time."
                    tags={['Waste Logistics', 'Transport']}
                    hasImage={false}
                    skipDetails={data}
                    onClickViewDetails={() => onClickViewDetails(data)}
                    onSelect={() => onSelectCard(data)}
                    data={data}
                    viewType={viewState}
                  />
                ))}
            </div>
          </div>
        )}
        <DetailModal
          skipDetails={openedSkipData as SkipDetails}
          tags={['Waste Logistics', 'Transport']}
          showModal={showModal}
          setShowModal={setShowModal}
          onSelect={() => onSelectCard(openedSkipData as SkipDetails)}
        />
      </div>
      {showDrawer && (
        <div className="fixed bottom-0 left-0 w-screen animate-slideTop border-t-2 border-solid border-gray-200 bg-white py-4">
          <div className="container mx-auto flex items-center justify-between max-sm:flex-col max-sm:items-start max-sm:gap-2">
            <div className="flex items-end gap-2">
              <p className="text-3xl font-bold">
                {selectedSkipData?.id != 0 ? `£${selectedSkipData?.price_before_vat}` : 'Ask for Price'}
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
