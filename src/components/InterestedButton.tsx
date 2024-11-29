"use client";

import { Button } from "./ui/button";

export const InterestedButton = () => {
  const handleOpenInterest = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=5511999999999&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20moto%20que%20vi%20no%20site.",
      "_blank",
    );
  };

  return (
    <Button
      variant="primary"
      className="uppercase text-foundation-black-13"
      onClick={handleOpenInterest}
    >
      Tenho interesse
    </Button>
  );
};
