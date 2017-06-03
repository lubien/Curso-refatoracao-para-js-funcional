const input = `6
-4 3 -9 0 4 1`

const [ total, nums ] = input.split( '\n' )
const list = nums.split( ' ' ).map( Number )

console.log( ( list.filter( num => num > 0 ).length / total ).toFixed( 6 ) )
console.log( ( list.filter( num => num < 0 ).length / total ).toFixed( 6  ) )
console.log( ( list.filter( num => num === 0 ).length / total ).toFixed( 6 ) )