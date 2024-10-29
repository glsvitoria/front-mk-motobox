import { ComponentProps } from 'react'

export interface InstagramProps extends ComponentProps<'svg'> {}

export const Instagram = ({ ...props }: InstagramProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 21"
      {...props}
    >
      <path
        fill="currentColor"
        d="M14.166 7.284a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M13.333 2.7c2.3 0 4.167 1.867 4.167 4.167v6.667c0 2.3-1.867 4.167-4.167 4.167H6.667A4.168 4.168 0 012.5 13.534V6.867c0-2.3 1.867-4.166 4.167-4.166h6.666z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 6.867a3.332 3.332 0 110 6.667 3.332 3.332 0 110-6.667z"
      />
    </svg>
  )
}
