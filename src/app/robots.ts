import { MetadataRoute } from "next";
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/"],
      disallow: [""]
    },
    // TODO Needto add a sitemap.xml
    sitemap: ["https://hometeampm.com/sitemap.xml"]
  };
}