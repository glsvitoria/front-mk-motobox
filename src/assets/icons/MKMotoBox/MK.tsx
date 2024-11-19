export interface MKProps extends React.ComponentProps<"svg"> {}

export const MK = ({ ...props }: MKProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="58"
      fill="none"
      viewBox="0 0 50 58"
      {...props}
    >
      <g filter="url(#filter0_di_196_967)">
        <path
          fill="#FF6300"
          d="M26.31.065v53.65l3.353-3.353V17.67l1.258-1.257 11.317 14.67h5.239L33.855 13.478 47.058.065h-4.82L29.663 13.06V.065z"
        ></path>
      </g>
      <g filter="url(#filter1_d_196_967)">
        <path
          fill="#fff"
          d="M2 31.082h3.772V8.448l7.545 11.527L21.28 8.448v41.915l3.353 3.353V.066H21.7l-8.383 14.25L5.353.066H2z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_di_196_967"
          width="24.52"
          height="57.003"
          x="24.634"
          y="0.065"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="1.677"></feOffset>
          <feGaussianBlur stdDeviation="0.838"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_196_967"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_196_967"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="1.677"></feOffset>
          <feGaussianBlur stdDeviation="0.838"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend in2="shape" result="effect2_innerShadow_196_967"></feBlend>
        </filter>
        <filter
          id="filter1_d_196_967"
          width="25.987"
          height="57.003"
          x="0.323"
          y="0.065"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="1.677"></feOffset>
          <feGaussianBlur stdDeviation="0.838"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_196_967"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_196_967"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
};
