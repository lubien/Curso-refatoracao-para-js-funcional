# Aulas

## Aula 1

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

const nao = ( algo ) => !algo
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



## Code Style Funcional

* **Use 2 espaços** para identação.

  ```js
  const hello = ( name ) => {
    console.log( 'oi', name )
    console.log( 'tchau', name )
  }
  ```

* **Use aspas simples para strings**.

  ```js
  console.log( 'Salveeee galera do Funcional!!!' )
  ```

* **Sem constiáveis não-utilizadas.**

  ```js
  const myFunction () => {
    const result = something()   // ✗ evite
  }
  ```

* **Adicione um espaço após as keywords.**

  ```js
  if ( condition ) { ... }   // ✓ ok
  if(condition) { ... }    // ✗ evite
  ```

* **Adicione um espaço antes do parêntese de declaração de funções.**

  ```js
  function name ( arg ) { ... }   // ✓ ok
  function name( arg ) { ... }    // ✗ evite

  run( () => { ... } )      // ✓ ok
  run(() => { ... } )       // ✗ evite
  ```

* **Sempre use** `===` ao invés de  `==`.<br>
  Exceção: `obj == null` é permitido pra checar se `null || undefined`.

  ```js
  if ( name === 'John')   // ✓ ok
  if ( name == 'John')    // ✗ evite
  ```

  ```js
  if ( name !== 'John')   // ✓ ok
  if ( name != 'John')    // ✗ evite
  ```

* **Operadores infix** devem ser espaçados.

  ```js
  // ✓ ok
  const a = 2
  const b = 5
  const soma = ( a, b ) => a + b
  ```

  ```js
  // ✗ evite
  const a=2
  const b=5
  const soma = ( a, b ) => a+b
  ```

* **Vírgulas devem ter um espaço** depois delas.

  ```js
  // ✓ ok
  const list = [1, 2, 3, 4]
  const greet ( name, options ) => { ... }
  ```

  ```js
  // ✗ evite
  const list = [1,2,3,4]
  const greet ( name,options ) => { ... }
  ```

* **Adicione um espaço no início e no final dos colchetes.**

  ```js
  // ✓ ok
  const list = [ 1, 2, 3, 4 ]
  ```

  ```js
  // ✗ evite
  const list = [1,2,3,4]
  ```

* **Mantenha os else** na mesma linha das suas chaves.

  ```js
  // ✓ ok
  if ( condition ) {
    // ...
  } else {
    // ...
  }
  ```

  ```js
  // ✗ evite
  if ( condition ) {
    // ...
  }
  else {
    // ...
  }
  ```

* **Para ifs com mais de uma linha,** use chaves.

  ```js
  // ✓ ok
  if ( options.quiet !== true)  console.log( 'done')
  ```

  ```js
  // ✓ ok
  if ( options.quiet !== true ) {
    console.log( 'done')
  }
  ```

  ```js
  // ✗ evite
  if ( options.quiet !== true )
    console.log( 'done' )
  ```

* **Sempre lide** com o parâmetro `err` .

  ```js
  // ✓ ok
  run( ( err ) {
    if ( err ) throw err
    window.alert( 'done' )
  } )
  ```

  ```js
  // ✗ evite
  run( ( err ) {
    window.alert( 'done' )
  } )
  ```

* **Sempre prefixe globais de browser** com `window.`.<br>
  Exceções: `document`, `console` e `navigator`.

  ```js
  window.alert( 'hi')   // ✓ ok
  ```

* **Não é permitido múltiplas linhas em branco.**

  ```js
  // ✓ ok
  const value = 'hello world'
  console.log( value )
  ```

  ```js
  // ✗ evite
  const value = 'hello world'


  console.log( value )
  ```

* **Se for usar operador ternário** em múltiplas linhas, deixe `?` e `:` em suas próprias linhas.

  ```js
  // ✓ ok
  const location = env.development ? 'localhost' : 'www.api.com'

  // ✓ ok
  const location = env.development
    ? 'localhost'
    : 'www.api.com'

  // ✗ evite
  const location = env.development ?
    'localhost' :
    'www.api.com'
  ```

* **Para declarações de const,** escreva cada declaração na sua própria instrução.

  ```js
  // ✓ ok
  const silent = true
  const verbose = true

  // ✗ evite
  const silent = true, verbose = true

  // ✗ evite
  const silent = true,
      verbose = true
  ```

* **Coloque parẽnteses adicionais** em declarações em condições. Isso torna mais claro que a expressão é uma declaração ( `=`) e não um typo de equidade ( `===`)

  ```js
  // ✓ ok
  while ( ( m = text.match( expr ) ) ) {
    // ...
  }

  // ✗ evite
  while ( m = text.match( expr ) ) {
    // ...
  }
  ```
*
## Ponto-e-vírgula

* Não use. (veja: [1](http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding), [2](http://inimino.org/%7Einimino/blog/javascript_semicolons), [3](https://www.youtube.com/watch?v=gsfbh17Ax9I))

  ```js
  window.alert( 'hi' )   // ✓ ok
  window.alert( 'hi' );  // ✗ evite
  ```

* Nunca comece uma linha com `(`, `[`, ou `` ` ``. Esse é o único problema em omitir ponto-e-vírgula, e standard te protege desse problema em potencial.

  ```js
  // ✓ ok
  ;( () => {
    window.alert( 'ok' )
  }() )

  // ✗ evite
  ( () => {
    window.alert( 'ok' )
  }() )
  ```

  ```js
  // ✓ ok
  ;[ 1, 2, 3 ].join( ' - ' )

  // ✗ evite
  [ 1, 2, 3 ].join( ' - ' )
  ```

  ```js
  // ✓ ok
  ;`hello`.indexOf( 'o' )

  // ✗ evite
  `hello`.indexOf( 'o' )
  ```

  Nota: Se você frequentemente escreve código assim, você pode estar querendo ser o inteligentão. Cuidado.

  Atalhos inteligentes são desencorajados, em favor de expressões mais limpas e legíveis, sempre que possível.


  Ao invés disso:

  ```js
  ;[ 1, 2, 3 ].forEach( odd )
  ```

  **Isso é bem melhor!**

  ```js
  const nums = [ 1, 2, 3, 4 ]
  const evens = nums.filter( theEvens )
  ```
