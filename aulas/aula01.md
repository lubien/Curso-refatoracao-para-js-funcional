## Aula 1 -Intro

### Funçoes

O algoritmo mais basico que aprendemos na faculdade é o de testar uma idade.

Mais facil mostrar do que falar:

```js

var idade = 19

if ( idade >= 18 )
  return "Eh maior de idade"
else
  return "Eh menor de idade"

```

Pense comigo:

> Quando vc testa algo qual a resposta que vc espera?

> **Se é verdadeiro ou falso.**

```js

const idade = 19

const ehMaior = ( idade ) => idade >= 18 

ehMaior( idade )
  ? "Eh maior de idade"
  : "Eh menor de idade"

```

```js

const idade = 19

const ehMaior = ( idade ) => idade >= 18 
const escreveEhMaior = () => "Eh maior de idade"
const escreveEhMenor = () => "Eh menor de idade"

ehMaior( idade )
  ? escreveEhMaior()
  : escreveEhMenor()

```

> Sabe por que dessa forma é melhor??

> Simples, mostrarei com código!

Vamos pensar que precisamos testar a idade de um grupo de pessoas:

```js

const idades = [ 4, 5, 8, 17, 18, 19, 666 ]

const ehMaior = ( idade ) => idade >= 18 
const escreveEhMaior = () => "Eh maior de idade"

const maiores = idades.filter( ehMaior )

console.log( escreveEhMaior(), maiores.join(', ') )

```

E agora no modo imperativo:

```js
const escreveEhMaior = () => "Eh maior de idade"

const idades = [ 4, 5, 8, 17, 18, 19, 666 ]
let maiores = []

for (let i = 0; i < idades.length; i++ ) {
  if ( idades[ i ] >= 18 ) 
    maiores.push( idades[ i ] )
}

console.log( escreveEhMaior(), maiores.join(', ') )

```

> Percebeu qual o problema com o código acima mesmo ele dando o mesmo resultado?

Fora que podemos refatorar nosso código para deixa-lo mais genérico para que possa ser reusado em outros contextos, por exemplo:


```js

const ages = [ 4, 5, 8, 17, 18, 19, 666 ]

const not = ( something ) => ! something
const isBiggerThan = ( y, not ) => ( x ) => 
  ( not ) ? not( x > y ) : x > y

const isBiggerThan8 = isBiggerThan( 8 )
const isLowerThan8 = isBiggerThan( 8, not )
const bigger = ages.filter( isBiggerThan8 )
const lower = ages.filter( isLowerThan8 )

console.log( bigger )
// [ 17, 18, 19, 666 ]
console.log( lower )
// [ 4, 5, 8 ]

```

> Percebeu a malandragem???

Fiz apenas como exemplo, pois normalmente nao fazemos a negaçao dessa forma. Entao aguarde que ainda chegaremos la!

Depois de saber disso vou demonstrar como pensar em reduzir um problema q pode até parecer simples, como a validaçao de um número primo

<br>
<br>

### Aula 1 - Resolvendo um problema

Preciso testar se os números 10.002 e 10.003 s4o primos.

<br>


Eu SEMPRE inicio meu pensamento para solucionar algo pelos conceitos envolvidos, os quais vc consegue ler e já entender.

Exemplo:

> O que é um número primo?

> "...um número natural primo tem unicamente dois divisores naturais distintos: o número um e ele mesmo"

