import React from 'react';
import { Box, Flex, Spacer } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import './PC.scss';

const PC = () => {
  const params = useParams();

  console.log(params);
  return (
    <Box className="pc-container">
      <Flex className="info">
        <h3>
          PC: <b>{params.identifier}</b>
        </h3>
        <Spacer />
        <Box className="status">Status: O</Box>
      </Flex>

      <Box className="screen"></Box>
    </Box>
  );
};

export default PC;
