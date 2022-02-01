import {
  Box,
  Text,
  FormControl,
  FormLabel,
  Input,
  Flex,
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";

const GetUserLocation = () => {
  const [isLocationLoadeed, setIsLocationLoadeed] = useState(false);

  // useEffect(() => {
  //   axios(
  //     `https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.REACT_APP_API_KEY}`,
  //     {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   )
  //     .then((res) => {
  //       console.log(res.data);
  //       setIsLocationLoadeed(true);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <Flex width="15vw" justify="center" wrap="wrap">
      <Text>Enter your airport</Text>
      <Input
        maxLength="3"
        size="sm"
        type="text"
        placeholder="Ex: LAX"
        textTransform="uppercase"
      />
      <Button bg="green.400" mt="1rem">
        Search
      </Button>
    </Flex>
  );
};

export default GetUserLocation;
