const input = `4
aba
baba
aba
xzxb
3
aba
xzxb
ab`

const getOnlyString = ( arr, str ) => 
  ( isNaN( parseInt( str ) ) ) 
    ? arr.concat( str ) 
    : arr

const elementsBelow = ( N ) => ( el, i ) => ( i < N )
const elementsAbove = ( N ) => ( el, i ) => ( i >= N )

const list = input.split('\n')
const N = list[ 0 ]

const strings = list.reduce( getOnlyString, [] )

const base = strings.filter( elementsBelow( N ) )
const queries = strings.filter( elementsAbove( N ) )


const result = queries.map( ( query, i ) => 
  base.filter( str => {
    console.log('queries: ', query)
    console.log('base: ', str)
    console.log('\n\n')
    return str === query
  } ).length ).join( '\n' )

console.log('list', list)
console.log('base', base)
console.log('queries', queries)
console.log('result', result)