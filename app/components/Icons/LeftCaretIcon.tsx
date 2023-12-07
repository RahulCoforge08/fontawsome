import { IconProps } from '@components/Icons/index';

const defaultSize = 48;

export const LeftCaretIcon = ({ size, className }: IconProps) => {
  const sizeToUse = size || defaultSize;
  return (
    <svg
      className={className}
      width={sizeToUse}
      height={sizeToUse * 1.714}
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M6 11L1 6L6 1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};
