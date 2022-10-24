import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

import { Character } from '../../interfaces/characterList';

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  const router = useRouter();
  const onCardClick = () => {
    router.push(`/character/${character.id}`);
  };

  return (
    <Grid xs={12} sm={6} md={4} xl={4} key={character.id}>
      <Card onClick={onCardClick} isHoverable isPressable variant="bordered">
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
