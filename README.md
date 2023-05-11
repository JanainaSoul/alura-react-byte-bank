# Aprendizados

01 - Styles Conponents

Como instalar o Styled Components dentro do projeto

Como criar um componente com o Styled Components

Sobre a geração automática de classes

Como transferir código CSS para meu componente estilizado

02 - Topicos basicos

Usando o reset global do projeto com o Styled Components

Criando estilos globais para a aplicação

Importando fontes do google para o projeto

Criando variáveis para cores do projeto

Utilizando propriedades em Componentes estilizados

03 - Refatorações

Porque usar inline styles é algo ruim 

Como usar Heranças de estilo

Sobre possíveis problemas de performance caso um Styled Component seja declarado dentro de um outro componente React

Como tratar de media queries dentro dos componentes estilizados

# Para saber mais

Problemas de Perfornmance
PRÓXIMA ATIVIDADE

Sempre que possível devemos evitar colocarmos a declaração de componentes dentro do método render dentro de componente baseados em classes e no caso de componentes funcionais não devemos declarar um componente dentro do outro.

Isso porque, caso um componente seja declarado dentro do método render ou dentro de um outro componente funcional ele será re-declarado a cada nova renderização e o React não conseguirá fazer cache desse componente, o que pode atrasar e muito a renderização da página.

Por isso, lembre-se de declarar seus componentes e styled components fora dos métodos de renderização do React.

Para saber mais leia esse pedaço da documentação do Styled components -> https://styled-components.com/docs/basics#define-styled-components-outside-of-the-render-method
