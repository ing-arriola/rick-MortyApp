import { Container, Text, Image } from '@nextui-org/react';

export const NoFavoritesFound = () => {
  return (
    <Container
      css={{
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
      }}
    >
      <Text h1>There are no favorites yet :[ </Text>
      <Image
        src="https://png2.cleanpng.com/sh/07447b350e6329a5e79db57e24919f35/L0KzQYq3V8E0N6Vwi5H0aYP2gLBuTgBqa5xxfdY2Y4Xmhb7phgIueJD3jNNrbHWwfrb7lB9zc15sitN5aHnmg373ifNsdJYyiNtsa3zoPcPwgBsueJ9sReJyY3vvdX75ifNsNaV3edD8cHH1dbB7TgBvb15ohNt5LUXnQorqVBIza2NpftMBLkK2Roq8UMczOWY7S6I6OUG7RoiCWMIveJ9s/kisspng-pickled-cucumber-portable-network-graphics-pickle-pickle-rick-png-pickle-rick-transparent-png-clip-5d29c7b2c2dfa6.2369507215630191867982.png"
        width={250}
        height={250}
        alt="not found image"
      />
    </Container>
  );
};
