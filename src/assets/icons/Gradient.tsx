export interface GradientProps extends React.ComponentProps<"svg"> {}

export const Gradient = ({ ...props }: GradientProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="17"
      height="17"
      fill="currentColor"
      viewBox="0 0 17 17"
      {...props}
    >
      <mask
        id="mask0_306_124"
        width="17"
        height="17"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="currentColor" d="M.506.5h16v16h-16z"></path>
      </mask>
      <g mask="url(#mask0_306_124)">
        <path
          fill="currentColor"
          d="M7.84 9.167V7.833h1.333v1.334zM6.505 10.5V9.167h1.333V10.5zm2.667 0V9.167h1.333V10.5zm1.333-1.333V7.833h1.333v1.334zm-5.333 0V7.833h1.333v1.334zM3.839 14.5q-.55 0-.941-.392a1.28 1.28 0 0 1-.392-.941V3.833q0-.55.392-.941.391-.392.941-.392h9.333q.55 0 .942.392.392.391.392.941v9.334q0 .55-.392.941a1.28 1.28 0 0 1-.942.392zm1.334-1.333h1.333v-1.334H5.173zm2.666 0h1.334v-1.334H7.839zm-4-1.334h1.334V10.5h1.333v1.333h1.333V10.5h1.334v1.333h1.333V10.5h1.333v1.333h1.333V10.5H11.84V9.167h1.333V3.833H3.84v5.334h1.334V10.5H3.839zm6.667 0v1.334h1.333v-1.334z"
        ></path>
      </g>
    </svg>
  );
};
