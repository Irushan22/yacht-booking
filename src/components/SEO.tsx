import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/config/site";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: "website" | "article" | "product";
  name?: string;
  image?: string;
  schema?: Record<string, unknown>;
  /** When true, asks search engines not to index this page. */
  noindex?: boolean;
}

const SEO = ({
  title,
  description,
  canonical,
  type = "website",
  name = siteConfig.name,
  image = siteConfig.seo.ogImage,
  schema,
  noindex = false
}: SEOProps) => {
  const siteUrl = siteConfig.url;
  const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const fullImage = image.startsWith("http") ? image : `${siteUrl}${image}`;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:site_name" content={name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      {siteConfig.social.twitter && (
        <meta name="twitter:site" content={`@${siteConfig.social.twitter}`} />
      )}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
