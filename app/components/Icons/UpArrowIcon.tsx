import { IconProps } from './';

const defaultSize = 48;

export const UpArrowIcon = ({ size, className }: IconProps) => {
  const sizeToUse = size || defaultSize;
  return (
    <svg
      className={className}
      width={sizeToUse}
      height={sizeToUse / 2}
      viewBox="0 0 30 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M30 15L15 1.90735e-06L-7.62939e-06 15L30 15Z" fill="#293462" />
    </svg>
  );
};
