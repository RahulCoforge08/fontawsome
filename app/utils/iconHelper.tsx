import React, { useMemo } from 'react';
import * as Icons from '../components/Icons';
import { IconProps } from '../components/Icons';

// Define a type for the icon components
export type IconType = React.FC<IconProps>;

type DynamicIconProps = IconProps & {
  iconName: string;
};

/**
 * Get an icon component by its name.
 * @param {string} iconName - The name of the icon.
 * @returns {IconType | null} Icon component or null if not found.
 */
export const getIconByName = (iconName: string): IconType | null => {
  const icon = (Icons as Record<string, IconType>)[iconName];
  return icon || null;
};

/**
 * DynamicIcon component renders an icon dynamically based on the provided iconName.
 * @param {DynamicIconProps} props - Props for DynamicIcon component.
 * @returns {React.FunctionComponentElement<Icons.IconProps> | null} JSX of the rendered icon or null if not found.
 */
export const DynamicIcon = ({ iconName, ...iconProps }: DynamicIconProps) => {
  const IconComponent = useMemo(() => getIconByName(iconName), [iconName]);

  if (!IconComponent) return null;

  return <IconComponent {...iconProps} />;
};
