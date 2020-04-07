// Create a program to store a developer data.

const user = [
    { name: 'Diego', tecnology: ['HTML', 'CSS'] },
    { name: 'Jasminie', tecnology: ['Javascript', 'CSS'] },
    { name: 'Tuane', tecnology: ['HTML', 'Node'] }

]
// for (let i of user) {
//     console.log(`${i.name} work with ${i.tecnology}`)
// }
// // Create a program to search a tecnology.

function CheckUseCSS(users){
    for(let tec of users.tecnology){
        if(tec == 'CSS')
            return true
        
    } return false
}

for(let i = 0; i < user.length; i++){
    const ChekCSS = CheckUseCSS(user[i])
    if(ChekCSS){
        console.log(`The user ${user[i].name}`)
    }
}
