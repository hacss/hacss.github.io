import { FC } from "react";
import NextHead from "next/head";
import { useRouter } from "next/router";

const Head: FC<{ subtitle?: string, description?: string, children?: undefined }> =
  ({ subtitle, description }) => (
    <NextHead>
      <title>Hacss{subtitle ? `: ${subtitle}` : ""}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={`Hacss${subtitle ? `: ${subtitle}` : ""}`} />
      <meta property="og:description" content={description || "Cut the BS out of CSS. Inline styles without the limitations."} />
      <meta property="og:image" content="https://repository-images.githubusercontent.com/234330718/b398e100-8722-11ea-9a02-712ad5e77447" />
      <meta property="og:url" content={`https://hacss.io${useRouter().pathname}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="icon" type="image/png" href="/favicon16.png" sizes="16x16" />
      <link rel="icon" type="image/png" href="/favicon32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="/favicon48.png" sizes="48x48" />
    </NextHead>
  );

export default Head;
