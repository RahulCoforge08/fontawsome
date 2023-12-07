import React from 'react';
import * as Icons from '../components/Icons';
import { IconProps } from '../components/Icons';

// Define a type for the icon components
export type IconType = React.FC<IconProps>;

/**
 * Get an icon component by its name.
 * @param {string} iconName - The name of the icon.
 * @returns {IconType | null} Icon component or null if not found.
 */
export const getIconByName = (iconName: string): IconType | null => {
  const icon = (Icons as Record<string, IconType>)[iconName];
  return icon || null;
};

type DynamicIconProps = {
  iconName: string;
  size?: number;
  className?: string;
};

/**
 * DynamicIcon component renders an icon dynamically based on the provided iconName.
 * @param {DynamicIconProps} props - Props for DynamicIcon component.
 * @param {string} props.iconName - The name of the icon to render.
 * @param {number} props.size - The size of the icon.
 * @param {string} props.className - Additional class names to apply to the icon.
 * @returns {JSX.Element | null} JSX of the rendered icon or null if not found.
 */
const DynamicIcon: React.FC<DynamicIconProps> = ({
  iconName,
  size,
  className,
}: DynamicIconProps) => {
  const IconComponent = getIconByName(iconName);

  if (!IconComponent) {
    return null;
  }

  // Use React.createElement to dynamically create the element
  // return IconComponent({});
  //try to fix this
  // return <IconComponent size={size} className={className} />;
  // return React.createElement(IconComponent, { className, size });
};

export default DynamicIcon;
