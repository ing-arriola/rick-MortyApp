import NextLink from 'next/link';
import Image from 'next/image';
import { Text } from '@nextui-org/react';
import styled from 'styled-components';

export const Navbar = () => {
  return (
    <NavBarContainer>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Image src={`/img/logo.png`} alt="app logo" width={80} height={100} />
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
    </NavBarContainer>
  );
};

const NavBarContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  background-color: rgb(38, 41, 43);
  border-radius: 5px;
`;
