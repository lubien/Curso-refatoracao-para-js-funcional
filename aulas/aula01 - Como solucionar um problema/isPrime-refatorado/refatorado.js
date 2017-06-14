const range = (start, end) =>
  Array.from({length: end - start}, (_, i) => i + start)

const NOT = ( i ) => !i

const isEvenAndIsNotTwo = ( num ) =>
  ( (num % 2) === 0 && num !== 2 )

const hasIntegerSquareRoot = ( num ) => 
  ( Number.isInteger( Math.sqrt( num ) ) )

const hasDivisor = ( num ) =>
  range(2, Math.floor(num / 2))
    .some(i => num % i === 0)

const isPrime = (num) => 
  NOT ( isEvenAndIsNotTwo( num ) ||
        hasIntegerSquareRoot( num ) ||
        hasDivisor( num ) )


console.log('isPrime 10002', isPrime(10002))
console.log('isPrime 10003', isPrime(10003))
console.log('isPrime 10007', isPrime(10007))
