import { useState } from 'react';
import type { NextPage, GetStaticProps } from 'next';
import { Button, Grid } from '@nextui-org/react';

import { rickMortyApi } from '../api';
import { CharacterListResponse, Character } from '../interfaces';
import { MainLayout } from '../components/Layouts';
import { CharacterCard } from '../components/ui';
import styled from 'styled-components';

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
      <ButtonContainer>
        <Button
          color="gradient"
          onPress={onClickLoadMore}
          disabled={nextPage === LAST_PAGE}
        >
          Load More
        </Button>
      </ButtonContainer>
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.8rem;
`;

export default HomePage;
