import * as React from 'react';
import { PiTruckLight } from 'react-icons/pi';

import { cn } from '@/lib/utils';

/**
 * Props for the `CheckboxRow` component.
 */
interface CheckboxRowProps {
  label: string;
  icon?: React.ReactNode;
}

/**
 * A reusable row with an icon, label, and checkbox.
 */
const CheckboxRow: React.FC<CheckboxRowProps> = ({ label, icon }) => (
  <div className="flex items-center justify-between py-1">
    <div className="flex items-center space-x-2">
      {icon}
      <p className="sm:text-lg">{label}</p>
    </div>
    <input type="checkbox" className="size-5" />
  </div>
);

/**
 * Props for the `RangeInputRow` component.
 */
interface RangeInputRowProps {
  label: string;
  icon?: React.ReactNode;
  placeholderMin?: string;
  placeholderMax?: string;
}

/**
 * A reusable row with an icon, label, and two numeric input fields.
 */
const RangeInputRow: React.FC<RangeInputRowProps> = ({
  label,
  icon,
  placeholderMin = 'Min',
  placeholderMax = 'Max',
}) => (
  <div className="flex items-center justify-between py-1">
    <div className="flex items-center space-x-2">
      {icon}
      <p className="sm:text-lg">{label}</p>
    </div>
    <div className="flex items-center gap-3">
      <input
        type="number"
        className="h-8 w-16 rounded-sm border border-gray-300 pl-2"
        placeholder={placeholderMin}
        min={0}
      />
      <input
        type="number"
        className="h-8 w-16 rounded-sm border border-gray-300 pl-2"
        placeholder={placeholderMax}
        min={0}
      />
    </div>
  </div>
);

/**
 * Main application component.
 */
export interface FilterProps {
  className?: string;
}

/**
 * Renders the main filter panel with various filter options.
 */
export default function Filter({ className }: FilterProps) {
  return (
    <div className={cn(className, 'space-y-2')}>
      <h1 className="mb-2">Filter</h1>
      <p className="text-sm italic">Choose your preferred type of service</p>
      <CheckboxRow label="Allowed on Road" icon={<PiTruckLight size={30} />} />
      <CheckboxRow label="Private Property Only" icon={<PiTruckLight size={30} />} />
      <RangeInputRow label="Size" icon={<PiTruckLight size={30} />} />
    </div>
  );
}
