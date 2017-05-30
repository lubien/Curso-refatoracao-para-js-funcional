const input_stdin = `3
2.8
is my favorite platform!`

var i = 4
var d = 4.0
var s = "HackerRank "

const [ value, double, str] = input_stdin.split('\n')
    const newValue = ( Number( value ) + i )
    const newDouble = Number( double ) + Number( d )

    console.log(`${newValue}
${newDouble.toFixed(1)}
${s}${str}`)

// The first line contains an integer that you must sum with . 
// The second line contains a double that you must sum with . 
// The third line contains a string that you must concatenate with .