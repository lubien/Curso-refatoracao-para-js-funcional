// Retirando as funções qe compõe o comportmento
// da função principal

// se for par E não for 2
const isEvenAndNotTwo = ( num ) => 
  ( ( num % 2 ) === 0 && num !== 2 )
    ? true
    : false

// Se um número tem uma **raíz inteira** 
// isso significa que ele é divisível
const hasIntegerSquareRoot = ( num ) => 
  ( Number.isInteger( Math.sqrt( num ) ) )
    ? true
    : false

const isPrime = ( num ) => { 

  // Se os dois testes retornam false
  // podemos uní-los
  if ( isEvenAndNotTwo( num ) || 
      hasIntegerSquareRoot( num ) )
    return false

  let i = Math.floor( num / 2 )
  // Começaremos as divisões a partir da sua metade
  for ( i; i >= 2; i-- ) {
    if( ( num % i ) === 0 ) {
      console.log( '\n' )
      console.log( num + ' é divisível por: ', i )
      return false
    }
  }
  return true
}

console.log('isPrime 2', isPrime(2))
console.log('isPrime 3', isPrime(3))
console.log('isPrime 4', isPrime(4))

console.log('isPrime 100002', isPrime(100002))
console.log('isPrime 100003', isPrime(100003))
console.log('isPrime 100007', isPrime(100007))

/**

» node isPrime01.js 
isPrime 2 true
isPrime 3 true
isPrime 4 false
isPrime 100002 false
isPrime 100003 true


100007 é divisível por:  1031
isPrime 100007 false


*/