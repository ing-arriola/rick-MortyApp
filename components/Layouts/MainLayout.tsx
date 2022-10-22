import Head from 'next/head';
import { Navbar } from '../ui/Navbar';

interface MainLayoutProps {
  children: JSX.Element | JSX.Element[];
  title?: string;
  characterName?: string;
}

export const MainLayout = ({
  children,
  title,
  characterName,
}: MainLayoutProps) => {
  return (
    <>
      <Head>
        <title>{title || 'Rick & Morty App'}</title>
        <meta name="author" content="Jaime Arriola" />
        <meta
          name="description"
          content={`Information about ${characterName}`}
        />
        <meta
          name="keywords"
          content={`${characterName}, Rick&Morty, Rick-and-Morty`}
        />
      </Head>
      <Navbar />
      <main style={{ padding: '0rem 1.5rem' }}>{children}</main>
    </>
  );
};
