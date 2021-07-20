<h4 align="center">
  🚀 Storedux - Liven
</h4>
<h4 align="center">
 🔥 <a href="https://lucid-varahamihira-0f520f.netlify.app/">Demo</a>
</h4>

<p align="center">
  <a href="#rocket-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-project">Project info</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

<br>

## :rocket: Technologies

Project made with:

- ReactJS
- Typescript
- Styled-Components
- Redux
- Redux toolkit
- Redux persist

## 📌 Run

For run this project you nedded Git, Node.js and Yarn/Npm =)
```bash
## Clone repository
$ git clone https://github.com/lfnandoo/storedux

## Enter in repository
$ cd storedux

## Install dependences
$ yarn install

## Start dev server
$ yarn start

## Wait some seconds.
```

For run tests
```bash
## Tests
$ yarn test
```

## 💻 Project

Frontend challenge.
Estimativa: 12h
Horas trabalhadas: 16h aproximadamente

- [X] Persistência de dados no localstorage
- [X] Redux para gerenciamento global de estado
- [X] Testes unitários
- [X] Type safe com typescript
- [X] Responsividade
- [X] Paginação
- [X] Commits semânticos


## Estrutura do Projeto

```
├── public/                            - arquivos estáticos
├── src/                               - pasta com o código-fonte do projeto
  ├── containers/                      - wrappers e componentes com requests e regras de negócio
  ├── components/                      - componentes reutilizáveis por toda a aplicação
    ├── MeuComponente/
      ├── index.tsx                    - código do component
      ├── styles.ts                    - estilos do component
      ├── [component].test.ts          - testes do component
  ├── hooks/                           - custom hooks reutilizáveis por toda a aplicação
    ├── [hook].ts                      - código do hook
  ├── redux/                           - custom hooks reutilizáveis por toda a aplicação
    ├── [NomeDaStore].store.ts               - stores importante
  ├── pages/                           - páginas da aplicação
    ├── MinhaPagina/
      ├── components/                  - components específicos da página
      ├── index.tsx                    - código da página
      ├── styles.ts                    - estilos da página
      ├── [pages].test.ts              - testes da página
  ├── routes/                          - rotas da aplicação
  ├── services/                        - camada de comunicação externa da aplicação
    ├── resources                      - recursos para toda a aplicação
    ├── http-client.ts                 - cliente com a camada de comunicação externa da aplicação
  ├── global.styles/                   - estilos globais e tema do projeto
  ├── utils/                           - utils reutilizáveis por toda a aplicação
  ├── index.ts                         - ponto de partida da renderização do React
```

---

Made with 💜 by Luiz Fernando :wave: [Linkedin](https://www.linkedin.com/in/lfnandoo/)
