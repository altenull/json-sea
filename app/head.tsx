const RootHead = () => {
  const JSON_SEA = 'JSON Sea';
  const DESCRIPTION = '🌊 Dive deep into the JSON Sea!';
  const DOMAIN = 'jsonsea.com';
  const URL = 'https://jsonsea.com';
  const OG_IMAGE_URL = 'https://raw.githubusercontent.com/altenull/json-sea/main/public/og-image.png';

  return (
    <>
      <title>{JSON_SEA}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={DESCRIPTION} />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content={JSON_SEA} />

      {/* Facebook Meta Tags */}
      <meta property="og:url" content={URL} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={JSON_SEA} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:image" content={OG_IMAGE_URL} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary" />
      <meta property="twitter:domain" content={DOMAIN} />
      <meta property="twitter:url" content={URL} />
      <meta name="twitter:title" content={JSON_SEA} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image" content={OG_IMAGE_URL} />

      {/* Meta Tags Generated via https://www.opengraph.xyz */}
    </>
  );
};

export default RootHead;
