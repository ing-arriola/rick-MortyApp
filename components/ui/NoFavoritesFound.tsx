import { Container, Text, Image, styled } from '@nextui-org/react';

export const NoFavoritesFound = () => {
  return (
    <StyledContainer>
      <Text h1>There are no favorites yet :[ </Text>
      <Image
        src={`/img/notFavoritesFound.png`}
        width={250}
        height={250}
        alt="not found image"
      />
    </StyledContainer>
  );
};

const StyledContainer = styled(Container, {
  display: 'flex',
  flexDirection: 'column',
  height: 'calc(100vh - 100px)',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'center',
  textAlign: 'center',
});
