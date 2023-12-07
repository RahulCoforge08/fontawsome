import { IconProps } from './';

const defaultSize = 48;

export const DangerIcon = ({ size }: IconProps) => {
  const sizeToUse = size || defaultSize;
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      height={sizeToUse}
      viewBox="0 0 28.000000 28.000000"
      preserveAspectRatio="xMidYMid meet">
      <g
        transform="translate(0.000000,28.000000) scale(0.100000,-0.100000)"
        fill="#ff0000"
        stroke="none">
        <path
          d="M49 231 c-35 -35 -39 -44 -39 -91 0 -48 4 -56 40 -92 39 -39 42 -40
97 -36 49 4 60 9 90 41 28 32 33 44 33 88 0 46 -4 55 -39 90 -35 35 -44 39
-91 39 -47 0 -56 -4 -91 -39z m166 -21 c76 -76 -6 -205 -109 -170 -69 23 -94
114 -46 166 49 52 104 54 155 4z"
        />
        <path d="M129 206 c-6 -41 0 -81 11 -81 17 0 18 77 2 83 -7 2 -12 1 -13 -2z" />
        <path
          d="M123 88 c2 -7 10 -13 17 -13 7 0 15 6 18 13 2 7 -5 12 -18 12 -13 0
-20 -5 -17 -12z"
        />
      </g>
    </svg>
  );
};
