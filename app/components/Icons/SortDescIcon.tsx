import { IconProps } from './';

const defaultSize = 24;

export const SortDescIcon = ({ size, className }: IconProps) => {
  return (
    <svg
      className={className}
      width={size || defaultSize}
      height={size || defaultSize}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3L18 9H6L12 3Z" fill="transparent" />
      <path d="M12 20L18 14H6L12 20Z" fill="white" />
    </svg>
  );
};
