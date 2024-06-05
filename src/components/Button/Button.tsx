import {Button} from '@chakra-ui/react'

interface iButton {
    event: () => void;
}

export const Button_ = ({event}: iButton) => {
    return(        
        <Button            
            size='md'
            height='48px'
            width='200px'
            border='2px'
            borderColor='green.500' 
            marginTop='10px' 
            onClick={event}           
        >
            Login
        </Button>
    )
}