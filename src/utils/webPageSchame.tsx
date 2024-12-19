import { WebPageJsonLd } from "next-seo";

interface WebPageSchemaProps {
  title: string;
  description: string;
  url: string;
  imageName: string;
}

const WebPageSchema = ({
  title,
  description,
  url,
  imageName,
}: WebPageSchemaProps) => {
  return (
    <WebPageJsonLd
      useAppDir
      id="https://www.mkmotobox.com.br/"
      type="WebPage"
      name={title}
      description={description}
      url={url}
      image={{
        "@type": "ImageObject",
        url: "https://res.cloudinary.com/dg0rly54r/image/upload/v1734636110/myn1ymsh1ynu7grugsvd.png",
        name: imageName,
        width: 1200,
        height: 675,
      }}
    />
  );
};
export default WebPageSchema;
