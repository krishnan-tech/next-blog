/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "Krishnan Navadia",
  titleTemplate: "Krishnan Navadia",
  defaultTitle: "Krishnan Navadia",
  description: "Blog Website",
  canonical: "http://krishnan-tech.github.io/",
  openGraph: {
    url: "http://krishnan-tech.github.io/",
    title: "Krishnan Navadia",
    description: "Blog Website",
    images: [
      {
        url: "./public/L.jpg",
        alt: "Krishnan Navadia",
      },
    ],
    site_name: "Krishnan Navadia",
  },
};

export default defaultSEOConfig;
