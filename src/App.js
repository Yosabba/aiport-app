import { Box, Heading, SimpleGrid, Flex } from "@chakra-ui/react";
import GetUserLocation from "./Components/GetUserLocations";
import Videonoob from './assets/waiting.mp4';

const App = () => {
  //https://photos.google.com/search/_tra_/photo/AF1QipPFsO_8rmoLmp5vbPSI9-L07np1JbNRcu_0VAcO
  return (
    <Flex direction="column" align="center" justify="center" >
      <video autoPlay loop muted
      style={{
        width: "100vw",
        height: "100vh",
        objectFit: "cover",
        objectPosition: "center",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1
      }}>
        <source
          src={Videonoob}
          type="video/mp4"
        />
      </video>
      <Heading as="h1" my="4rem">
        Welcome to Airportly
      </Heading>
      <GetUserLocation />
    </Flex>
  );
};

export default App;
