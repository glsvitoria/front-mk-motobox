export interface SpeedProps extends React.ComponentProps<"svg"> {}

export const Speed = ({ ...props }: SpeedProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="17"
      fill="currentColor"
      viewBox="0 0 16 17"
      {...props}
    >
      <mask
        id="mask0_306_119"
        width="16"
        height="17"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <path fill="currentColor" d="M0 .5h16v16H0z"></path>
      </mask>
      <g mask="url(#mask0_306_119)">
        <path
          fill="currentColor"
          d="M6.967 10.833q.399.4 1.033.392t.933-.458l3.734-5.6-5.6 3.733q-.45.3-.475.917-.026.616.375 1.016M8 3.167q.983 0 1.892.275a6.1 6.1 0 0 1 1.708.825l-1.267.8A5.06 5.06 0 0 0 8 4.5q-2.217 0-3.775 1.558-1.558 1.56-1.558 3.775 0 .7.191 1.384.192.683.542 1.283h9.2q.384-.633.558-1.317.175-.682.175-1.416a4.8 4.8 0 0 0-.566-2.267l.8-1.267a7.4 7.4 0 0 1 .791 1.667q.293.883.309 1.833a6.5 6.5 0 0 1-.217 1.817 7 7 0 0 1-.683 1.65q-.184.3-.5.467a1.4 1.4 0 0 1-.667.166H3.4q-.35 0-.667-.166a1.26 1.26 0 0 1-.5-.467 6.616 6.616 0 0 1-.9-3.367q0-1.383.525-2.591a6.8 6.8 0 0 1 1.434-2.117 6.8 6.8 0 0 1 2.125-1.433A6.45 6.45 0 0 1 8 3.167"
        ></path>
      </g>
    </svg>
  );
};
