import { useState } from 'react';
import { Button, Card, Grid, Text } from '@nextui-org/react';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';

import confetti from 'canvas-confetti';

import { rickMortyApi } from '../../api';
import { MainLayout } from '../../components/Layouts';
import { Character, CharacterListResponse } from '../../interfaces';
import { existInFavorites, toogleFavorites } from '../../utils';

interface CharacterPageProps {
  character: Character;
}

const CharacterPage: NextPage<CharacterPageProps> = ({ character }) => {
  const [isFavorite, setisFavorite] = useState(existInFavorites(character.id));

  const onClickFavorites = () => {
    toogleFavorites(character.id);
    setisFavorite(!isFavorite);
    if (!isFavorite) {
      confetti({
        zIndex: 100,
        particleCount: 100,
        spread: 160,
        angle: 90,
        origin: {
          x: 0.5,
          y: 0.8,
        },
      });
    }
  };

  return (
    <MainLayout title={character.name}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Card>
          <Card.Body>
            <Card.Image css={{ borderRadius: 5 }} src={character.image} />
            <Card.Divider css={{ marginTop: 10 }} />
            <div style={{ textAlign: 'center' }}>
              <Text
                css={{
                  textGradient: '45deg, $blue600 -20%, $pink600 50%',
                }}
                weight="bold"
                h1
              >
                Name: {character.name}
              </Text>
              <Text size="$xl" weight="bold">
                Origin: {character.origin.name}
              </Text>
              <Text size="$xl" weight="bold">
                Specie: {character.species}
              </Text>
              <Text size="$xl" weight="bold">
                Location: {character.location.name}
              </Text>
              <Text size="$xl" weight="bold">
                Status: {character.status}
              </Text>
            </div>
            <Card.Footer css={{ display: 'flex', justifyContent: 'center' }}>
              <Button onPress={onClickFavorites} color="gradient">
                {isFavorite ? 'Remove from' : 'Add to'} favorites
              </Button>
            </Card.Footer>
          </Card.Body>
        </Card>
      </Grid.Container>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const { data } = await rickMortyApi.get<CharacterListResponse>('/character');

  const characters = data.results.map((value) => `${value.id}`);

  return {
    paths: characters.map((character) => ({
      params: {
        id: character,
      },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const { data } = await rickMortyApi.get<Character>(`/character/${id}`);
  return {
    props: {
      character: data,
    },
  };
};

export default CharacterPage;
