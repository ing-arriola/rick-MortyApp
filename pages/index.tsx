import type { NextPage, GetStaticProps } from 'next';
import { Button, Card, Grid } from '@nextui-org/react';
import { MainLayout } from '../components/Layouts';
import { rickMortyApi } from '../api';
import { CharacterListResponse, Character } from '../interfaces';
import { CharacterCard } from '../components/ui';
import { useState } from 'react';

interface HomePageProps {
  characters: Character[];
}

const LAST_PAGE = 42;

const HomePage: NextPage<HomePageProps> = ({ characters }) => {
  const [listOfCharacters, setlistOfCharacters] =
    useState<Character[]>(characters);
  const [nextPage, setnextPage] = useState<number>(2);

  const onClickLoadMore = async () => {
    const { data } = await rickMortyApi.get<CharacterListResponse>(
      `/character/?page=${nextPage}`
    );
    setlistOfCharacters((previousCharacters) => [
      ...previousCharacters,
      ...data.results,
    ]);
    if (data.info.next !== null) {
      setnextPage((previous) => previous + 1);
    }
  };

  return (
    <MainLayout title="Rick And Morty">
      <Grid.Container gap={2} justify="flex-start">
        {listOfCharacters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </Grid.Container>
      <div
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        <Button
          color="gradient"
          onPress={onClickLoadMore}
          disabled={nextPage === LAST_PAGE}
        >
          Load More
        </Button>
      </div>
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
