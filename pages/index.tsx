import type { NextPage, GetStaticProps } from 'next';
import { Grid } from '@nextui-org/react';
import { MainLayout } from '../components/Layouts';
import { rickMortyApi } from '../api';
import { CharacterListResponse, Character } from '../interfaces';
import { CharacterCard } from '../components/ui';

interface HomePageProps {
  characters: Character[];
}

const HomePage: NextPage<HomePageProps> = ({ characters }) => {
  return (
    <MainLayout title="Rick And Morty">
      <Grid.Container gap={2} justify="flex-start">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </Grid.Container>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await rickMortyApi.get<CharacterListResponse>('/character');

  return {
    props: {
      characters: data.results,
    },
  };
};

export default HomePage;
