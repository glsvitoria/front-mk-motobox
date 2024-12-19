import { LogoJsonLd } from "next-seo";

const LogoSchema = () => {
  return (
    <LogoJsonLd
      useAppDir
      scriptId="logo-schema-org"
      name="Moto Box"
      logo="https://res.cloudinary.com/dg0rly54r/image/upload/v1734636110/myn1ymsh1ynu7grugsvd.png"
      url="https://www.mkmotobox.com.br/"
      type="Organization"
      alternateName="MotoBox"
      sameAs={["https://www.instagram.com/mkmotobox/"]}
    />
  );
};

export default LogoSchema;
