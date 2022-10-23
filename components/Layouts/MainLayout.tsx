import Head from 'next/head';
import { Navbar } from '../ui/Navbar';

interface MainLayoutProps {
  children: JSX.Element | JSX.Element[];
  title?: string;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const MainLayout = ({ children, title }: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || 'Rick & Morty App'}</title>
        <meta name="author" content="Jaime Arriola" />
        <meta name="description" content={`Information about ${title}`} />
        <meta
          name="keywords"
          content={`${title}, Rick&Morty, Rick-and-Morty`}
        />
        <meta property="og:title" content={`Information about ${title}`} />
        <meta
          property="og:description"
          content={`This is the page about ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.jpeg`} />
      </Head>
      <Navbar />
      <main style={{ padding: '0rem 1.5rem' }}>{children}</main>
    </>
  );
};
