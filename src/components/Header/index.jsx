import { Container, Profile, Logout,Search } from './styles'
import { Input } from '../../components/Input'

export function Header() {
  return (
    <Container>
      <Logout>
        <h1>React Movies</h1>
      </Logout>

      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

      <Profile>

        <div>
          <span>Bem vindo</span>
          <strong>José Sousa</strong>
        </div>

        <img src="https://github.com/josesousacruz.png" alt="Foto do usuario" />

      </Profile>

    </Container>
  )
}