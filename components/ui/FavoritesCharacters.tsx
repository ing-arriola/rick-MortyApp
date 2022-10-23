import { Card, Grid, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

interface FavoritesCharactersProps {
  favorites: number[];
}

export const FavoritesCharacters = ({
  favorites,
}: FavoritesCharactersProps) => {
  const router = useRouter();
  const onCardClick = (id: number) => {
    router.push(`/character/${id}`);
  };
  return (
    <Grid.Container gap={3}>
      {favorites.map((id) => (
        <Grid xs={12} sm={6} md={4} xl={4} key={id}>
          <Card
            onPress={() => onCardClick(id)}
            isHoverable
            isPressable
            css={{ padding: 10 }}
          >
            <Card.Image
              src={`https://rickandmortyapi.com/api/character/avatar/${id}.jpeg`}
            />
          </Card>
        </Grid>
      ))}
    </Grid.Container>
  );
};
