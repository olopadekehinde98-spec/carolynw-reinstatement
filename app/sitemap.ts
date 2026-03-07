import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://carolynreinstatement.netlify.app";
  const now = new Date();

  return [
    { url: `${baseUrl}/`, lastModified: now },
    { url: `${baseUrl}/services`, lastModified: now },

    { url: `${baseUrl}/amazon-reinstatement`, lastModified: now },
    { url: `${baseUrl}/section-3-suspension`, lastModified: now },
    { url: `${baseUrl}/linked-account-suspension`, lastModified: now },

    { url: `${baseUrl}/pricing`, lastModified: now },
    { url: `${baseUrl}/order`, lastModified: now },
    { url: `${baseUrl}/intake`, lastModified: now },

    { url: `${baseUrl}/review`, lastModified: now },
    { url: `${baseUrl}/results`, lastModified: now },
    { url: `${baseUrl}/contact`, lastModified: now },

    { url: `${baseUrl}/privacy`, lastModified: now },
    { url: `${baseUrl}/terms`, lastModified: now },
    { url: `${baseUrl}/refund`, lastModified: now },
    { url: `${baseUrl}/disclaimer`, lastModified: now },
    { url: `${baseUrl}/cookies`, lastModified: now },

    { url: `${baseUrl}/success`, lastModified: now },
  ];
}