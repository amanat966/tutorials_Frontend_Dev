// function createCAlcFunction(n) {
//     return function() {
//         console.log(1000 * n)
//     }
// }

// const calc = createCAlcFunction(42)
// calc()



// function createIncrementor(n) {
//     return function(num){
//         return n + num
//     }
// }


// const addOne = createIncrementor(1)
// const addTen = createIncrementor(10)


// console.log(addOne(1))
// console.log(addOne(8))
// console.log(addTen(10))
// console.log(addTen(15))



// function urlGenerator(domain) {
//     return function(url){
//         return `https://${url}.${domain}`
//     }
// }


// const comUrl = urlGenerator('com')

// const ruUrl  = urlGenerator('ru')

// console.log(comUrl('google'))
// console.log(ruUrl('narutoplanet'))


const person1 = {
    name: 'Michael',
    age: 22,
    job: 'Frontend',
}
function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
}

const person2 = {
    name: 'Elena',
    age: 23,
    job: 'SMM'
}

bind(person1, logPerson)()
bind(person2, logPerson)()

function bind(context, func){
    return function(...args){
        func.apply(context, args)
    }
}

