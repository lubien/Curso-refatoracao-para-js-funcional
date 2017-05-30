const input = `5 3
1 2 100
2 5 100
3 4 100`

const [ NM, ...listRaw] = input.split( '\n' )
const list = listRaw.map( el => el.split( ' ' ) )

const [ N, M ] = NM.split(' ')

const arr = Array.from( { length: N }, () => 0 )

const t = list.reduce( ( acc, el, i ) => {
  const begin = el[ 0 ] - 1
  const end = el[ 1 ] - 1
  const value = el[ 2 ]

  arr.forEach( ( e, pos ) => {
    if ( pos >= begin && pos <= end )
      arr[ pos ] = Number( e ) + Number( value )
    else 
      arr[ pos ] = Number( e )
  } )
  return acc.concat(arr)
}, [] )

const values = t.slice(t.length - (N+1) )

console.log(Math.max(...values))
// const result = t.reduce( ( arr, el) => {
//   const val = el.
//   console.log('el', el)
// }, [])
// console.log('result', result)

// const getOnlyString = ( arr, str ) => 
//   ( isNaN( parseInt( str ) ) ) 
//     ? arr.concat( str ) 
//     : arr

// const elementsBelow = ( N ) => ( el, i ) => ( i < N )
// const elementsAbove = ( N ) => ( el, i ) => ( i >= N )

