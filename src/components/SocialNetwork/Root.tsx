import Link, { LinkProps } from "next/link";

export interface RootProps extends LinkProps {
  children: React.ReactNode;
}

export const Root = ({ children, ...props }: RootProps) => {
  return (
    <li>
      <Link
        className="group flex items-center gap-2 rounded-[100px] border border-[#FFFFFF20] px-4 py-2 transition-all duration-300 hover:cursor-pointer hover:border-foundation-orange-300"
        target="_blank"
        {...props}
      >
        {children}
      </Link>
    </li>
  );
};
