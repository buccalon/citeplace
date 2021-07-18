import Head from 'next/head';
import { VStack, Heading } from '@chakra-ui/layout';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mapping Citations</title>
        <meta name="description" content="Geolocate your bibliography" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <VStack
        h="100vh"
        alignItems="center"
        justifyContent="center"
        spacing="4em"
      >
        <Heading as="h1" fontSize={['2xl', '4xl', '6xl', '6xl']}>
          Mapping Citations
        </Heading>

        <a href="https://bruno.land/" target="_blank" rel="noopener noreferrer">
          Project by Bruno Buccalon
        </a>
      </VStack>
    </div>
  );
}
