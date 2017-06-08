const NOT = ( x ) => !x
const isNot = NOT
const even = ( num ) => ( num % 2 )
const halfOf = ( num ) => Math.ceil( num / 2 )
const disibleBy = ( num ) => ( i ) => isNot( num % i )
const squareRootOf = ( num ) => Math.sqrt( num )
const isInteger = ( num ) => Number.isInteger( num )

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
  ( isInteger( squareRootOf( num ) ) )

const isEvenAndNot2 = ( num ) => 
  ( isNot ( even( num ) ) && ( num !== 2 ) )

const isPrime = ( num ) => 
  ( !isEvenAndNot2( num ) && 
    !hasIntegerSquareRoot( num ) &&
    !hasDivisor( num ) )


console.log('filter', [2, 3, 4, 5].filter(isPrime))

console.log('isPrime 2', isPrime(2))
console.log('isPrime 3', isPrime(3))
console.log('isPrime 4', isPrime(4))

console.log('isPrime 100002', isPrime(100002))
console.log('isPrime 100003', isPrime(100003))
console.log('isPrime 100007', isPrime(100007))
