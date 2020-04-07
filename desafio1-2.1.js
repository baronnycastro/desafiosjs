// Create a program to store a developer data.

const dev = {
    name: 'Baronny',
    age: 24,
    tecnology: [
        { name: 'C++', especiality: 'Desktop' },
        { name: 'Javascript', especiality: 'Web/Mobile' }
    ]
}

console.log(` The user ${dev.name}, ${dev.age} years and use the tecnology ${dev.tecnology[0].name} and ${dev.tecnology[0].especiality}`)