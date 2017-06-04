const isNot = ( x ) => !x
const even = ( num ) => ( num % 2 )
const halfOf = ( num ) => Math.ceil( num / 2 )
const disibleBy = ( num ) => ( i ) => isNot( num % i )

const hasDivisor = ( num ) => {
  const isDisibleBy = disibleBy( num )
  for ( let i = halfOf( num ); i >= 2; i-- ) {
    if( isDisibleBy( i ) )  {
      return true
    }
  }
  return false
}

const hasIntegerSquareRoot = ( num ) => 
  ( Number.isInteger( Math.sqrt( num ) ) )

const isEvenAndNotTwo = ( num ) => 
  ( isNot ( even( num ) ) && ( num !== 2 ) )

const isPrime = ( num ) => 
  ( isEvenAndNotTwo( num ) || 
    hasIntegerSquareRoot( num ) ||
    hasDivisor( num ) )
      ? false
      : true


console.log('filter', [2, 3, 4, 5].filter(isPrime))

console.log('isPrime 2', isPrime(2))
console.log('isPrime 3', isPrime(3))
console.log('isPrime 4', isPrime(4))

console.log('isPrime 100002', isPrime(100002))
console.log('isPrime 100003', isPrime(100003))
console.log('isPrime 100007', isPrime(100007))
