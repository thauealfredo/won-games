import * as STL from './styles';

const Main = () => (
  <STL.Wrapper>
    <STL.Logo
      src="/img/logo.svg"
      alt="Imagem de um atómo - escrito ao lado Won Games"
    />
    <STL.Title>Won Games</STL.Title>
    <STL.Description>
      TypeScript, ReactJS, NextJS, Styled Components
    </STL.Description>
    <STL.Logo
      src="/img/hero-illustration.svg"
      alt="Desenvolvedor na frente do comptutador"
    />
  </STL.Wrapper>
);

export default Main;
