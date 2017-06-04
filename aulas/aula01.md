# λAula01.(Como solucionar um problema)

<br>

Primeiramente venho por meio desta apresentar-lhe a Programação Funcional caso você **4ind4** ñ tenha ouvido falar, 
o que acho **muito** difícil.

<br>

> Em ciência da computação, programação funcional é um 
paradigma de programação que trata a computação como uma 
avaliação de funções matemáticas e que evita estados ou 
dados mutáveis. Ela enfatiza a aplicação de funções, em 
contraste da programação imperativa, que enfatiza mudanças 
no estado do programa.

> A definição de uma função descreve como a função será 
avaliada em termos de outras funções. 

*fonte: [(https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_funcional](https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_funcional)*
<br>
<br>
Por exemplo:

```

f(x) = x^2 + 2

```
Ela definida em termos de funções de exponenciação e adição. 
Do mesmo modo, a linguagem deve oferecer funções básicas que não requerem definições adicionais.

##### λLembrete 1

Lembre dessa parte muito bem:

> **"...a linguagem deve oferecer funções básicas que não requerem definições adicionais..."**

<br>

Logo m4is você ir4 entender o porquê.


![](http://media2.giphy.com/media/TY7dLV4kDmZSU/giphy.gif)

<br>
<br>

<br>
<br>

<hr>

![](https://i.ytimg.com/vi/21fYY_RqSmI/hqdefault.jpg)

<br>
<br>
<hr>

## λProblema.(Validar se um número é primo)

<br>
<br>

**Você deve estar pensando:**

<br>

> \- **L4 vem o Suissa com esse papo de Matem4tica, pqp!**

<br>

![](http://geradormemes.com/media/created/xecy3i.jpg)

<br>
<br>


Eu acredito, IMHO, que para você ser um bom programador precisa ter no mínimo 2 coisas que n4o 
s4o discutíveis:

- **Inglês // SIM! É obrigatório! Ou você programa em Português?**
- **Lógica // Tanto a de Programaç4o como Matem4tica**

<br>

> **Duvido você encontrar algum programador FOD4 que nao tenha esses 2.**

<br>

Vou usar esse problema **SUPER SIMPLES** para demonstrar uma forma de como resolver problemas 
baseando-se em seus conceitos e isso serve para qualquer 4rea da sua vida.


**O nosso problema é t4o simples que só precisamos testar se os números 10.002 e 10.003 s4o primos.**

<br>


> Eu **SEMPRE** inicio meu pensamento para solucionar algo pelos conceitos envolvidos.

<br>

Exemplo:

<br>

> **O que é um número primo?**

<br>

> "...um número natural primo tem unicamente dois divisores naturais distintos: o número um e ele mesmo"

fonte: [https://pt.wikipedia.org/wiki/N%C3%BAmero_primo](https://pt.wikipedia.org/wiki/N%C3%BAmero_primo)

<br><br>

Com isso podemos inferir que:

> Ele só é divisível por ele mesmo e por 1.

<br><br>

Entao o algoritmo para sabermos isso eh BEM simples:

```

Pego o número e testo se a divisao deles por TODOS seus
antecessores, menos o 1, retorna 0 em algum momento.

Se retornar eh pq esse número tem divisor entre ele e o 1,
logo ñ é primo!

Se ñ achar nenhum é primo!

```
<br>
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
<br>
Logo isso nos remete a outros 2 conceitos numéricos, **um número pode ser par ou ímpar**, correto???

Para um número ser par ele precisa ser o que?
<br><br>
> \- **Ser divisível por 2!**

<br><br>

Entao QQUER número par ...


<br>
<br>
<br>

> \- **Ñ pode ser primo!**

![](http://cs319426.vk.me/v319426206/9e01/-Vmg1dwhz5c.jpg)

<br>
<br>

> Nem todos.

<br>

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

  // Começaremos as divisões a partir da sua metade
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

  // Começaremos as divisões a partir da sua metade
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

<br>
<br>

<hr>

### λRefatorando.(4 solução)


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

  // Começaremos as divisões a partir da sua metade
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
<br>
<br>
Nosso próximo passo é retirar as funções que compõe o comportamento
 da função principal `isPrime`:
<br>

 ```js
// se for par E não for 2
const isEvenAndNot2 = ( num ) => 
  ( ( num % 2 ) === 0 && num !== 2 )
    ? true
    : false

// Se um número tem uma **raíz inteira** 
// isso significa que ele é divisível
const hasIntegerSquareRoot = ( num ) => 
  ( Number.isInteger( Math.sqrt( num ) ) )
    ? true
    : false

const isPrime = ( num) => { 

  if ( isEvenAndNot2( num ) )
    return false

  if ( hasIntegerSquareRoot(num) )
    return false
  
  let i = Math.ceil( num / 2 )
  // Começaremos as divisões a partir da sua metade
  for ( i; i >= 2; i-- ) {
    if( num % i === 0 ) {
      console.log( '\n' )
      console.log( num + ' é divisível por: ', i )
      return false
    }
  }
  return true
}

console.log('isPrime 2', isPrime(2))
console.log('isPrime 3', isPrime(3))
console.log('isPrime 4', isPrime(4))

console.log('isPrime 100002', isPrime(100002))
console.log('isPrime 100003', isPrime(100003))
console.log('isPrime 100007', isPrime(100007))

/**

» node isPrime01.js 
isPrime 2 true
isPrime 3 true
isPrime 4 false
isPrime 100002 false
isPrime 100003 true


100007 é divisível por:  1031
isPrime 100007 false


*/
```

<br>

Se os dois testes, `isEvenAndNot2` e `hasIntegerSquareRoot`, retornam `false` podemos testa-los de uma só vez:

```js
if ( isEvenAndNot2( num ) || 
    hasIntegerSquareRoot( num ) )
  return false

```
<br>

Você deve ter percebido que ñ usei o `is` na func4o `hasIntegerSquareRoot` como é usado na `isEvenAndNot2` funç4os [isInteger](http://mdn.io/isInteger), esse é um conceito que tento aplicar o m4ximo possível nos meus 
códigos que é a **semantica**

<br>
> "...o componente do sentido das palavras..."
<br>

Eu acredito que para Programaç4o Funcional é mais importante ainda pois a ela é declarativa.
<br>
> "... um programa é declarativo se descreve o que ele faz e não como seus procedimentos funcionam."

*fonte: [https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_declarativa]https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_declarativa()*

<br><br>

Logo para que você descreva algo necessariamente precisa ser sem4ntico

[tem](https://www.dicio.com.br/tem/)


[É](https://www.dicio.com.br/e-4/) vem do verbo ser. O mesmo que: acontece, está, existe, subsiste, sucede.


<br>

<br>

### λExercício

Use um código seu ou procure na Internet podendo ser **QUALQUER** cálculo
que possua um *loop* pelo menos. 

Coloque ele como enunciado do exercício e logo após o seu código refatorado.

**POR FAVOR SIGA ESSE PADRÃO**



<br><br><br>

<hr>

# Aula 01 - Exercício

## Código original:

```js

// code zuado aqui

```

## Código refatorado:

```js

// code da hora aqui

```

