
// // Operator rest (ES6) - wiele elementów podanych jako argumenty do jednej tablicy
// //...nazwa (dowolna zgodnie z zasadami dla zmiennej)
// // zwraca tablicę (arguments nie jest tablicą)

// function showAllArguments(...items) {
//  console.log(items);
//  console.log(arguments[5]);
//  return items;
// }
// // showAllArguments("1", 2, 12, "ab", true, "Adam")

// function addAllWords(...words) {
//  let txt = "";
//  for (let i = 0; i < words.length; i++) {
//   // txt += words[i] + "-";
//   txt += `${words[i]}-`;
//  }

//  // words.forEach(function(word) {
//  //  // txt += word + "-";
//  //  txt += `${word}-`
//  // })

// //  words.forEach(word => txt += `${word}-`)

//  console.log(txt);
// }
// // addAllWords()
// // addAllWords("ja", "ty", 2, "Gdańsk")

// // dzięki operatorowi rest możemy zbierać pozostałe argumenty (które zostaly umieszczone poza paramterami)

// function showUsers(owner, ...others) {
//  console.log(`Na imprezie był ${owner} ${others.length ? "oraz " + others + "." : "."}`)
// }

// // showUsers("Adrian");
// // showUsers("Adrian", "Jadzia", "Staszek", "Henio");


// /* ---------------------------------------- */

// // METODY A FUNKCJE
// // Metody to funkcje umieszczone w obiektach (poznamy w przyszłości). 

// const objectExample = {
//  name: "Adam",
//  showName: function() {
//   console.log("Jan")
//  },
//  showAge() {
//   console.log(30);
//  }
// }

// // objectExample.showName();
// // objectExample.showAge();

// const showName = function() {
//  console.log("Jan")
// }

// // showName();


// let vals = [4,6,7,5,3,2,8,7];
// vals = vals.map(x => Math.floor(Math.random(0) * Math.floor(6)+ 1));
// console.log(vals);

// let y = vals.push(Math.floor(Math.random(0) * Math.floor(6)+ 1));
// console.log(vals)

// let x = () => {
//     vals.push(Math.floor(Math.random(0) * Math.floor(6)+ 1));
//     console.log(vals)
// };


// let vals = new Array(10);
// vals = vals.fill(0).map(x => Math.floor(Math.random(0) * Math.floor(6)+ 1));
// window.addEventListener('click', console.log(vals));

function map(value,key,map) {
    console.log(`m[${key}] = ${value} from ${map}`)
}

let maps = new Map([['k1', 'v1'], ['k2','v2']]);
maps.forEach(map);
console.log(maps.set('k3','v3'));
console.log(maps.set('k4','v4'));
console.log(maps.forEach(map));
// console.log(map.size)
// console.log(map.has('k2'))
// console.log(map)
// console.log(map.delete('k2'))
// console.log(map)
// console.log(map.has('k2'))
// console.log(map)
// let examples = maps.keys();

console.log(maps.entries().next().value)
console.log(maps.entries().next().value)
// console.log(map.keys('k1'))
// console.log(map.clear())
// console.log(map)
// console.log(map.values());

for(let kv of maps.entries())
    console.log(`${kv[0]} : ${kv[1]}`);