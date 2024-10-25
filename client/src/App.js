import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <div>Testing ChakraProvider render</div>
    </ChakraProvider>
  );
}

export default App;
