import { Box, Center, Input } from "@chakra-ui/react";
import { MouseEventHandler, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/AppContext";
import { Card } from "../components/Card";
import DButton from "../components/DButton";
import { login } from "../services/login";
import { changeLocalStorage, getAllLocalStorage } from "../services/storage";

const Home = () => {
    const [ email, setEmail ] = useState<string>('')
    const [ senha, setSenha ] = useState<string>('')
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    useEffect(() => {
        const storedData = getAllLocalStorage();

        if (storedData){
            const parseData = JSON.parse(storedData)
            if(parseData.login) {
                setIsLoggedIn(true)
                navigate('/conta/1')
            }
        }
    }, [setIsLoggedIn, navigate])

    const validateUser = async (email: string, senha: string) => {
        const loggedIn = await login(email, senha)

        if(!loggedIn){
            return alert('Email e/ou senha inválidos')
        }

        setIsLoggedIn(true)
        changeLocalStorage({ login: true })
        navigate('/conta/1')
    }
  
    return (
        <Box padding="25px">
            <Card>
                <Center>
                    <h1>Faça o login</h1>
                </Center>
                <Input placeholder="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                <Input placeholder="password" value={senha} onChange={(event) => setSenha(event.target.value)}/>
                <Center>
                    <DButton
                        onClick={() => validateUser(email, senha)}
                    />
                </Center>
            </Card>
        </Box>
    );
}

export default Home;
