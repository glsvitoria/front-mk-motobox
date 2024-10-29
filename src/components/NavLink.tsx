import Link, { LinkProps } from 'next/link'

export interface NavLinkProps extends LinkProps {
  children: React.ReactNode
}

export const NavLink = ({ ...props }: NavLinkProps) => {
  return (
    <li>
      <Link
        className="transition-all duration-300 hover:cursor-pointer hover:text-foundation-orange-300"
        {...props}
      ></Link>
    </li>
  )
}
