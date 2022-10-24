import NextLink from 'next/link';
import { Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0px 20px',
        background: theme?.colors.gray100.value,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Image
          src="https://png2.cleanpng.com/sh/b67d745570437b2856f3845ed8d50109/L0KzQYm3VMA5N51BiZH0aYP2gLBuTf1weqVAReV2aYTrPcPwgBsue5Jze9puej33f8XsTfJib15tedDtYnHqPbXojvNqdpgyTdNsOUm8Q4e7UsE1bWkzS6c8NEG3SIO4VcI0OWc2S6sDMkezR3B3jvc=/kisspng-morty-smith-rick-sanchez-tote-bag-handbag-dancing-5ac999364214e8.3534148215231613982707.png"
          alt="app logo"
          width={80}
          height={100}
        />
        <NextLink href="/" passHref>
          <a style={{ display: 'flex' }}>
            <Text color="white" h2>
              R
            </Text>
            <Text color="white" h3>
              ick & Morty
            </Text>
          </a>
        </NextLink>
      </div>
      <NextLink href="/favorites" passHref>
        <a>
          <Text color="white">Favorites</Text>
        </a>
      </NextLink>
    </div>
  );
};
