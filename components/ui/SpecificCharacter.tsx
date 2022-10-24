import { Button, Card, Grid, Text, styled } from '@nextui-org/react';
import { Character } from '../../interfaces';

interface SpecificCharacterProps {
  character: Character;
  isFavorite: boolean;
  onClickFavorites: () => void;
}

export const SpecificCharacter = ({
  character,
  isFavorite,
  onClickFavorites,
}: SpecificCharacterProps) => {
  return (
    <Grid.Container css={{ marginTop: '5px' }} gap={2}>
      <Card>
        <Card.Body>
          <Card.Image css={{ borderRadius: 5 }} src={character.image} />
          <Card.Divider css={{ marginTop: 10 }} />
          <div style={{ textAlign: 'center' }}>
            <CharacterName>Name: {character.name}</CharacterName>
            <DescriptionText>Origin: {character.origin.name}</DescriptionText>
            <DescriptionText>Specie: {character.species}</DescriptionText>
            <DescriptionText>
              Location: {character.location.name}
            </DescriptionText>
            <DescriptionText>Status: {character.status}</DescriptionText>
          </div>
          <Card.Footer css={{ display: 'flex', justifyContent: 'center' }}>
            <Button onPress={onClickFavorites} color="gradient">
              {isFavorite ? 'Remove from' : 'Add to'} favorites
            </Button>
          </Card.Footer>
        </Card.Body>
      </Card>
    </Grid.Container>
  );
};

const DescriptionText = styled(Text, {
  fontSize: '$xl',
  fontWeight: '$bold',
});

const CharacterName = styled(Text, {
  fontSize: '$5xl',
  fontWeight: '$bold',
  textGradient: '45deg, $blue600 -20%, $pink600 50%',
});
