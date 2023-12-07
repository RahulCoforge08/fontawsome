import { IconProps } from './';

const defaultSize = 36;

export const SelectTickIcon = ({ size, className }: IconProps) => {
  return (
    <svg
      className={className}
      width={size || defaultSize}
      height={size || defaultSize}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="18" cy="18" r="18" fill="#008000" />
      <path
        d="M13.9915 22.6234L8.77601 17.648L7 19.3303L13.9915 26L29 11.6823L27.2365 10L13.9915 22.6234Z"
        fill="white"
      />
    </svg>
  );
};
