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
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="app logo"
          width={50}
          height={50}
        />
        <Text color="white" h2>
          R
        </Text>
        <Text color="white" h3>
          ick & Morty
        </Text>
      </div>

      <Text color="white">Favorites</Text>
    </div>
  );
};
