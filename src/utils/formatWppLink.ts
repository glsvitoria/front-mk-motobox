interface FormatWppLinkProps {
  phoneNumber: string;
  message: string;
}

export const formatWppLink = ({ message, phoneNumber }: FormatWppLinkProps) => {
  return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
};
