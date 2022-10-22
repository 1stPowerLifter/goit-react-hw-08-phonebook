import {Conteiner , Title} from "./Home.styled"

export default function Home() {
  return (
    <Conteiner>
      <Title>
        Task manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </Title>
    </Conteiner>
  );
}