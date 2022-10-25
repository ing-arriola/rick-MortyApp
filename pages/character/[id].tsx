import { useState } from 'react';
import { GetStaticProps, NextPage, GetStaticPaths } from 'next';
import confetti from 'canvas-confetti';

import { rickMortyApi } from '../../api';
import { MainLayout } from '../../components/Layouts';
import { Character, CharacterListResponse } from '../../interfaces';
import {
  existInFavorites,
  getCharacterInfo,
  toogleFavorites,
} from '../../utils';
import { SpecificCharacter } from '../../components/ui';

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
      <SpecificCharacter
        onClickFavorites={onClickFavorites}
        character={character}
        isFavorite={isFavorite}
      />
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
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };

  const character = await getCharacterInfo(id);

  if (!character) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  return character;
};

export default CharacterPage;
