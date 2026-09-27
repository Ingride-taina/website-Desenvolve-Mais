# Desenvolve+ (versão Next.js)

Mesma aplicação React de página única do Desenvolve+, adaptada para rodar com **Next.js**
em vez de Vite (usando o Pages Router, que é o formato mais simples do Next.js).

## Como instalar

```bash
npm install
```

## Como executar em modo de desenvolvimento

```bash
npm run dev
```

Abra `http://localhost:3000` no navegador.

## Como gerar a versão final (build)

```bash
npm run build
npm run start
```

## Estrutura de pastas

```
src/
├── pages/
│   ├── _app.js
│   └── index.js
├── componentes/
│   ├── Cabecalho.jsx
│   ├── Rodape.jsx
│   ├── Botao.jsx
│   ├── CardOds.jsx
│   ├── ListaOds.jsx
│   └── ConsultaDoacao.jsx
├── dados/
│   └── dadosOds.js
└── styles/
    └── globals.css
public/
└── img/ (imagens dos ODS e da identidade visual)
```

## O que mudou em relação à versão Vite

- `src/main.jsx` e `src/App.jsx` viraram `src/pages/_app.js` (carrega o CSS global) e
  `src/pages/index.js` (a própria página, já que a aplicação é uma página só).
- Os componentes (`Cabecalho`, `Rodape`, `Botao`, `CardOds`, `ListaOds`,
  `ConsultaDoacao`) e os dados dos ODS (`dadosOds.js`) são exatamente os mesmos
  arquivos, sem nenhuma mudança de lógica — só de pasta.
- As imagens continuam em `public/img/`, e continuam sendo referenciadas como
  `/img/nome.png`, exatamente como antes.
- Não é mais necessário nenhum passo de configuração do Vite — o Next.js já cuida do
  build e do servidor de desenvolvimento.

## Onde cada requisito da atividade foi atendido

Veja a explicação completa no README original do projeto (é a mesma aplicação, agora
rodando em Next.js): componentização, `useState`/`useEffect`, eventos (`onClick`,
`onChange`, `onSubmit`), consumo da API pública ViaCEP com Fetch e tratamento de JSON,
navegação por âncoras dentro da própria página e arquitetura SPA.
