const baseUrl = "https://www.mkmotobox.com.br/";

export const siteNavigationElementData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SiteNavigationElement",
      name: "Landing Page",
      url: baseUrl,
    },
    {
      "@type": "SiteNavigationElement",
      name: "Pesquisar Motos",
      url: `${baseUrl}/pesquisa`,
    },
    {
      "@type": "SiteNavigationElement",
      name: "Visualizar Motos",
      url: `${baseUrl}/moto`,
    },
  ],
};
