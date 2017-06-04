# λAula01.(Como solucionar um problema)

Provavelmente esse curso seja bem diferente do que você est4 acostumado, <br> 
pois eu irei ensinar a você pensar de uma forma diferente para solucionar seus problemas.

<br> 

Quem sabe você ache chato no início mas bote fé que **eu garanto que você ir4 aprender!**<br>
Por isso você ir4 ouvir **muitoooooo** uma palavra  durante esse curso: **inferir**.

Creio que sua própria definição diz tudo:

<br> 

> "Deduzir; concluir por inferência ou dedução, partindo de indícios, fatos ou raciocínios"

*fonte: [https://www.dicio.com.br/inferido/](https://www.dicio.com.br/inferido/)*

<br> 

![](https://s-media-cache-ak0.pinimg.com/236x/e7/f0/c4/e7f0c4cda21af9a6c5562eec0811eead.jpg)

<br>
<br>

Após o devido aviso venho por meio desta apresentar-lhe a Programação Funcional  
<br> caso você **4ind4** não tenha ouvido falar, o que acho **muito** difícil.

<br>

> Em ciência da computação, programação funcional é um <br>
paradigma de programação que trata a computação como uma <br>
avaliação de funções matemáticas e que evita estados ou <br>
dados mutáveis. Ela enfatiza a aplicação de funções, em <br>
contraste da programação imperativa, que enfatiza mudanças <br>
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

Ela é definida em termos de funções de exponenciação e adição.<br> 
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

Eu acredito, IMHO, que para você ser um bom programador precisa ter
<br> no mínimo 2 coisas essênciais: 


<br>
<br>

- **Inglês** // SIM! É obrigatório! Ou você programa em Português?
- **Lógica** // Tanto a de Programação como Matem4tica

<br><br>

> **Duvido você encontrar algum programador FOD4 que nao tenha esses 2.**

<br><br>

Vou usar esse problema **SUPER SIMPLES** para demonstrar uma forma
<br> de como resolver problemas baseando-se em seus conceitos e 
<br> isso serve para qualquer 4rea da sua vida.

<br>

**O nosso problema é tão simples que só precisamos testar se os**<br> 
**números 10.002 e 10.003 são primos.**

<br>

> Eu **SEMPRE** inicio meu pensamento para solucionar algo pelos conceitos envolvidos.

<br>

Exemplo:

<br>

> **O que é um número primo?**

<br>

> "...um número natural primo tem unicamente dois divisores naturais 
<br>distintos: o número um e ele mesmo"

fonte: [https://pt.wikipedia.org/wiki/N%C3%BAmero_primo](https://pt.wikipedia.org/wiki/N%C3%BAmero_primo)

<br>

Com isso podemos **inferir** que:

> Ele só é divisível por ele mesmo e por 1.

<br>

Entao o algoritmo para sabermos isso eh BEM simples:

```

Pego o número e testo se a divisao dele por TODOS seus
antecessores, menos o 1, se o resto for 0 em algum momento
é pq esse número tem divisor entre ele e o 1,

Logo não é primo!

**Se não achar nenhum é primo!**

```
<br>

Esse é um padrão que **SEMPRE** uso nas minhas funções de teste/validação.
Quando vamos testar se alguma coisa é algo esse teste só **deve** retornar `true` ou `false`.


##### λLembrete 2

Por isso eu deixo todos os testes que **invalidem** o que queremos testar
<br> no topo para que a última coisa que esse teste faça é retornar `true`
<br> porque se ele passou pela bateria de testes nós garantimos que aquele
<br> valor é realmente o que queremos.

<br>

Vejamos isso em JS imperativo:

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

Logo isso nos remete a outros dois conceitos numéricos, 
<br>**um número pode ser par ou ímpar**, correto???

Para um número ser par ele precisa ser o que?
<br><br>

> \- **Ser divisível por 2!**

<br><br>

Entao qualquer número par não pode...


<br>
<br>
<br>

> \- **não pode ser primo!**

![](http://cs319426.vk.me/v319426206/9e01/-Vmg1dwhz5c.jpg)

<br>
<br>
<br>

> TE ENG4NEI! 
> Nem todos.

<br>

Pense comigo: 

> O 2 é divisível por ele e por 1. 
> Logo **ele tb é primo!**


<br>

Levando isso em consideração já temos nossa primeira regra de validação
<br> e não apenas de validação, me acompanhe.

Se formormos testar dois números para isso:

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
<br>

**Agora quero apelar para o Linus Torvalds que existe dentro de você e te perguntar:**

<br>

> O que podemos fazer para otimizar nossa função???

<br>

Para clarear sua mente você pode imaginar todos esses números como um [CONJUNTO](https://pt.wikipedia.org/wiki/Conjunto)... 

<br>

Tááááááá não começarei com a Matemática (sua linda) agora, então pense 
<br>que é um Array de 10.000 números, do 10.002 até o 2.

<br>

> Com certeza podemos diminuir esse *Array* não???

<br>

Podemos iniciar pela maior divisão inteira de algo.

<br>
<br>

![https://i.imgflip.com/hs5ac.jpg](https://i.imgflip.com/hs5ac.jpg)

<br>
<br>

> \- **WTF tio Suiss4?!!**

<br>
<br>

> Se vocé pegar um *Array* de dez elementos e quer separar ele em partes<br> 
as quais **sejam iguais e as maiores possíveis**. 

> O que fará???

<br><br>

**Logicamente dividir ele por 2. Correto?**

<br><br>

Perceba comigo que se você dividir **ALGO** pelo menor inteiro possível, de se dividir, o 2.<br>
Então se você dividiu **ALGO** em duas partes iguais essas são necessariamente as maiores<br> possíveis. Bem lógico, né?

<br>

> Por que você acha que cheguei nesse ponto???

<br><br>

Vamos lá, me acompanhe:

```

10 / 9 = isInteger? false
10 / 8 = isInteger? false
10 / 7 = isInteger? false
10 / 6 = isInteger? false
10 / 5 = isInteger? true

```

<br>

> Agora ficou mais fácil de perceber???

<br>

Caso você ainda não tenha inferido, vou lhe ajudar. 

<br>
<br>

Podemos afirmar que:

<br>

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
<br>

**Porém, entretanto, contudo, todavia, ainda devemos adicionar mais uma validação em cima da nossa lógica.**

<br>

Para isso precisamos pensar em qual **operação matemática** pode nos fornecer uma parte inteira desse todo, pois se tivermos **uma parte inteira** isso significa que esse todo é divisível.

Se usarmos o [conceito da divisibilidade](http://www.dicionarioinformal.com.br/divisibilidade/), ou seja, usar a operação da divisão, podemos **inferir** que o próximo passo, subindo um nível de complexidade, que podemos analisar é...???

<br>

Antes de lhe responder vou te lembrar de algo.


<br>

> Qual é a operação que está um nível acima da multiplicação?


<br>

> **É a potenciação**.


<br>
<br>

Mais fácil eu demonstrar ela:

```

9 = 3 * 3
9 = 3 ^ 2 // 3 elevado ao quadrado

27 = 3 * 3 * 3
27 = 3 ^ 3 // 3 elevado ao cubo

```


<br>

Ou seja, a potenciação é uma sequência de multiplicações. 

Sabendo que a divisão é a operação inversa da multiplicação, podemos então **inferir** que a operação que estamos buscando é...?

<br>
<br>


![](https://media0.giphy.com/media/l41YvrjGiI4cCJZPW/giphy.gif)

<br>
<br>
<br>
<br>

> **EXATAMENTE!** A [radiciação](https://pt.wikipedia.org/wiki/Radicia%C3%A7%C3%A3o) também conhecida como raíz.

<br>
<br>

Vamos analisar como ela funciona.

```

√9 = 3 // raíz quadrada de 27
9 = 3 * 3
9 / 3 = 3 

3√27 = 3 // raíz cúbica de 27
27 = 3 * 3 * 3
27 / 3 = 9

```

<br>

> **Agora ficou fácil não?**

<br>

Se um número tem uma **raíz inteira** isso significa que ele é <br>
divisível por outro número menor do que a metade dele.

<br>

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


Vamos iniciar com nosso código anterior para que possamos analisar quais partes <br>
podem ser separadas, pois cada uma validação é um teste diferente, <br>
logo tem responsabilidades diferentes.

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

Nosso próximo passo é retirar as funções que compõe <br>
o comportamento da função principal `isPrime`:

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
isPrime 100007 false


*/
```

<br>

Se os dois testes, `isEvenAndNot2` e `hasIntegerSquareRoot`, retornam `false` <br>
podemos testa-los de uma só vez:

```js
if ( isEvenAndNot2( num ) || hasIntegerSquareRoot( num ) )
  return false

```
<br>

Você deve ter percebido que não usei o **`is`** na função `hasIntegerSquareRoot`<br>
como é usado na `isEvenAndNot2` e na função nativa [isInteger](http://mdn.io/isInteger),<br> 
pois sigo um conceito que tento aplicar o m4ximo possível nos meus códigos, que é a...

![](http://i.imgur.com/oXyfZOa.png)

<br>
<br>

> "...**o componente do sentido das palavras**..."

<br>
<br>

Eu acredito que para **Programação Funcional** é mais importante ainda pois ela **é declarativa**.

<br>
<br>

> "... um programa é declarativo se descreve o que ele faz e não como seus procedimentos funcionam."

*fonte: [https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_declarativa](https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_declarativa)*

<br><br>

Logo para que você descreva algo necessariamente precisa da sem4ntico, pois é ela que dará<br> 
sentido aos nomes que você escolhe para suas constantes e funções.

Como estamos aprendendo baseando-se nos conceitos b4sicos precisamos entender essa diferença<br>
entre esses dois nomes utilizando, obviamente, seus conceitos.

<br><br>

> "Ação de ter; ato de receber ou de passar a possuir alguma coisa..."

*fonte: [https://www.dicio.com.br/tem/](https://www.dicio.com.br/tem/)*

<br><br>

> "É vem do verbo ser. O mesmo que: acontece, está, existe, subsiste, sucede."

*fonte: [https://www.dicio.com.br/e-4/](https://www.dicio.com.br/e-4/)*


<br><br>

Agora ficou fácil de **inferir** o porquê dos nomes: `hasIntegerSquareRoot` e `isEvenAndNot2`.

<br><br>

A tradução de `hasIntegerSquareRoot` é "TEM raíz quadrada inteira", logo precisamos de<br>
*algo* para que ele possua a raíz quadrada inteira, por isso ñ utilizo o `is/é`.

Entretanto na função `isEvenAndNot2`, "É par e não é 2", realmente estamos testando<br> 
o que É esse *algo*.

<br><br>

> Ser4 que ficou clara essa parte sobre a sem4ntica dos nomes das funções?

<br><br>

<hr>

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

