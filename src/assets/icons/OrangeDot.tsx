export interface OrangeDotProps extends React.ComponentProps<"svg"> {}

export const OrangeDot = ({ ...props }: OrangeDotProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <circle cx="8" cy="8" r="7.5" fill="#C85309"></circle>
    </svg>
  );
};
