
import { Box, Button, Center, ChakraProvider,
         Input
 } from '@chakra-ui/react'
import { Card } from './components/Card';



function App() {
  return (
    <ChakraProvider>
      <Card />
    </ChakraProvider>
  );
}

export default App;
