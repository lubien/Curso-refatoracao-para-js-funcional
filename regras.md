# Regras

Escreverei mais regrinhas no decorrer da gravação das aulas.


<br>

#### push

> Nunca use-o!

```js

const toListOfObjects = ( acc, cur ) => 
  acc.concat({ index: cur})

[1, 2, 3, 4].reduce( toListOfObjects, [] )
//[ { index: 1 }, { index: 2 }, { index: 3 }, { index: 4 } ]

```


> **Use o concat meu filho!**

Vamos ao que interessa, esse código abaixo eu vejo direto, portanto agora só mandarei esse texto 
para o *dev* corrigir seu código.

```js

var profiles = getProfiles() // vem um array cabuloso

var arr = []

for (let i = 0; profiles.length > i; i++) {
  arr.push(profiles[i].name)
}

```

> var!!?? Eh sério mesmo que ainda é usado??!!

**SEMPRE** que você tiver um *array* e precisar iterar nele para pegar ou modificar valores, 

**PELO AMOR DE ODIN USE MAP!!!!**

Já escrevi alguns conteudos sobre o dito cujo, depois link aqui.

**Refatorando para o jeito certo:**

```js

const profiles = getProfiles() // vem um array cabuloso

const profilesNames = profiles.map( ( profile ) => profile.name )

```

Semantificando o code:


```js

const toNames = ( profile ) => profile.name 
const profilesNames = getProfilesAnd().map( toNames )

```

<br>

#### forEach

<br>

#### Callbacks

<br>

> Por favor separem os *callbacks* e os nomeem semanticamente!

<br>


#### Object

Para nao ferirmos a imutabilidade dos dados, quando formos modificar um objeto iremos utilizar o `Object.assign`.

<br>
<br>

