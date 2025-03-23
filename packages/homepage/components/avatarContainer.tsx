/**
 * This file defines a React component that displays a list of user avatars.
 * Each avatar can include an image and a fallback text if the image fails to load.
 */

import * as React from 'react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

import type { AvatarProps } from '../helpers/types';

export interface AvatarContainerProps {
  avatars: Array<AvatarProps>;
}

/**
 * A component that renders a list of avatar components.
 * @param avatarImageSrcs - Array of avatar objects containing image source and fallback text.
 * @returns A React component that displays the avatars.
 */
export default function AvatarContainer({ avatars }: AvatarContainerProps) {
  return (
    <div className="flex items-center space-x-[-8px]">
      {avatars.map((avatar) => {
        return (
          <div>
            <Avatar className="flex size-10 items-center justify-center rounded-full bg-gray-200">
              <AvatarImage src={avatar.imageSrc} className="size-10 rounded-full" />
              <AvatarFallback>{avatar.fallback}</AvatarFallback>
            </Avatar>
          </div>
        );
      })}
      <Avatar className="flex size-10 items-center justify-center rounded-full bg-gray-200">
        <AvatarFallback>+</AvatarFallback>
      </Avatar>
    </div>
  );
}
