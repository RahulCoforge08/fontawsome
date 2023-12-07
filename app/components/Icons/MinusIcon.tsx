import { IconProps } from './';

const defaultSize = 48;

export const MinusIcon = ({ size, className }: IconProps) => {
  return (
    <svg
      className={className}
      width={size || defaultSize}
      height={size || defaultSize}
      viewBox="0 0 49 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M38.5 26H10.5V22H38.5V26Z" />
    </svg>
  );
};
