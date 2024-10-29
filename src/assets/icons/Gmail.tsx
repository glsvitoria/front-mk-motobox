import { ComponentProps } from 'react'

export interface GmailProps extends ComponentProps<'svg'> {}

export const Gmail = ({ ...props }: GmailProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 21"
      {...props}
    >
      <g clipPath="url(#clip0_170_1359)">
        <path
          fill="currentColor"
          d="M20 4.748V16.34c0 .753-.61 1.363-1.363 1.363h-3.183V9.976L10 14.067 4.546 9.976v7.727H1.363A1.365 1.365 0 010 16.34V4.749c0-1.687 1.924-2.65 3.272-1.637l1.274.955L10 8.157l5.454-4.091 1.273-.954C18.075 2.1 20 3.062 20 4.748z"
        />
      </g>
      <defs>
        <clipPath id="clip0_170_1359">
          <path
            fill="currentColor"
            d="M0 0H20V20H0z"
            transform="translate(0 .2)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}
