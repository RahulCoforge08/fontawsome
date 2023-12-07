import { IconProps } from '@components/Icons/index';

const defaultSize = 80;

export const Warning2 = ({ size, className }: IconProps) => {
  const height = size ? size * 0.86 : defaultSize * 0.86;
  return (
    <svg
      className={className}
      width={size || defaultSize}
      height={height}
      viewBox="0 0 74 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M37.0002 13.634L62.1002 57.0006H11.9002L37.0002 13.634ZM37.0002 0.333984L0.333496 63.6673H73.6668L37.0002 0.333984ZM40.3335 47.0006H33.6668V53.6673H40.3335V47.0006ZM40.3335 27.0007H33.6668V40.334H40.3335V27.0007Z"
        fill="#DC381F"
      />
    </svg>
  );
};
