interface RangeInputRowProps {
  label: string;
  icon?: React.ReactNode;
  placeholderMin?: string;
  placeholderMax?: string;
  minValue: number;
  setMinValue: React.Dispatch<React.SetStateAction<number>>;
  maxValue: number;
  setMaxValue: React.Dispatch<React.SetStateAction<number>>;
}

/**
 * A reusable row with an icon, label, and two numeric input fields.
 */
export const RangeInputRow: React.FC<RangeInputRowProps> = ({
  label,
  icon,
  placeholderMin = 'Min',
  placeholderMax = 'Max',
  setMinValue,
  setMaxValue,
  maxValue,
  minValue,
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
        onChange={(e) => setMinValue(+e.target.value)}
        value={minValue}
      />
      <input
        type="number"
        className="h-8 w-16 rounded-sm border border-gray-300 pl-2"
        placeholder={placeholderMax}
        min={0}
        value={maxValue}
        onChange={(e) => setMaxValue(+e.target.value)}
      />
    </div>
  </div>
);
