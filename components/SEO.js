import { useRouter } from 'next/router';
import Head from 'next/head';

export default function SEO({ title, description, image}) {
  const router = useRouter();
  let url = '';

  if (typeof window !== 'undefined') {
    url = `${window.location.origin}${router.asPath}`;
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={url}  />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} />
      <link rel="icon" href="/img/favicon.png" />
    </Head>
  );
}
