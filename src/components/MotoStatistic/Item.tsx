import React from "react";

export interface ItemProps extends React.ComponentProps<"li"> {
  icon: React.ReactNode;
  title: string;
  value: string;
}

export const Item = ({ icon, title, value, ...props }: ItemProps) => {
  return (
    <li
      className="grid w-max grid-cols-[auto_1fr] items-center gap-1"
      {...props}
    >
      {icon}
      <p className="body-lg-semibold text-foundation-black-7">{title}</p>
      <div />
      <p className="font-medium text-foundation-black-1">{value}</p>
    </li>
  );
};
