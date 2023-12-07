import { IconProps } from './';

const defaultSize = 48;

export const DownArrowIcon = ({ size, className }: IconProps) => {
  const sizeToUse = size || defaultSize;
  return (
    <svg
      className={className}
      width={sizeToUse}
      height={sizeToUse / 2}
      viewBox="0 0 30 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0L15 15L30 1.85538e-06L0 0Z" fill="#293462" />
    </svg>
  );
};
