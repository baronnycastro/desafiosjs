// Create a program to store a company´s data.

const user = {
    name: 'Diego',
    company: {
        name: 'Rockeseat',
        color: 'purple',
        focus: 'development',
        adress: {
            street: 'Rua Guilherme Gembala',
            number: 260
        },
    }
}

console.log(`The company ${user.company.name} is located at ${user.company.adress.street}, ${user.company.adress.number} `)


