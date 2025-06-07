'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import { apolloClient, GET_LANDING_PAGE, LandingPage } from '@/lib/contentful';
import { SectionRenderer } from '@/components/dynamic/SectionRenderer';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Loading } from '@/components/ui/loading';
import { Error } from '@/components/ui/error';
import { defaultLocale } from '@/lib/localization';

export default function Home() {
  const [landingPage, setLandingPage] = useState<LandingPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [locale] = useState(defaultLocale);

  const fetchLandingPage = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const { data } = await apolloClient.query({
        query: GET_LANDING_PAGE,
        variables: { locale, preview: false },
        fetchPolicy: 'cache-first',
      });

      if (data.landingPageCollection.items.length > 0) {
        setLandingPage(data.landingPageCollection.items[0]);
      } else {
        setError('No landing page found');
      }
    } catch (err :any) {
      setError(err.message ?? 'Failed to load page');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLandingPage();
  }, [locale]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error message={error} onRetry={fetchLandingPage} />;
  }

  if (!landingPage) {
    return <Error message="Page not found" />;
  }
console.log(landingPage.sectionsCollection)
  return (
    <>
      <Head>
        <title>{landingPage.seoTitle}</title>
        <meta name="description" content={landingPage.seoDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={landingPage.seoTitle} />
        <meta property="og:description" content={landingPage.seoDescription} />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen">
        <Header locale={locale} />
        
        <main>
          {landingPage.sectionsCollection.items.map((section,index) => (
            <div key={section.__typename + index} id={section.__typename.toLowerCase().replace('section', '')}>
              <SectionRenderer section={section} />
            </div>
          ))}
        </main>

        <Footer locale={locale} />
      </div>
    </>
  );
}