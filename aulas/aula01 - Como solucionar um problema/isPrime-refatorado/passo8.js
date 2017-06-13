
const halfOf = ( num ) => Math.ceil( num / 2 )

const hasDivisor = ( num ) => {
  for ( let i = halfOf( num ); i >= 2; i-- ) {
    if( !( num % i ) ) {
      return true
    }
  }
  return false
}
const hasIntegerSquareRoot = ( num ) => 
  ( Number.isInteger( Math.sqrt( num ) ) )

const isEvenAndNotTwo = ( num ) => 
  ( !( num % 2 ) && ( num !== 2 ) )

const isPrime = ( num ) => 
  ( isEvenAndNotTwo( num ) || 
    hasIntegerSquareRoot( num ) ||
    hasDivisor( num ) )
      ? false
      : true


console.log('isPrime 2', isPrime(2))
console.log('isPrime 3', isPrime(3))
console.log('isPrime 4', isPrime(4))

console.log('isPrime 100002', isPrime(100002))
console.log('isPrime 100003', isPrime(100003))
console.log('isPrime 100007', isPrime(100007))
