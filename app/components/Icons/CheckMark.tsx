import { IconProps } from '@components/Icons/index';

const defaultSize = 50;

export const CheckMark = ({ size, className }: IconProps) => {
  const height = size ? size * 0.75 : defaultSize * 0.75;
  return (
    <svg
      className={className}
      width={size || defaultSize}
      height={height}
      viewBox="0 0 60 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19.3167 35.4166L5.41668 21.5166L0.68335 26.2166L19.3167 44.8499L59.3167 4.8499L54.6167 0.149902L19.3167 35.4166Z"
        fill="#008000"
      />
    </svg>
  );
};
