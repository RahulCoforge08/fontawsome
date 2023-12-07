import { IconProps } from '@components/Icons/index';

const defaultSize = 80;

export const PrintIcon = ({ size, className }: IconProps) => {
  const height = size ? size * 0.88 : defaultSize * 0.88;
  return (
    <svg
      className={className}
      width={size || defaultSize}
      height={height}
      viewBox="0 0 68 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M57.3334 16.6667H54.0001V0H14.0001V16.6667H10.6667C5.13342 16.6667 0.666748 21.1333 0.666748 26.6667V46.6667H14.0001V60H54.0001V46.6667H67.3334V26.6667C67.3334 21.1333 62.8668 16.6667 57.3334 16.6667ZM20.6667 6.66667H47.3334V16.6667H20.6667V6.66667ZM47.3334 53.3333H20.6667V40H47.3334V53.3333ZM54.0001 40V33.3333H14.0001V40H7.33342V26.6667C7.33342 24.8333 8.83342 23.3333 10.6667 23.3333H57.3334C59.1668 23.3333 60.6668 24.8333 60.6668 26.6667V40H54.0001Z"
        fill="#2B60DE"
      />
      <path
        d="M54.0001 31.6667C55.841 31.6667 57.3334 30.1743 57.3334 28.3333C57.3334 26.4924 55.841 25 54.0001 25C52.1591 25 50.6668 26.4924 50.6668 28.3333C50.6668 30.1743 52.1591 31.6667 54.0001 31.6667Z"
        fill="#2B60DE"
      />
    </svg>
  );
};
