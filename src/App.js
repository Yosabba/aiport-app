import { Box, Heading, SimpleGrid, Flex } from "@chakra-ui/react";
import GetUserLocation from "./Components/GetUserLocations";
import Videonoob from "./assets/waiting.mp4";

const App = () => {
  return (
    <Flex direction="column" align="center" justify="center">
      <Box
        sx={
          {
            // position: "fixed",
            // display: "none",
            // width: "100%",
            // height: "100%",
            // top: "0",
            // left: "0",
            // right: "0",
            // bottom: "0",
            // backgroundColor: "rgba(0,0,0,0.5)",
            // zIndex: "-2",
          }
        }
      >
        <video
          autoPlay
          loop
          muted
          style={{
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            objectPosition: "center",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <source src={Videonoob} type="video/mp4" />
        </video>
        <Heading as="h1" my="4rem">
          Welcome to Airportly
        </Heading>
        <GetUserLocation />
      </Box>
    </Flex>
  );
};

export default App;
