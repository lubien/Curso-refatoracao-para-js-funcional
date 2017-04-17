# Curso-refatoracao-para-js-funcional

Esse curso também servir´a como manual de regras para os meus alunos, todo código que eu ver e nao seguir essas definiçes eu pedirei educadamente para refatorar baseando-se nesse manual de boas praticas do JS Funcional.


## push

> Sabe onde é o único lugar que vc **DEVE** usar o no `reduce` para *array*.

```js

const toListOfObjects = ( acc, cur ) => {
  acc.push({ index: cur})
  return acc
}
[1, 2, 3, 4].reduce( toListOfObjects, [] )
//[ { index: 1 }, { index: 2 }, { index: 3 }, { index: 4 } ]

```

> **Sabe o porquê nao posso retornar o `push`?**

```js

> [].push(1)
1

```

> Nao preciso explicar neh?

Vamos ao que interessa, esse código abaixo eu vejo direto, portanto agora só mandarei esse texto 
para o *dev* corrigir seu código.

```js

var profiles = getProfiles() // vem um array cabuloso

var arr = []

for (let i = 0; profiles.length > i; i++) {
  arr.push(profiles[i].name)
}

```

> Var!!?? Eh sério mesmo que ainda é usado??!!

**Do jeito certo:**

```js

const profiles = getProfiles() // vem um array cabuloso

const profilesNames = profiles.map( profile => profile.name )

```

Semantificando o code:


```js

const toNames = ( profile ) => profile.name 
const profilesNames = getProfilesAnd().map( toNames )

```
