import * as React from 'react';
import { BsShieldLock } from 'react-icons/bs';
import { IoResize } from 'react-icons/io5';
import { PiTruckLight } from 'react-icons/pi';

import { cn } from '@/lib/utils';

import { CheckboxRow } from './checkboxRow';
import { RangeInputRow } from './rangeInputRow';

export interface FilterProps {
  className?: string;
  allows_heavy_waste: boolean;
  onAllowsHeavyWasteValChange: (value: boolean) => void;
  isAllowed: boolean;
  setIsAllowed: (value: boolean) => void;
  minValue: number;
  setMinValue: (value: number) => void;
  maxValue: number;
  setMaxValue: (value: number) => void;
}

/**
 * Renders the main filter panel with various filter options.
 */
export default function Filter({
  minValue,
  setMinValue,
  maxValue,
  setMaxValue,
  className,
  allows_heavy_waste,
  onAllowsHeavyWasteValChange,
  isAllowed,
  setIsAllowed,
}: FilterProps) {
  return (
    <div className={cn(className, 'space-y-2')}>
      <h1 className="mb-2">Filter</h1>
      <p className="text-sm italic">Choose your preferred type of service</p>
      <CheckboxRow
        checked={isAllowed}
        onChange={setIsAllowed}
        label="Allowed on Road"
        icon={<PiTruckLight size={30} />}
      />
      <CheckboxRow
        label="Private Property Only"
        icon={<BsShieldLock size={25} />}
        checked={allows_heavy_waste}
        onChange={onAllowsHeavyWasteValChange}
      />
      <RangeInputRow
        minValue={minValue}
        setMinValue={setMinValue}
        maxValue={maxValue}
        setMaxValue={setMaxValue}
        label="Size"
        icon={<IoResize size={30} />}
      />
    </div>
  );
}
