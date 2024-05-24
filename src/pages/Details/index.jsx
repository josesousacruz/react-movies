import { Container, Links, Content } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'
import { Section } from '../../components/Section'
import { Tag } from '../../components/Tag'

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>

          <ButtonText title="Excluir nota" />

          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia accusantium, natus nobis sint obcaecati, error cumque aliquam aliquid soluta eligendi dolor eius impedit? Cupiditate voluptatum eum eaque amet expedita dignissimos.</p>
          <Section title={'Links Uteis'}>
            <Links>
              <li><a href="#">Link 1</a></li>

              <li><a href="#">Link 2</a></li>
            </Links>
          </Section>

          <Section title={'Marcadores'}>
            <Tag title="Express" />
            <Tag title="Node" />

          </Section>
          <Button title="Voltar" />

        </Content>
      </main>

    </Container>
  )
}