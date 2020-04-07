// Create a program to calcule the retirement of a person


   const name =  'Silvana'
    const sex = 'F'
    const age =  48
    const contribuiton = 23


const timeOfContribuiton = age + contribuiton

const womamCanRetired = sex == 'F' && contribuiton >= 30 && timeOfContribuiton >= 85
const mamCanRetired = sex == 'M' && contribuiton >= 35 && timeOfContribuiton >= 95

if(womamCanRetired || mamCanRetired){
   
    console.log(`${name} can retired`)
} else {
    console.log(`${name} you cannot retired`)
}
