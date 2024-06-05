import { Box, Center, Input} from '@chakra-ui/react'
import { Header } from './Header/Header'
import { Button_ } from './Button/Button';
import { login } from '../services/login';

export const Card = () => {
    return(
        <Box minHeight='100vh' backgroundColor='#D8BFD8' padding='25px'>
        <Box backgroundColor='#DCDCDC' borderRadius='25px' padding='15px'>
          <Center>
            <Header />
          </Center>          
          <Input placeholder="email" marginTop='10px' />
          <Input placeholder="password" marginTop='10px' /> 
          <Center>
            <Button_ event={login}/> 
          </Center>                  
        </Box> 
      </Box>
    )
}