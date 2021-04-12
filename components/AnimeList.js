import Image from "next/image";
import { Text, SimpleGrid, AspectRatio, Box, Popover, PopoverTrigger, PopoverContent, PopoverHeader, PopoverCloseButton, PopoverBody, Spinner } from "@chakra-ui/react";
import { gql, useQuery } from "@apollo/client";
import { motion } from "framer-motion";


export const AnimeList = () => {

    // Query
    const GET_ANIMES = gql`
query  {
  Page (page:1, perPage: 12){
    media(source:MANGA, format:MOVIE) {
      id
      coverImage {
        large
      }
      title {
        romaji
        english
      }
      description
    }
  }
}
`;
    // Handle Query
    const { loading, error, data } = useQuery(GET_ANIMES);
    console.log(data);

    if (error)
        return <div>Error loading players.</div>;
    if (loading)
        return <div>Loading</div>;

    const animes = data.Page.media;

    return (
         <SimpleGrid columns={[1, 2, 3]} spacing="40px" responsive>
             {animes.map(anime =>
        <Box maxW="200" borderWidth="2px" borderRadius="lg" overflow="hidden" >
            <AspectRatio maxW="200" ratio={3 / 4} align="center">
                <Image src={anime.coverImage.large} layout="fill" alt="anime coverImage"/>
            </AspectRatio>
            <Text align="center" backgroundColor="black" size="2xl" color="white" padding="2" marginTop="-0.5"> 8.9 </Text>
            <Popover placement="top-start">
                <PopoverTrigger>
                    <Box align="center">
                        <Text>{anime.title.english ? anime.title.english : anime.title.romaji}</Text>
                    </Box>
                </PopoverTrigger>
                <PopoverContent padding="3" size="md" bg="lightgrey">
                    <PopoverHeader fontWeight="bold">
                        <Box >
                            <Text>Description</Text>
                            <PopoverCloseButton background="none" />
                        </Box>
                    </PopoverHeader>
                    <PopoverBody maxWidth="500">
                    {anime.description}
                    </PopoverBody>
                </PopoverContent>
            </Popover>
        </Box >)}
        </SimpleGrid>
    )
};