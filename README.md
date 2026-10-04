# Garagem Clássica

Catálogo de carros clássicos feito como uma SPA (Single Page Application) com React e Vite. Projeto prático da Avaliação 1, desenvolvido no formato hackathon.

Aplicação em produção: https://carros-classicos.vercel.app/

## Sobre o projeto

A Garagem Clássica reúne 12 carros que marcaram época, divididos em 4 categorias: Nacionais, Muscle Cars, Esportivos e Luxo. Na Home a pessoa escolhe uma categoria e vê os carros em cards. Dá para favoritar os carros, acompanhar o total de favoritos no cabeçalho e filtrar a lista só com os favoritos.

## Tecnologias

- React 19
- Vite
- react-router-dom 7
- CSS puro com Flexbox
- Deploy na Vercel

## Como o projeto atende aos requisitos

| Requisito | Onde está |
|---|---|
| Componentização (pai/filho) | `src/components/` (Header, Footer, Card, CategoriaLink, BackButton) e `src/pages/` (Home, Categoria, NotFound), cada um na própria pasta, com `export default` e `import` |
| Props e `.map()` com `key` | `Card` recebe os dados do carro por props. `Categoria` e `Home` percorrem os JSON com `.map()` e usam `key` em cada item |
| Dados estruturados | `src/data/carros.json` (12 carros) e `src/data/categorias.json` (4 categorias) |
| Estado com `useState` e `onClick` | Lista de favoritos no `App.jsx` (botão Favoritar do `Card`) e filtro "Só favoritos" em `Categoria.jsx` |
| Navegação SPA | `BrowserRouter`, `Routes`, `Route`, `Link` e `NavLink`, com 3 rotas (tabela abaixo) e o componente reutilizável `BackButton` |
| Estilização com Flexbox | Um arquivo CSS por componente e página, layout com `display: flex`, `flex-wrap` e responsivo para celular |
| Controle de versão e deploy | Repositório público no GitHub e publicação na Vercel |

## Rotas

| Rota | Página |
|---|---|
| `/` | Home, com a apresentação e os botões de categoria |
| `/categoria/:slug` | Lista de carros da categoria (`nacionais`, `muscle-cars`, `esportivos`, `luxo`) ou de todos os carros (`todos`) |
| qualquer outra | Página de erro "não encontrada" |

## Como rodar

```bash
npm install
npm run dev
```

O site abre em http://localhost:5173

Outros comandos:

```bash
npm run build     # gera a versão de produção na pasta dist
npm run preview   # abre a versão de produção localmente
npm run lint      # verifica o código
```

## Estrutura de pastas

```
src/
  components/
    BackButton/      botão Voltar reutilizável
    Card/            card de carro
    CategoriaLink/   botão de categoria da Home
    Footer/
    Header/
  pages/
    Categoria/       lista de carros filtrada pela rota
    Home/
    NotFound/
  data/
    carros.json
    categorias.json
  App.jsx            rotas e estado dos favoritos
  main.jsx           ponto de entrada, com o BrowserRouter
public/
  images/            fotos dos carros
```

## Créditos das imagens

Fotos obtidas em fontes de licença livre.

| Arquivo | Carro | Link |
|---|---|---|---|---|
| fusca.jpg | Volkswagen Fusca | https://commons.wikimedia.org/wiki/Volkswagen_Type_1#/media/File:VW_K%C3%A4fer_Baujahr_1966.jpg |
| opala.jpg | Chevrolet Opala | https://commons.wikimedia.org/wiki/Category:Chevrolet_Opala_SS#/media/File:Chevrolet_Opala_SS_19744.jpg |
| brasilia.jpg | Volkswagen Brasília |  https://commons.wikimedia.org/wiki/File:Volkswagen_Passat_B1_Brazilian_version.jpg |
| maverick.jpg | Ford Maverick | https://commons.wikimedia.org/wiki/File:Ford_Maverick_(37184438473).jpg |
| mustang.jpg | Ford Mustang | https://commons.wikimedia.org/wiki/Category:Ford_Mustang_I_GT#/media/File:1965_Ford_Mustang_GT_289_Convertible.jpg |
| camaro.jpg | Chevrolet Camaro | https://commons.wikimedia.org/wiki/Chevrolet_Camaro#/media/File:1967_Chevrolet_Camaro_(2469246170).jpg |
| charger.jpg | Dodge Charger R/T |  https://commons.wikimedia.org/wiki/Category:1969_Dodge_Charger_R/T#/media/File:1969_Dodge_Charger_R_slash_T_photo-3.jpg |
| porsche-911.jpg | Porsche 911 | https://commons.wikimedia.org/wiki/Category:Porsche_911_Carrera_(classic)#/media/File:1973_Porsche_911_Carrera_RS_(63888).jpg |
| e-type.jpg | Jaguar E-Type | https://commons.wikimedia.org/wiki/Category:Jaguar_E-Type_Fixed_Head_Coupe_Series_I#/media/File:1963_Jaguar_XKE_(36361803993)_(cropped).jpg |
| corvette.jpg | Chevrolet Corvette | https://commons.wikimedia.org/wiki/Category:1954_Chevrolet_Corvette#/media/File:1954_Chevrolet_Corvette_(19050942165).jpg |
| eldorado.jpg | Cadillac Eldorado | https://commons.wikimedia.org/wiki/Category:Cadillac_Eldorado_(3rd_generation)#/media/File:Zweibr%C3%BCcken,_Cadillac_Oldtimer_vor_der_Alexanderkirche.jpg |
| 300sl.jpg | Mercedes-Benz 300 SL | https://commons.wikimedia.org/wiki/Category:Mercedes-Benz_W198_300_SL_Gullwing#/media/File:Mercedes_Benz_300SL_gullwing_1954_2993cc.jpg |
