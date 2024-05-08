#### https://newdocs.phaser.io/docs/3.54.0/Phaser.Time.Clock
###### https://labs.phaser.io/edit.html?src=src\time\time%20scale.js

# Para executar o pedaço feito, entre nestas pastas deste repositorio e execute o index.html
![image](https://github.com/ThiagoMassenoMaciel/From-The-Ashes.github.io/assets/107934374/5bcac41c-36ee-4e00-b9c3-59dd2092e25d)

<br/><br/><br/>
# Biblioteca com exemplos do [phaser](https://labs.phaser.io/)

#
## preparar ambiente para ir aprendendo o phaser 
instalei o phaser pelo jeito npm<br/>
  `npm install phaser@v3.80.1`<br/>
<br/>
  `npm install node`<br/>
<br/>
  `npm install --global http-server`  isto n fez abrir automaticamente um site<br/>
<br/>
  //apertei no botão live server <br/>
<br/>
// usar este comando toda vez que quizer executar o servidor web https://www.npmjs.com/package/http-server<br/>
 ` npx http-server`<br/>
<br/>
<br/>
Set up webroot - o local para onde o servidor web esta olhando e poe isso no localhost no meu caso é o link  http://192.168.0.117:8080<br/>
<br/>
  add file index.html and copy from DOCUMENTACION  https://phaser.io/tutorials/getting-started-phaser3/part5 <br/>e execute `npx http-server`<br/>
  
<br/>
<br/>
<br/>
<br/>

![logo preta](https://github.com/ThiagoMassenoMaciel/From-The-Ashes.github.io/assets/107934374/77fae5f2-489c-41b6-8e6a-15b5b23d021f)
###### html<br/>
                        <a href="https://www.fontspace.com/category/deathmetal"><img src="https://see.fontimg.com/api/renderfont4/0W9qo/eyJyIjoiZnMiLCJoIjoyMDAsInciOjEwMDAsImZzIjoyMDAsImZnYyI6IiMwMDAwMDAiLCJiZ2MiOiIjRkZGRkZGIiwidCI6MX0/RnJvbSAgdGhlICBhc2hlUw/yenisack-demo.png" alt="Death Metal fonts"></a><br/>
###### Markdown for reddit and other forums.<br/>
                        [![Death Metal fonts](https://see.fontimg.com/api/renderfont4/0W9qo/eyJyIjoiZnMiLCJoIjoyMDAsInciOjEwMDAsImZzIjoyMDAsImZnYyI6IiMwMDAwMDAiLCJiZ2MiOiIjRkZGRkZGIiwidCI6MX0/RnJvbSAgdGhlICBhc2hlUw/yenisack-demo.png)](https://www.fontspace.com/category/deathmetal)<br/>



# tive uma nova ideia 
##### fazer o jogador cair em um canto aleatório 
##### ou power ups para ser coletado
###### 1. escolher 2 numeros randomicos de acordo com o tanto de linhas e colunas 
###### 2. multiplicar a coluna escolhida com as dimensões necessárias para encaixar o jogador no lugar dele

# Casos de qual regra a tela screen tem que recarregar
##### recarregar para um labirinto aleatório sempre que passar 10 segundos
##### recarregar para um labirinto aleátório somente quando achar a saida

# Dúvidas
##### quando eu tiver nas fases , os labirinto que eu passei podem ser repetidos ?
##### # não 
                        
# Motivação

É aplicar os conceitos que venho aprendendo durante minha jornada acadêmica desenvolvendo um jogo como trabalho da disciplina ESTÁGIO SUPERVISIONADO I. Eu tive a ideia do jogo aleatoriamente e gostaria de descobir como ela vai ser aplicada.

# Objetivo

É criar um jogo de labirinto , onde o jogador deve conseguir sair do labirinto achando a porta de saída. Objetivo do jogador é conseguir sair de varios labirintos em menos tempo.

# Valor Agregado

Aprender a como transformar a minha ideia em um jogo. O diferencial é a quebra de padrão em relação aos níveis onde a lógica das fases passadas pelo jogador
não tem o modo de dificuldade do jogo crescente , pois aleatoriamente qualquer fase pode ter um modo fácil , médio ou dificil .

# Estilo 
O jogador escolhe o estilo de jogo : concorrer com outros jogadores online ou concluindo as fases

## #Fases
Vai ter 3 fases para o jogador jogar . E cada fase vai ter uma quantidade de labirintos para ser passado com o tempo limitado.

## #Online
Aqui o jogador deve passar em todos os labirintos em menos tempo e concorrerá com outros jogadores. Aquele jogador que completou todos os labirintos em menos tempo vai subir no sua posição no hanking.

## #Uma ideia se caso der tempo ( ou uma versão futura)
talvez este possa ser outro tipo de jogo onde um jogador ver o outro quando no caso deles estiverem jogando o mesmo labirinto 
ou 
pode ser formado grupos de 3 jogadores onde a formula para passar de fase vai ser a pontuação do grupo , podeondo acontecer de não precisar passar todos os labirintos para conseguir subir de fase pois é em grupo

outro modo de jogo é so passa a fase 1 se conseguir passar em todos os 5 labirintos desta fase , quando passar em 1 labirinto antes de 10 segundos é acumulado 100 pontos a cada labirinto passado , e para pessoa conseguir passar da fase um ela precisa de 500 pontos , ou seja , passar obrigatoriamente os 5 labirintos em menos de 10 segundos. E a pessoa tem um limite de 10 segundos para passar em cada labirinto , se caso passar os 10 segundo e não encostar na saida vai ser recarregado a pagina do jogo para um  novo labirinto aleatorio desta mesma fase. Enquanto a pessoa não passar labirinto tal este mesmo labirinto pode vir repetido . Se a pessoa passar tal labirinto este mesmo não vai aparecer de novo e continua repetindo somente os que ainda não foi passado em 10 segundos .    
#### fase 1 
  tem que passar cada labirinto em 5 segundos
#### fase 2 
  tem que passar cada labirinto em 10 segundos
### fase 3
  tem que passar cada labirinto em 15 segudos

# Fases

## 1 
Será 2 labirintos .Cada labirintos vai ter o modo de jogo escolhido aleatoriamente: fácil , médio ou dificil e o jogador deve concluir os labirintos com o tempo limite de 30 segundos

## 2 
Serão 3 labirintos . E cada labirinto vai ter com o modo de jogo escolhido aleatoriamente e o jogador deve concluir os 3 labirintos com o tempo limite de 45 segundos

## 3 
Serão 4 labirintos com o modo de jogo escolhido aleatoriamente .O jogador deve concluir as 4 labirintos com o tempo limite de 1 minuto


# Esquema de fases

#### Som
| Descriçao 1   | Descrição 2 |
| ------------- | ----------- |
| fundo musical | a musica de fundo vai ser diferente em cada fase |
| teclado       | Cada passo que o jogador faz : < , ^ , >, v corresponde a uma nota de um instrumento e em cada fase diferente vai ser um instrumento diferente |

| Fases | Descrição |
| ----- | ----------- |
| 1     | A musica de fundo vai ser da banda Crypta - rise from the ashes e o instrumento vai ser o som de uma guitarra|
| 2     |A musica de fundo vai ser da banda Lorna Shore - from the abyses e o instrumento vai ser o som de um baixo|
| 3     | A musica de fundo vai ser da banda Suicid Silence - Unswered e o instrumento vai ser o som de bateria |


#### Modo de jogo
| Modo de fase | Descrição |
| ------------ | ----------- |
| Fácil        | Esta fase vai ter a cor das paredes do labirinto branca e o caminho por onde o jogador pode andar é preto. As paredes do labirinto vai seguir uma lógica de 5 colunas e 5 linhas . Talvez eu mude para 10 linhas e colunas|
![facil](https://github.com/ThiagoMassenoMaciel/From-The-Ashes.github.io/assets/107934374/803502c6-e5d7-4459-82e0-d335bdf2a9f3)
| Médio        |Esta fase vai ter a cor das paredes do labirinto branca e o caminho por onde o jogador pode andar é preto. Este detalhe da cor das paredes e do chão vai ficar trocando a cada 5 segundos. As paredes do labirinto vai seguir uma lógica de 10 colunas e 10 linhas .  Talvez eu mude para 15 linhas e colunas|
![medio](https://github.com/ThiagoMassenoMaciel/From-The-Ashes.github.io/assets/107934374/726132a6-8473-431b-98d3-c838e02649c1)
| Difícil      | Esta fase vai ter a cor das paredes do labirinto branca e o caminho por onde o jogador pode andar é preto. Este detalhe da cor das paredes e do chão vai ficar trocando a cada 5 segundos . A cada 30 segundos a bolinha que é o buraco para sair do labirinto vai mudar de lugar. As paredes do laberinto vai seguir uma lógica de 20 colunas e 20 linhas .  |
![dificil](https://github.com/ThiagoMassenoMaciel/From-The-Ashes.github.io/assets/107934374/1e689988-16ae-4b78-bcd6-496075e51608)

[![Death Metal fonts](https://see.fontimg.com/api/renderfont4/0W9qo/eyJyIjoiZnMiLCJoIjoyMDAsInciOjEwMDAsImZzIjoyMDAsImZnYyI6IiMwMDAwMDAiLCJiZ2MiOiIjRkZGRkZGIiwidCI6MX0/RnJvbSAgdGhlICBhc2hlUw/yenisack-demo.png)](https://www.fontspace.com/category/deathmetal)

## Esquema de Pontuação
O score vai ser de acordo com a quantidade de labirintos passadas pelo jogador por minuto

## versão 1.0
| Precisão | Score |
| ----- | ----------- |
| Passar 1 labirinto no tempo <= 30 segundos  | 1 pts |
| Passar 2 labirintos no tempo <= 30 segundos | 5 pts |
| Passar 3 labirintos no tempo <= 30 segundos | 10 pts |
| Passar 4 labirintos no tempo <= 30 segundos | 20 pts |
| Passar 1 labirinto no tempo <=  20 segundos | 2 pts |
| Passar 2 labirintos no tempo <= 20 segundos | 7 pts |
| Passar 3 labirintos no tempo <= 20 segundos | 15 pts |
| Passar 4 labirintos no tempo <= 20 segundos | 25 pts |
| Passar 1 labirinto no tempo <=  10 segundos | 3 pts |
| Passar 2 labirintos no tempo <= 10 segundos | 8 pts |
| Passar 3 labirintos no tempo <= 10 segundos | 17 pts |
| Passar 4 labirintos no tempo <= 10 segundos | 50 pts |

## versão 2.0
| Precisão | Score |
| ----- | ----------- |
| Passar 1 fases em 1 minuto | 1 pts |
| Passar 2 fases em 1 minuto | 5 pts |
| Passar 3 fases em 1 minuto | 10 pts |
| Passar 4 fases em 1 minuto | 20 pts |
| Passar 5 fases em 1 minuto | 40 pts |
| Passar 6 fases em 1 minuto | 80 pts |
| Passar 6 fases em 1 minuto | 80 pts |

## versão 3.0
o jogador vai jogar em grupo de 3 jogadores juntos em tempo real, passando pelos mesmos labirintos e a pontuação do grupo vai ser a pontuação individual somada neste irei incluir outro tipo de pontuação que vai ser baseado no labirinto que foi passado facil = +1 ponto , medio = +2 pontos , dificil = +3 pontos

| Precisão | Score |
| ----- | ----------- |
| Passar 1 labirinto fácil | 1 pts |
| Passar 1 labirinto médio | 2 pts |
| Passar 1 labirinto dificil | 3 pts |
| ----- | ----------- |
| Passar 1 fases em 1 minuto | 1 pts |
| Passar 2 fases em 1 minuto | 5 pts |
| Passar 3 fases em 1 minuto | 10 pts |
| Passar 4 fases em 1 minuto | 20 pts |
| Passar 5 fases em 1 minuto | 40 pts |
| Passar 6 fases em 1 minuto | 80 pts |
| Passar 6 fases em 1 minuto | 80 pts |

# Game over
#### Fases 1 2 3
                        se a pessoa não conseguir passar em alguma labirinto no tempo de limite da fase vai dar game over para o jogador.

#### Online
                        aqui não tem game over 
                        
# #######Placares########
vai ter um diferente para cada fase e a ordem vai ser baseado em quem passou o labirinto mais rápido


# Detalhes de implementação do movimento
####    ArrowUp    ^ move para cima 
####    ArrouDown  v move para baixo
####    ArrowLeft  < move para esquerda
####    ArrowRight < move para direita

## Requisitos
O jogador precisa cadastrar um nome para ser armazenado sua posição no hanking
Para aparecer no hanking a pessoa tem que estar entre os top 3 melhores
Para ganhar score o jogador deve passar no mínimo em um labirinto em no máximo 1 minuto

### Épicos/Funcionalidades

1. `Home inicial`
   Tutorial;
   Começar;
   Placares;
   Créditos

2. `Criação de usuário`
  Aqui o jogador escolhe o nome dele
  
3. `Seleção do estilo do jogo `
   Fases;
   Online;
4. `Seleção de Fase`
   As fases vão ler liberadas no decorrer que a pessoa for passando .
   Os labirintos muda com o modo de jogo diferente : fácil , médio ou difícil;
   Sons de toque e de trilha sonora diferente de acordo com a fase e o movimento do jogador ;
5. `Seleção online`
   Todos os labirintos serão carregados para o jogador em ordem aleatória;

6. `Placares`
   Cada estilo de jogo tera seu hanking das 3 melhores  pontuações
   TOP 3 jogagores com maior score: Nome do jogador (10 letras - Tempo concluido os labirintos);
7. `Créditos`
   Créditos;

8. `Som`
   editar as musicas pelo app [tirando vocal e deixando so a trilha sonora]{https://youtu.be/Hj5f2JnbPgQ?si=QOxwRU_ks5ajmBzE};
   minha ideia é fazer misturado DEIXAR A MAIORIA DA MUSICA SO O INSTRUMENTAL e alguns trechos de instrumental mais o vocal;
   Músicas ["[Rise from the ashes](https://youtu.be/rvYn45PfdcY?si=gKt0P_zg8uU7RtOp)" essa musica no final dela onde aparece os agradecimentos tem uma trilha sonora que posso colocar no jogo enquanto o usuario fica nas telas ;
   "[Of the abyses (pro)](https://youtu.be/IhoKdEx2pjI?si=A9ZgfJrEF-vyPXXl)";
   "[Unswered](https://youtu.be/G9DGjGot5do?si=5gFXOVx9kAx29XsX)";
   outras[terror](https://youtu.be/gV3uMuGwQF0?si=-Fb5e0R28ZLaPr0j);
   [terror](https://youtu.be/zVqBpsTuPLc?si=d-9eseNop9b4d4La) ;
   [pro](https://youtu.be/lugARKhBtX4?si=BR-6e_S6aZuw8d8W)"];

### Personas

1. **`<Jogador#1>`** - `<o mesmo>

## Protótipos de Tela

![image](https://github.com/ThiagoMassenoMaciel/From-The-Ashes.github.io/assets/107934374/f1fe526a-0165-48a6-be74-3a5fc7848cbb)


[![Death Metal fonts](https://see.fontimg.com/api/renderfont4/0W9qo/eyJyIjoiZnMiLCJoIjoyMDAsInciOjEwMDAsImZzIjoyMDAsImZnYyI6IiMwMDAwMDAiLCJiZ2MiOiIjRkZGRkZGIiwidCI6MX0/RnJvbSAgdGhlICBhc2hlUw/yenisack-demo.png)](https://www.fontspace.com/category/deathmetal)

## Instalação
----------------pedaço a fazer 
Valide se tem [Node.js](https://nodejs.org) instalado.

Clone esse repositório e entre na pasta

```
npm i
```

### Rode o development server

```
npm start
```

Para visualizar localmente: http://localhost:8080/.

### Crie uma production build

```
npm run build
```

## Tecnologias e Ferramentas utilizadas
1. Phaser 3 - GameEngine;
2. JavaScript - Linguagem de programação fundamental;

*
| Atividade | prioridade |
| ----- | ----------- |
| `Transformar matriz em labirinto`     | não depende de outra atividade |
| `A lógica dos movimentos com o botão enter`     | não depende de outra ativiade |
| `cronometro das fases` | depende de outra atividade |
| `hanking das fases` | depende de outras atividades |
| `trocar cor do chão e parede do labirinto` | depende de outra atividade |
| `trocar o burado da saída do labirinto de lugar` | depende de outra atividade |
| `cronometro p/ troca de cor e de buraco da saída`|  depende de outra atividade |
*

### 27 fev - 70' editando readme 
### 28 fev - 50' editando readme e escolhendo as musicas
### 3 mar  - 4h30' entendendo o exemplo do [Ansiwiz](https://youtube.com/playlist?list=PLDyH9Tk5ZdFzEu_izyqgPFtHJJXkc79no&si=BRRccQ-yDsZSClVp)
### 4 mar  - 2h35' entendnedo o resto do Ansiwiz
### 5 mar  - 1h    mudando regras do jogo no readme
### 5 mar  - 2h20' fazendo as telas no [figma](https://www.figma.com/file/aMpp40Pn8cx7nd4LXMELJt/Untitled?type=design&node-id=0%3A1&mode=design&t=VNGBI0FCcMe1pED6-1)
### 5 mar  - 31'   fazendo o protótipo das telas 
### 5 mar  - 30'   desafio1
### 6 mar  - 53'   desafio2
### 7 mar  - 1h    desafio2
### 9 mar  - 3h28' praticando o exemplo do [ansiwiz](https://youtube.com/playlist?list=PLDyH9Tk5ZdFzEu_izyqgPFtHJJXkc79no&si=BRRccQ-yDsZSClVp) para resolver o desafio1 - até vid 3
### 10 mar - 1h  feito desafio1 com matriz fácil
### 10 mar - 2h30      desafio1 desenhando matriz média e dificil
### 10 mar - 1h46      desafio1 feito labirintos medium e dificil
### 10 mar - 1h50      feito 4 labirintos medium
### 10 mar - 40'        testando todos os labirintos
### 11 mar - 1h10'      feito 4 labirintos hard
### 11 mar - 30'        montado o readme das atividades

### 12 mar - 1h22       Atv 1 feito 4 labirintos facil e definido todos os pontos inicial e final de cada labirinto
### 13 mar - 1h45       Atv 2 feita - Colocar as bordas de cada labirinto
### 14 mar - 1h13       Atv 3 feita - colocar jogador mno labirinto + bug
### 15 mar - 40'        Atv 4 feita - animar o jogador e refiz os sprites
### 16 mar - 11'        Atv 5 e 6 feitas - adicionar e animar o buraco saida
### 16 mar - 1h40'      Atv 6.0    6.1    6.2  bug texture not found "jogador"
### 16 mar - 13'        Atv 6.2  bug ajeitado"
### 16 mar - 1h11'      Atv 6.2  pontos do modo facil e medium concluido"
### 18 mar - 56'        Atv 6.2  pontos do modo dificil concluido"
### 18 mar - 24'        Atv 7 começei
### 19 mar - 2h30       Vendo exemplos do [phaser](https://github.com/ThiagoMassenoMaciel/exemplo-simples-tutorial-do-phaser.github.io) e parei no ex7 
### 22 mar - 26'        Atv 7 continuação
### 22 mar - 1h15'      Atv 7 continuação -bug so move 1 px
### 23 mar - 40'        Atv 7 continuação -bug fixed e atividade concluida
### 23 mar - 30'        Atv 7 bug do eixo Y fixed
### 23 mar - 1h27'      Atv 7 feitos lab facil( 1 2 3)
### depois deste commit , tirei os comentarios
### 31 mar - 3h23'      Atv 7 feitos lab facil( 4 5 ) lab medium( 1 2 3 4 5 )  lab hard( 1 )
###  1 abr - 1h21'      Atv 7 feitos lab hard( 2 3 4 5 )
###  8 abr - 1h         Atv 7.4 feito
### 15 abr - 1h30'      Atv 8 começei e terminei so fiz de um labirinto
### 16 abr - 10'        Atv 8.1 fiz e percebi que n valia mt apena pois aparecia uma lista
### 17 abr - 40'        Atv 10 começei , fiz só easy
### 18 abr - 40'        Atv 10 mantive , easy 1bug + 1fixed
### 19 abr - 16'        Atv 10 terminei todos labirinto easy
### 20 abr - 44'        Atv 10 terminei todos labirinto medium e deixei clean root foulder
### 22 abr - 1h27'      Atv 10 terminei todos labirinto hard +bug not fixed
### 25 abr - 42'        Atv 10 travei no bug
### 30 abr - 1h         Atv 10 travei no bug que é a estrutura array com todos os objetos labirinto
### 2  mai - 2h         Atv 10 organizado toda estrutura [link exemplo](https://github.com/ThiagoMassenoMaciel/object) + bug da posição n atualizada
### 4  mai - 3h         Atv 10 organizado toda estrutura + centratilando algumas info + bug de n poder reutilizar valor de propriedade - fiz até medium_2
### 5  mai - 3h         Atv 10.2 feita e + bug n processa todos os blocos parede 
# para deixar a lógica de so aparecer o fácil unica vez é so dentro do update() atualizar a arrayNiveis quando zerar para ficar igual a [1,2]
### 5  mai - 1h30'      Atv 10 concluidíssima
### 6  mai - 24'        Atv 11 feito a função que muda de cor + bug
### 6  mai - 1h24'      10.1 adicionAR UM RELOGIO DE TEMPO NA TELA
### 7  mai - 40'        10.2 fixed O BUG DISABLE REMOVE 
### 7  mai - 2h'        Tudo acoplado no mesmo file
### 7  mai - 15'        11.trocar a cor do do chão pela parede.   