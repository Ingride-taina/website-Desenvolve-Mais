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
CEP com Fetch e tratamento de JSON,
navegação por âncoras dentro da própria página e arquitetura SPA.
