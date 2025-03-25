import * as React from 'react';

import type { Step } from '../helpers/types';

export interface SteppedProgressProps {
  /**
   * Array of step labels to be displayed in the progress bar.
   */
  steps: Array<Step>;

  /**
   * Index of the currently active step (0-based).
   */
  activeStep: number;

  /**
   * Optional: Tailwind CSS class for active line color.
   * Default is 'bg-blue-700'.
   */
  activeLineClassName?: string;

  /**
   * Optional: Tailwind CSS class for inactive line color.
   * Default is 'bg-gray-300'.
   */
  inactiveLineClassName?: string;
}

/**
 * A horizontal stepped progress component.
 * Displays step labels with lines in between to indicate progress.
 */
export default function SteppedProgress({
  steps,
  activeStep,
  activeLineClassName = 'bg-blue-700',
  inactiveLineClassName = 'bg-gray-300',
}: SteppedProgressProps) {
  return (
    <div className="mb-8 flex items-center justify-between gap-x-8 max-sm:overflow-x-scroll">
      {steps.map((label, index) => {
        const isLast = index === steps.length - 1;
        const isActive = index <= activeStep;

        return (
          <div key={index} className={`flex items-center space-x-3 ${index == steps.length - 1 ? '' : 'flex-1'}`}>
            {label.icon}
            <p className={isActive ? 'text-nowrap font-semibold text-blue-700' : 'text-nowrap text-gray-500'}>
              {label.name}
            </p>
            {!isLast && <div className={`h-[2px] w-full ${isActive ? activeLineClassName : inactiveLineClassName}`} />}
          </div>
        );
      })}
    </div>
  );
}
