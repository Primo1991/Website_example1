// console.log('dziala')

// items = ['1','2' ,'3' , '4' , '5' , '6' , '7'];
// const dwapierwsze = items.slice(0,2);
// console.log(dwapierwsze);

// const animals =  ['dog', 'cat', 'canary', 'mouse'];
// console.log(animals)
// animals.splice(1,0, 'hamster')
// console.log(animals)

// let names = ['Marek', 'Zemek', 'Adam'];
// console.log(names.sort());

// let numbers = ['3','35','1','12','30'];
// console.log(numbers.sort());

// let name = 'Marek, Przemek, Adam, Mikolaj, Sebastian'.split(', ', 2);


// window.onload = function(){
//     var names = new Set();
//     names.add('Primo').add('Zumika').add('Adam');
//     names.delete('Adam');  
//    // names.clear()  
//     console.log(names.has('Zumika'));
//     console.log(names.size)
//     console.log(names)
//}


window.onload = function(){
    var ninjas = ["Shen", "Zed", "Udyr", "Ahri", "Akali"]
    var refinedNinjas = new Set(ninjas);

    console.log(refinedNinjas)

    ninjas = [...refinedNinjas]

    console.log(ninjas)

    for(let ninja of refinedNinjas.values())
    console.log(ninja)
}

