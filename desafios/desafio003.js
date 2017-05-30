const isEven = ( num ) => !( num % 2 )

const isWerd = ( num ) => {
  if ( !isEven( num ) || 
      ( isEven( num ) && ( num >= 6 && num <= 20 ) ))
    console.log('Weird')
  else console.log('Not Weird')
}
// If  is odd, print Weird
// If  is even and in the inclusive range of 2 to 5, print Not Weird
// If  is even and in the inclusive range of 6 to 20, print Weird
// If  is even and greater than 20, print Not Weird

// https://www.hackerrank.com/challenges/30-conditional-statements?h_r=next-challenge&h_v=zen