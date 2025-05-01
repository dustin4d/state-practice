const animals = [
    {name: 'Fluffykins', species: 'rabbit'},
    {name: 'Caro', species: 'dog'},
    {name: 'Hamilton', species: 'dog'},
    {name: 'Harold', species: 'fish'},
    {name: 'Ursula', species: 'cat'},
    {name: 'Jimmy', species: 'fish'}
]

const names = animals.map((animal) => {
    return animal.name + ' is a ' + animal.species
})

/* FOR COMPARISON
const names = []
for (var i = 0; i < animals.length; i++) {
    names.push(animals[i].name)
}
*/

console.log(names)