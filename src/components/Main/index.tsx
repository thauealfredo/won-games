import * as STL from './styles';

const Main = ({
  title = 'React Avançado',
  description = ' TypeScript, ReactJS, NextJS, Styled Components'
}) => (
  <STL.Wrapper>
    <STL.Logo
      src="/img/logo.svg"
      alt="Imagem de um atómo - escrito ao lado Won Games"
    />
    <STL.Title>{title}</STL.Title>
    <STL.Description>{description}</STL.Description>
    <STL.Logo
      src="/img/hero-illustration.svg"
      alt="Desenvolvedor na frente do comptutador"
    />
  </STL.Wrapper>
);

export default Main;
