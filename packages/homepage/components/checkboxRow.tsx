import * as React from 'react';

interface CheckboxRowProps {
  label: string;
  icon?: React.ReactNode;
  checked: boolean;
  onChange: React.Dispatch<React.SetStateAction<boolean>>;
}

/**
 * A reusable row with an icon, label, and controlled checkbox.
 */
export const CheckboxRow: React.FC<CheckboxRowProps> = ({ label, icon, checked, onChange }) => (
  <div className="flex items-center justify-between py-1">
    <div className="flex items-center space-x-2">
      {icon}
      <p className="sm:text-lg">{label}</p>
    </div>
    <input type="checkbox" className="size-5" checked={checked} onChange={(e) => onChange(e.target.checked)} />
  </div>
);
