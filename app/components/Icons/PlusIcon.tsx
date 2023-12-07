import { IconProps } from '@components/Icons/index';

const defaultSize = 48;

export const PlusIcon = ({ size, className }: IconProps) => {
  return (
    <svg
      className={className}
      width={size || defaultSize}
      height={size || defaultSize}
      viewBox="0 0 49 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M36.5 26H26.5V36C26.5 37.1 25.6 38 24.5 38C23.4 38 22.5 37.1 22.5 36V26H12.5C11.4 26 10.5 25.1 10.5 24C10.5 22.9 11.4 22 12.5 22H22.5V12C22.5 10.9 23.4 10 24.5 10C25.6 10 26.5 10.9 26.5 12V22H36.5C37.6 22 38.5 22.9 38.5 24C38.5 25.1 37.6 26 36.5 26Z" />
    </svg>
  );
};
