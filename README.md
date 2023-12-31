# coopercarga-challenge

### 1 - Qual a saída do algoritmo?
- A saída do algoritmo é uma paginação de números primos, onde em cada página será exibido 50 linhas com 4 colunas, na primeira coluna terá os 50 primeiros números primos, na segunda coluna serão de 51-100 e assim por diante, finalizando a primeira página com o  200º número primo.
Cada página exibe 200 Números primos, até atingirmos um total de 1000 números, finalizando na página 5.

### 2 - Você julga que este código é limpo?
- O método recebe um parametro inutilizado.
- declaração de constantes com `let`, por exemplo `let M = 1000`, sendo que tal valor não é alterado, deveria ser usado `const`.
- criação de váriaveis `let` inicializadas com valores não utilizados para logo abaixo fazer reatribuição destes.
- declaração de váriaveis com nomes não descritivos, dificultando a leitura do código.
- Na linha 35 há uso de `while` desnecessário, podendo muito bem ser uma validação com `if`, seguido de um `else if`
- Na linha 38, idealmente usaria uma comparação estrita (`===`) ao invés da comparação ampla.
- Na linha 57, inicializar a variavel de controle diretamente dentro do loop `for` faria mais sentido, sendo ela usada somente neste escopo. E neste mesmo loop, a condição de quebra poderia ser simplificada, deixando `C < CC`.
- No arquivo `refactor2.js`, foi trocado a validação se o número é um número primo, removendo as criações de `Array`, removendo dois loops `while`, tornando de mais facil leitura. E separado a função em outras menores, dando responsabilidades únicas para cada.

### 3 - Refatore o código do arquivo utilizando conceitos de Clean Code, de maneira que o código se torne mais limpo, legível e de fácil manutenção.
- [Refactor 1](https://github.com/gabrielraeder/coopercarga-challenge/blob/main/doSomething/refactor1.js)
- [Refactor 2](https://github.com/gabrielraeder/coopercarga-challenge/blob/main/doSomething/refactor2.js)

### 4 - Explique como o conceito de middlewares no Express.js pode ser utilizado para evitar repetição de código.
- Sendo uma função que possui acesso aos objetos de requisição (req), resposta (res) e chamada da próxima (next), nos dá liberdade de reutilizar o código escrito dentro deste em mais de uma rota. Isso nos dá liberdade de fazer a mesma ação em multiplas situações invocando este mesmo middleware. Aplicando principio de responsabilidade única, nos dá um código mais organizado e evita a repetição desnecessária de lógica em várias partes da aplicação.

### 5 - Tendo em vista duas abordagens de backend: uma utilizando um ORM (como Prisma e Sequelize) e outra utilizando apenas um query builder (como o Knex), quais as vantagens e desvantagens de cada abordagem?
#### ORMs
##### Vantagens
- trabalhar com objetos e classes em vez de escrever SQL diretamente.
- criar e atualizar o esquema do banco de dados por meio de código.

##### Desvantagens
- A curva de aprendizado pode ser íngreme para aprender os detalhes do ORM e suas funcionalidades.

#### Query builder
##### Vantagens
- Sintaxe Mais Próxima do SQL.

##### Desvantagens
- manutenção do esquema do banco de dados deve ser feita manualmente.

### 6 - Faça uma query em SQL que traga em cada linha o nome de jogadores que se enfrentaram mais de duas vezes, onde em cada partida a soma dos pontos foi maior que 30 e a duração do jogo foi maior que 90 minutos. Não podem haver resultados repetidos.
- [Query SQL](https://github.com/gabrielraeder/coopercarga-challenge/blob/main/query.sql)

### 7 - Dado o array no arquivo data.json, crie um interface em React.js, CSS e Bootstrap mostre os itens como se fosse um marketplace de roupas.

- [Store Code](https://github.com/gabrielraeder/coopercarga-challenge/blob/main/store)
- [Deploy](https://coopercarga-challenge.vercel.app/)
- [Projeto similar](https://gabrielraeder.github.io/online-store-project/)