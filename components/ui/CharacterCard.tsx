import { Card, Grid, Row, Text } from '@nextui-org/react';
import { Character } from '../../interfaces/characterList';

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <Grid xs={12} sm={6} md={4} xl={4} key={character.id}>
      <Card isHoverable isPressable variant="bordered">
        <Card.Body css={{ p: 1 }}>
          <Card.Image src={character.image} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text>{character.name}</Text>
            <Text>Specie:{character.species}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
