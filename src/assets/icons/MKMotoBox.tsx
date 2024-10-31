export const MKMotoBox = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="35"
      fill="none"
      viewBox="0 0 17 35"
    >
      <g filter="url(#filter0_di_307_2428)">
        <path
          fill="#FF6300"
          d="M1.706.89v32l2.264-2v-19.5l.85-.75 7.642 8.75H16L6.8 8.89l8.917-8h-3.255L3.97 8.64V.89z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_di_307_2428"
          width="16.294"
          height="34"
          x="0.706"
          y="0.891"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="1"></feOffset>
          <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_307_2428"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_307_2428"
            result="shape"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dy="1"></feOffset>
          <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
          <feComposite
            in2="hardAlpha"
            k2="-1"
            k3="1"
            operator="arithmetic"
          ></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend in2="shape" result="effect2_innerShadow_307_2428"></feBlend>
        </filter>
      </defs>
    </svg>
  )
}