fonte: [https://pt.wikipedia.org/wiki/N%C3%BAmero_primo](https://pt.wikipedia.org/wiki/N%C3%BAmero_primo)

Com isso podemos inferir que:

> Ele só é divisível por ele mesmo e por 1.

Entao o algoritmo para sabermos isso eh BEM simples:

```

Pego o número e testo se a divisao deles por TODOS seus
antecessores, menos o 1, retorna 0 em algum momento.

Se retornar eh pq esse número tem divisor entre ele e o 1,
logo ñ é primo!

Se ñ achar nenhum é primo!

```

Vejamos isso em JS comum:

```js

function isPrime(num) { 
  for (let i = num - 1; i >= 1; i--) {
    if(num % i === 0) {
      console.log('\n')
      console.log(num + ' é divisível por: ', i)
      return false;
    }
  }
  return true;
}


```

Logo isso nos remete a outros 2 conceitos numéricos, um número pode ser par ou ímpar, correto???

Para um número ser par ele precisa ser o que?

> **Divisível por 2!**

Entao QQUER número par ...


<br>
<br>
<br>

> Ñ pode ser primo!


> **Nopzzz!** Nem todos.

Pense comigo: o 2 é divisível por ele e por 1. Logo **ele tb é primo!**

Levando isso em consideração já temos nossa primeira regra de validaçao e ñ apenas de validaçao, me acompanhe.

Se formormos testar 2 números para isso:

- 10.002
- 10.003

> **Para o 10.003 iremos fazer 10.000 operações!!!** 

Lembrando que na verdade cada operação são 2:

- a divisão/mod
- a comparação

Fora a decrementação.

Adicionando essa regra no código imperativo:


```js

function isPrime(num) { 
  // se for par E não for 2
  if ((n % 2) === 0 && n !== 2)
  for (let i = num - 1; i >= 1; i--) {
    if(num % i === 0) {
      console.log('\n')
      console.log(num + ' é divisível por: ', i)
      return false;
    }
  }
  return true;
}


```

<br>
**Agora quero apelar para o Linus Torvalds que existe dentro de você e te perguntar:**
<br>
> O que podemos fazer para otimizar nossa função???
<br>
Para clarear sua mente você pode imaginar todos esses números como um CONJUNTO... 
<br>
Táaaaa não começarei com a Matemática (sua linda) agora, então pense que é um Array
de 10.000 números, do 10.002 até o 2.
<br>
> Com certeza podemos diminuir esse *Array* não???
<br>
Podemos iniciar pela maior divisão inteira de algo.
<br>
> Se vocé pegar um Array de 10 elementos e quiser separar ele em partes onde essas sejam as maiores possíveis e **iguais** o que fará???
<br><br>
**Logicamente dividir ele por 2. Correto?**
<br><br>
Então perceba comigo que você dividiu ALGO pelo menor inteiro possível de se 
dividir, `2`. Logo se você dividiu o TODO em 2 partes essas são as maiores possíveis.
<br>
> Por que você acha que cheguei nesse ponto???
<br><br>
Vamos lá, me acompanhe:

```
10 / 9 = ehInteiro? false
10 / 8 = ehInteiro? false
10 / 7 = ehInteiro? false
10 / 6 = ehInteiro? false
10 / 5 = ehInteiro? true
```

> E agora ficou mais fácil de perceber???

Caso você ainda não tenha inferido, nós podemos afirmar que:

> Um número **NUNCA** TEM UM DIVISOR INTEIRO QUE SEJA MAIOR QUE SUA METADE.

*ps: nem precisamos pesquisar isso para saber que está certo, né?*


Adicionando essa regra no código imperativo:


```js

function isPrime(num) { 
  // se for par E não for 2
  if ((n % 2) === 0 && n !== 2)
    return false;

  // Começaremosos as divisões a partir da sua metade
  for (var c = Math.ceil(n / 2); c >= 1; c--) {
    if(num % c === 0) {
      console.log('\n')
      console.log(num + ' é divisível por: ', i)
      return false;
    }
  }
  return true;
}

```


> Porém, entretanto, contudo, todavia, ainda podemos adicionar mais uma validação
> em cima da nossa lógica.

Para isso precisamos pensar em qual **operação matemática** pode nos fornecer uma parte inteira desse todo, pois se tivermos **uma parte inteira** isso significa que esse todo é divisível.

Se usarmos o conceito da divisibilidade, ou seja, usar a operação da divisão ,podemos inferir que próximo passo, subindo 1 nível, que
podemos analisar é...???

Antes de lhe responder vou te lembrar de algo.

> Qual é a operação que está 1 nível acima da multiplicação?

> **Potênciação**.

Mais fácil eu demontrar ela:

```

9 = 3 * 3
9 = 3 ^ 2 // 3 elevado ao quadrado

27 = 3 * 3 * 3
27 = 3 ^ 3 // 3 elevado ao cubo

```

Ou seja, a potênciação é uma sequência de multiplicações. 

Sabendo que a divisão é a operação inversa da multiplicação, podemos então definir que a operação que estamos buscando é...?

<br>
<br>


![](https://media0.giphy.com/media/l41YvrjGiI4cCJZPW/giphy.gif)
<br>
<br>

> **EXATAMENTE!** A [radiciação](https://pt.wikipedia.org/wiki/Radicia%C3%A7%C3%A3o).

Vamos analisar então como ela funciona.

```

√9 = 3 // raíz quadrada de 27
9 = 3 * 3
9 / 3 = 3 

3√27 = 3 // raíz cúbica de 27
27 = 3 * 3 * 3
27 / 3 = 9

```

> **Agora ficou fácil não?**

Se um número tem uma **raíz inteira** isso significa que ele é divisível por outro número menor do que a metade dele.

Podemos então adicionar essa regra no nosso código:


```js

function isPrime(num) { 
  // se for par E não for 2
  if ((num % 2) === 0 && num !== 2)
    return false;

  // Se um número tem uma **raíz inteira** 
  // isso significa que ele é divisível
  if (Number.isInteger(Math.sqrt(num)))
    return false;

  // Começaremosos as divisões a partir da sua metade
  for (var i = Math.ceil(num / 2); i >= 2; i--) {
    if(num % i === 0) {
      console.log('\n')
      console.log(num + ' é divisível por: ', i)
      return false;
    }
  }
  return true;
}

```



### Aula 1 - Refatorando a solução


Vamos iniciar com nosso código anterior para que possamos analisar quais partes podem ser separadas, pois cada uma validação é um teste diferente, logo tem responsabilidades diferentes.

Já iremos entender com o código:

```js

function isPrime(num) { 
  // se for par E não for 2
  if ((num % 2) === 0 && num !== 2)
    return false;

  // Se um número tem uma **raíz inteira** 
  // isso significa que ele é divisível
  if (Number.isInteger(Math.sqrt(num)))
    return false;

  // Começaremosos as divisões a partir da sua metade
  for (var i = Math.ceil(num / 2); i >= 2; i--) {
    if(num % i === 0) {
      console.log('\n')
      console.log(num + ' é divisível por: ', i)
      return false;
    }
  }
  return true;
}

```

![](http://i.imgur.com/sb3ATGA.jpg)

### Aula 1 - Exercício

Use um código seu ou procure na Internet podendo ser **QUALQUER** cálculo
que possua um *loop* pelo menos. 

Coloque ele como enunciado do exercício e logo após o seu código refatorado.

**POR FAVOR SIGA ESSE PADRÃO**



<br><br><br>
# Aula 01 - Exercício

## Código original:

```js

// code zuado aqui

```

## Código refatorado:

```js

// code da hora aqui

```

