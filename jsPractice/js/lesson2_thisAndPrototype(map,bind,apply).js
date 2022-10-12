function hello() {
    console.log('Hello', this);
}

const person = {
    name: 'Amanat',
    age: 24,
    sayHello: hello,
    sayHelloWindow: hello.bind(document),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`);
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd()
    }
}

const elena = {
    name: 'Elena',
    age: 25
}

// person.logInfo.bind(elena, 'Frontend', '87081946960')()()
// person.logInfo.call(elena, 'Backend', '1111111111')()
person.logInfo.apply(elena, ['web developer', '2222222222'])


const array = [1,2,3,4,5]

// function multBy(arr,n){
//     return arr.map(function(i){
//         return i*n
//     })
// }

Array.prototype.multBy = function(n){
    return this.map(function(i){
        return i*n
    })
}
console.log(array.multBy(15))