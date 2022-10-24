import { useEffect, useState } from 'react';
import { Text } from '@nextui-org/react';

import { MainLayout } from '../../components/Layouts';
import { NoFavoritesFound } from '../../components/ui';
import { FavoritesCharacters } from '../../components/ui';
import { favoriteCharacters } from '../../utils';

const Favorites = () => {
  const [favorites, setfavorites] = useState<number[]>([]);

  useEffect(() => {
    setfavorites(favoriteCharacters());
  }, []);

  return (
    <MainLayout title="Favorite characters">
      <Text css={{ textAlign: 'center' }} h1>
        Favorite characters
      </Text>
      {favorites.length ? (
        <FavoritesCharacters favorites={favorites} />
      ) : (
        <NoFavoritesFound />
      )}
    </MainLayout>
  );
};

export default Favorites;
