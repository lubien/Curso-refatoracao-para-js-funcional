const input = `12.00
20
8`

const [ mealCost, tipPercent, taxPercent ] = input.split('\n').map(Number)

console.log('mealCost, tipPercent, taxPercent', mealCost, tipPercent, taxPercent)

const result = mealCost
              + ( mealCost * ( tipPercent / 100 ) ) 
              + ( mealCost * ( taxPercent / 100 ) ) 
console.log(`The total meal cost is ${parseInt(result)} dollars.`)