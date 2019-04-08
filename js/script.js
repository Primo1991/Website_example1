console.log('dziala')

items = ['1','2' ,'3' , '4' , '5' , '6' , '7'];
const dwapierwsze = items.slice(0,2);
console.log(dwapierwsze);

const animals =  ['dog', 'cat', 'canary', 'mouse'];
console.log(animals)
animals.splice(1,0, 'hamster')
console.log(animals)

let names = ['Marek', 'Zemek', 'Adam'];
console.log(names.sort());

let numbers = ['3','35','1','12','30'];
console.log(numbers.sort());

let name = 'Marek, Przemek, Adam, Mikolaj, Sebastian'.split(', ', 2);
