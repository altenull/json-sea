const RootHead = () => {
  const JSON_SEA = 'JSON Sea';
  const DESCRIPTION = '🌊 Dive deep into the JSON Sea!';
  const URL = 'https://jsonsea.com';
  const OG_IMAGE_URL = 'https://raw.githubusercontent.com/altenull/json-sea/main/public/og-image.png';

  return (
    <>
      <title>{JSON_SEA}</title>
      <meta name="description" content={DESCRIPTION} />
      <link rel="icon" href="/favicon.ico" />

      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={JSON_SEA} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:site_name" content={JSON_SEA} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={URL} />
      <meta property="og:image" content={OG_IMAGE_URL} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="627" />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={JSON_SEA} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image" content={OG_IMAGE_URL} />
    </>
  );
};

export default RootHead;
