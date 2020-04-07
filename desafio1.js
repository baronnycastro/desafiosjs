// Create a program to calcule the BMI(body mass index) and obesity level. 

const person =
{
    name: 'Carlos',
    weight: 84,
    height: 1.88

}

const bmi = person.weight / (person.height * person.height)

if (bmi >= 30) {
    console.log("Carlos is overweight")
} else {
    console.log("Carlos is not overweight")
}