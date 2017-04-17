# Curso-refatoracao-para-js-funcional
Refatorar eh vida!


```js

let profiles = getProfiles() // vem um array cabuloso

let arr = []

for (let i = 0; profiles.length > i; i++) {
  arr.push(profiles[i].name)
}

```

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
