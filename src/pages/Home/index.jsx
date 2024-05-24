import { Container, Content } from './styles'

import { Note } from '../../components/Note'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'

export function Home() {
  return (
    <Container>
    <Header />

      <Content>
        <Section title="Meus Filmes">
          
          <Note data={{
            title: 'React',
            tags: [
              { id: '1', name: 'react' },
              { id: '2', name: 'rocketseat' }
            ]
          }}
          />
        </Section>
      </Content>
    </Container>
  )
}