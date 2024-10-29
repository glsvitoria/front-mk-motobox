import { ComponentProps } from 'react'

export interface WhatsappProps extends ComponentProps<'svg'> {}

export const Whatsapp = ({ ...props }: WhatsappProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 21"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10 1.867a8.333 8.333 0 00-7.135 12.64l-.744 2.527a.842.842 0 001.046 1.045l2.526-.743A8.333 8.333 0 1010 1.868zm-1.885 10.22c1.686 1.684 3.295 1.907 3.863 1.928.864.031 1.706-.629 2.034-1.394a.583.583 0 00-.074-.586c-.457-.584-1.074-1.003-1.677-1.42a.592.592 0 00-.811.132l-.5.763a.192.192 0 01-.254.063c-.34-.194-.834-.524-1.189-.879a5.423 5.423 0 01-.839-1.144.192.192 0 01.056-.243l.77-.571a.592.592 0 00.1-.784c-.373-.546-.808-1.241-1.44-1.702a.583.583 0 00-.57-.063c-.766.329-1.43 1.17-1.397 2.036.02.568.243 2.178 1.928 3.863z"
        clipRule="evenodd"
      />
    </svg>
  )
}
