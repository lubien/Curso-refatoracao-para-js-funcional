// const input = `4
// 1 4 3 2`

// input.split('\n')[1].split(' ').reverse().join(' ')

// Sample Input


// const input = `1 1 1 0 0 0
// 0 1 0 0 0 0
// 1 1 1 0 0 0
// 0 0 2 4 4 0
// 0 0 0 2 0 0
// 0 0 1 2 4 0`

const input = `1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 9 2 -4 -4 0
0 0 0 -2 0 0
0 0 -1 -2 -4 0`

const withThisFlatList = ( list ) => 
  list.map ? flatten( list ) : list

const toFlat = ( result, list ) => 
  result.concat( withThisFlatList( list ) )

const flatten = ( list ) => 
  list.reduce( toFlat , [] )

const list = input.split("\n").map( el => el.split(" "))
const resolve = ( sum, num, i, list ) => Number(sum) + Number(num)
const sumAll = ( sum, num, i, list ) => ( sum > num  ) ? sum : num
const mount = ( list, i ) => [ 
  list[i], list[i + 1], list[i + 2], 
  list[i + 7], 
  list[i + 12], list[i + 13], list[i + 14]
]

const getPosition = ( pos, LIMIT ) => 
  ( ( pos % LIMIT) === 0 && pos > 0 )
    ? pos + ( LIMIT - 1) 
    : pos + 1

const sum = ( list, LIMIT ) => ( el, pos ) => 
  mount( list, getPosition( pos, LIMIT )  ).reduce( resolve, 0 )


const getMounted = ( list, i, MAX_POSITION, LIMIT ) => 
  Array.from({ length: MAX_POSITION})
              .map( sum( list, LIMIT ) )
              .reduce( sumAll, 0 )

const getMaxHourglass = ( list, i = 0 ) => 
  ( i <= list.length - 15 ) 
    ? getMounted( list, i, list.length - 15, 3 )
    : i

const res = getMaxHourglass( flatten( list ) )
console.log('getMaxHourglass res',res)

// [ 0, [ '1', '1', '1', '1', '1', '1', '1' ]
 // 1, [ '1', '1', '0', '0', '1', '1', '0' ]
 // 2, [ '1', '0', '0', '0', '1', '0', '0' ]
 // 3,  [ '0', '0', '0', '0', '0', '0', '0' ]
 // 7, [ '1', '0', '0', '1', '0', '2', '4' ]
 // 11, [ '0', '1', '1', '0', '0', '0', '0' ],
 // 15, [ '0', '0', '0', '4', '2', '0', '0' ],
 // 19 ] [ '0', '2', '4', '0', '0', '1', '2' ]
 
 


// [ [ '1', '1', '1', '0', '0', '0' ],
//   [ '0', '1', '0', '0', '0', '0' ],
//   [ '1', '1', '1', '0', '0', '0' ],
//   [ '0', '0', '2', '4', '4', '0' ],
//   [ '0', '0', '0', '2', '0', '0' ],
//   [ '0', '0', '1', '2', '4', '0' ] ]


// [ [ '1', '1', '1', '1', '1', '1', '1' ],
//   [ '1', '1', '0', '0', '1', '1', '0' ],
//   [ '1', '0', '0', '0', '1', '0', '0' ],
//   [ '0', '0', '0', '0', '0', '0', '0' ],
//   [ '0', '0', '0', '0', '2', '4', '4' ],
//   [ '0', '0', '0', '0', '4', '4', '0' ],
//   [ '0', '0', '1', '0', '4', '0', '0' ],
//   [ '0', '1', '1', '0', '0', '0', '0' ],
//   [ '0', '0', '0', '0', '0', '0', '0' ],
//   [ '0', '0', '0', '0', '0', '0', '0' ],
//   [ '0', '0', '2', '0', '0', '0', '1' ],
//   [ '0', '2', '4', '0', '0', '1', '2' ] ]


// > [0], [1], [2], [7], [12], [13], [14] 

// [ '1',
//   '1',
//   '1',
//   '0',
//   '0',
//   '0',
//   '0',
//   '1',
//   '0',
//   '0',
//   '0',
//   '0',
//   '1',
//   '1',
//   '1',
//   '0',
//   '0',
//   '0',
//   '0',
//   '0',
//   '2',
//   '4',
//   '4',
//   '0',
//   '0',
//   '0',
//   '0',
//   '2',
//   '0',
//   '0',
//   '0',
//   '0',
//   '1',
//   '2',
//   '4',
//   '0' ]



// [line][col] + [line][col + 1] + [line][col + 2] +
// [line + 1][col + 1]
// [line + 2][col] + [line + 2][col + 1] + [line + 2][col + 2]

// line >= 0 && line < 6
// col  >= 0 && col < 6
