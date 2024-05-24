import { Input } from "../../components/Input";
import { FiMail,FiLock, FiUser,FiArrowLeft } from "react-icons/fi";
import { Button } from "../../components/Button"

import { Container,Form,Background } from "./styles";

export function Singup (){
    return (
        <Container>
            <Form>
                <h1>Rocket Movies</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit!</p>

                <h2>Faça seu login</h2>

                <Input 
                placeholder="Nome"
                type="text"
                icon={FiUser}
                />
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

                <Button title={"Cadastrar"}/>

            <a href="#"><FiArrowLeft/> Voltar para o login</a>
            </Form>
            <Background></Background>
            
        </Container>
    )
}