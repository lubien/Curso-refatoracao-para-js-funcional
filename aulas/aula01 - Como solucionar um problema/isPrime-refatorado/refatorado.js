const NOT = ( i ) => !i

const isEvenAndIsNotTwo = ( num ) =>
  ( (num % 2) === 0 && num !== 2 )

const hasIntegerSquareRoot = ( num ) => 
  ( Number.isInteger( Math.sqrt( num ) ) )

const hasDivisor = ( num ) => {
  for (let i = Math.floor(num / 2); i > 1; i--) {
    if(num % i === 0) {
      console.log('\n')
      console.log(num + ' é divisível por: ', i)
      return true
    }
  }
  return false
}

const isPrime = (num) => 
  NOT ( isEvenAndIsNotTwo( num ) ||
        hasIntegerSquareRoot( num ) ||
        hasDivisor( num ) )


console.log('isPrime 10002', isPrime(10002))
console.log('isPrime 10003', isPrime(10003))
console.log('isPrime 10007', isPrime(10007))