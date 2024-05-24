import { Input } from "../../components/Input";
import { FiMail,FiLock } from "react-icons/fi";
import { Button } from "../../components/Button"

import { Container,Form,Background } from "./styles";

export function Singin (){
    return (
        <Container>
            <Form>
                <h1>Rocket Movies</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>

                <h2>Faça seu login</h2>

                <Input 
                placeholder="Email"
                type="text"
                icon={FiMail}
                />
                <Input 
                placeholder="Password"
                type="password"
                icon={FiLock}
                />

                <Button title={"Entrar"}/>

            <a href="#">Criar conta</a>
            </Form>
            <Background></Background>
            
        </Container>
    )
}