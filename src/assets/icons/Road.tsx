import { ComponentProps } from "react";

export interface RoadProps extends ComponentProps<"svg"> {}

export const Road = ({ ...props }: RoadProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="19"
      fill="none"
      viewBox="0 0 18 19"
      {...props}
    >
      <path
        fill="currentColor"
        d="M3.459 15.283V3.716h1.445v11.567zm5.06 0v-2.892h1.446v2.892zm5.06 0V3.716h1.447v11.567zm-5.06-4.337V8.054h1.446v2.891zm0-4.338V3.716h1.446v2.892z"
      />
    </svg>
  );
};
