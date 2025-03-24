import * as React from 'react';
import { BsShieldLock } from 'react-icons/bs';
import { IoResize } from 'react-icons/io5';
import { PiTruckLight } from 'react-icons/pi';

import { cn } from '@/lib/utils';

import { CheckboxRow } from './checkboxRow';
import { RangeInputRow } from './rangeInputRow';

export interface FilterProps {
  className?: string;
  privateVal: boolean;
  onPrivateValChange: React.Dispatch<React.SetStateAction<boolean>>;
  isAllowed: boolean;
  setIsAllowed: React.Dispatch<React.SetStateAction<boolean>>;
  minValue: number;
  setMinValue: React.Dispatch<React.SetStateAction<number>>;
  maxValue: number;
  setMaxValue: React.Dispatch<React.SetStateAction<number>>;
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
  privateVal,
  onPrivateValChange,
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
        checked={privateVal}
        onChange={onPrivateValChange}
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
