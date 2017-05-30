const armarios = Array.from({length: 90}, ( k, v ) => {
  const t = v + 1
  return t % 2 !== 0
})

const res = armarios.map( ( armario, i ) => 
  !( i+1  % 2 )
    ? false
    : true )
const r = armarios.map( ( armario, i ) => 
  !( i+1 % 3 )
    ? !armario
    : armario )
// console.log('armarios', armarios)
console.log('res', res)
console.log('r', r.length)
// console.log('r', r.filter( el => el === true ).length)
// console.log('res', r.filter( el => el === true ).length)