import Link, { LinkProps } from 'next/link'

export interface RootProps extends LinkProps {
  children: React.ReactNode
}

export const Root = ({ children, ...props }: RootProps) => {
  return (
    <li>
      <Link
        className="flex gap-2 items-center rounded-[100px] border border-[#FFFFFF20] px-4 py-2 hover:border-foundation-orange-300 transition-all duration-300 hover:cursor-pointer group"
        target="_blank"
        {...props}
      >
        {children}
      </Link>
    </li>
  )
}
