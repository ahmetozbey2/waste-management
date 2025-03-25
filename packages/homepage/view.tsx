'use client';

import * as React from 'react';
import { BsFilterLeft } from 'react-icons/bs';
import { CiCircleList } from 'react-icons/ci';
import { IoIosHeartEmpty, IoIosSearch } from 'react-icons/io';

import AvatarContainer from './components/avatarContainer';
import Card from './components/card';
import { DetailModal } from './components/detailModal';
import Filter from './components/filter';
import type { AvatarProps, SkipDetails } from './helpers/types';

export default function HomepageView() {
  type ActionType =
    | { type: 'SET_ALLOWS_HEAVY_WASTE_VAL'; payload: boolean }
    | { type: 'SET_ALLOWED_ON_ROAD'; payload: boolean }
    | { type: 'SET_MIN_VALUE'; payload: number }
    | { type: 'SET_MAX_VALUE'; payload: number };

  // Initial state interface
  interface FilterState {
    allows_heavy_waste: boolean;
    allowed_on_road: boolean;
    minValue: number;
    maxValue: number;
  }

  // Reducer function
  function filterReducer(state: FilterState, action: ActionType): FilterState {
    switch (action.type) {
      case 'SET_ALLOWS_HEAVY_WASTE_VAL':
        return { ...state, allows_heavy_waste: action.payload };
      case 'SET_ALLOWED_ON_ROAD':
        return { ...state, allowed_on_road: action.payload };
      case 'SET_MIN_VALUE':
        return { ...state, minValue: action.payload };
      case 'SET_MAX_VALUE':
        return { ...state, maxValue: action.payload };
      default:
        return state;
    }
  }

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

  const [showModal, setShowModal] = React.useState(false);
  const [showDrawer, setShowDrawer] = React.useState(false);
  const [isFilterSectionOpen, setIsSectionFilterOpen] = React.useState(true);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedSkipData, setSelectedSkipData] = React.useState<SkipDetails>(sampleData[0]);
  const [openedSkipData, setOpenedSkipData] = React.useState<SkipDetails>(sampleData[0]);
  const initialState: FilterState = {
    allows_heavy_waste: false,
    allowed_on_road: false,
    minValue: 0,
    maxValue: 0,
  };
  const [state, dispatch] = React.useReducer(filterReducer, initialState);
  const filteredResults = sampleData
    .filter((data) => {
      // allows_heavy_waste sadece true ise filtre uygula
      return state.allows_heavy_waste ? data.allows_heavy_waste === true : true;
    })
    .filter((data) => {
      // isAllowed sadece true ise filtre uygula
      return state.allowed_on_road ? data.allowed_on_road === true : true;
    })
    .filter((data) => {
      return state.minValue ? data.size > state.minValue : true;
    })
    .filter((data) => {
      return state.maxValue ? data.size < state.maxValue : true;
    })
    .filter((data) => {
      const lowerSearch = searchTerm.toLowerCase();
      return (
        data.postcode?.toLowerCase().includes(lowerSearch) ||
        data.size.toString().includes(lowerSearch) ||
        data.price_before_vat.toString().includes(lowerSearch) ||
        data.size.toString().includes(lowerSearch)
      );
    });
  const onClickViewDetails = (skipData: SkipDetails) => {
    setOpenedSkipData(skipData);
    setShowModal(true);
  };

  const onSelectCard = (skipData: SkipDetails) => {
    setSelectedSkipData(skipData);
    setShowDrawer(true);
  };
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
        {isFilterSectionOpen && (
          <Filter
            isAllowed={state.allowed_on_road}
            setIsAllowed={(val) =>
              dispatch({
                type: 'SET_ALLOWED_ON_ROAD',
                payload: typeof val === 'function' ? val(state.allowed_on_road) : val,
              })
            }
            allows_heavy_waste={state.allows_heavy_waste}
            onAllowsHeavyWasteValChange={(val) =>
              dispatch({
                type: 'SET_ALLOWS_HEAVY_WASTE_VAL',
                payload: typeof val === 'function' ? val(state.allows_heavy_waste) : val,
              })
            }
            minValue={state.minValue}
            setMinValue={(val) =>
              dispatch({
                type: 'SET_MIN_VALUE',
                payload: typeof val === 'function' ? val(state.minValue) : val,
              })
            }
            maxValue={state.maxValue}
            setMaxValue={(val) =>
              dispatch({
                type: 'SET_MAX_VALUE',
                payload: typeof val === 'function' ? val(state.maxValue) : val,
              })
            }
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
            <div className="flex cursor-pointer items-center space-x-2 rounded-sm py-2 duration-300 hover:bg-gray-200 sm:px-4">
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

      <div className="flex flex-col items-start sm:space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0">
        {isFilterSectionOpen && (
          <Filter
            isAllowed={state.allowed_on_road}
            setIsAllowed={(val) =>
              dispatch({
                type: 'SET_ALLOWED_ON_ROAD',
                payload: typeof val === 'function' ? val(state.allowed_on_road) : val,
              })
            }
            allows_heavy_waste={state.allows_heavy_waste}
            onAllowsHeavyWasteValChange={(val) =>
              dispatch({
                type: 'SET_ALLOWS_HEAVY_WASTE_VAL',
                payload: typeof val === 'function' ? val(state.allows_heavy_waste) : val,
              })
            }
            minValue={state.minValue}
            setMinValue={(val) =>
              dispatch({
                type: 'SET_MIN_VALUE',
                payload: typeof val === 'function' ? val(state.minValue) : val,
              })
            }
            maxValue={state.maxValue}
            setMaxValue={(val) =>
              dispatch({
                type: 'SET_MAX_VALUE',
                payload: typeof val === 'function' ? val(state.maxValue) : val,
              })
            }
            className="animate-slideTop max-sm:hidden"
          />
        )}

        <div className={`flex w-full pb-40 ${isFilterSectionOpen ? 'lg:w-3/4' : 'lg:w-full'} `}>
          <div className="flex w-full grid-cols-1 gap-4 max-sm:flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3">
            <Card
              description="Book online with transparent pricing and assured loading every time."
              tags={['Waste Logistics', 'Transport', 'Intermodal Waste Logistics']}
              hasImage
              skipDetails={customSkipDetail}
              onClickViewDetails={() => onClickViewDetails(customSkipDetail)}
              onSelect={() => onSelectCard(customSkipDetail)}
            />
            {filteredResults.map((data, i) => (
              <Card
                key={data.id || i}
                description="Book online with transparent pricing and assured loading every time."
                tags={['Waste Logistics', 'Transport']}
                hasImage={false}
                skipDetails={data}
                onClickViewDetails={() => onClickViewDetails(data)}
                onSelect={() => onSelectCard(data)}
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
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-end gap-2">
              <p className="text-3xl font-bold">£{selectedSkipData.price_before_vat}</p>
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
