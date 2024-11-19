export interface TitleProps extends React.ComponentProps<"p"> {}

export const Title = ({ ...props }: TitleProps) => {
  return <p className="text-xs font-medium text-white" {...props} />;
};
