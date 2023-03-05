// function sum() {
//     let total = 0
//     for (value of arguments) {
//         total += value
//     }
//     return total
// }

// console.log(sum(1,2,3,4,56))

// function sum(discount, ...prices) {
//     const subtotal = prices.reduce((a,b) => a+b)
//     return subtotal*(1-discount)
// }

// console.log(sum(0.2,2,3,5,30,7))

// function interest(prin, rate=0.2, years=10) {
//     return prin*rate/100*years
// }

// console.log(interest(1000,0.1))

const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        if (typeof value !== 'string') {throw new Error('Value is not a string')}
        if (parts.leng !==2 ) {throw new Error('Enter a first and last name')}
        const parts = value.split(' ')
        this.firstName = parts[0]
        this.lastName = parts[1]
    }
}

try {
    person.fullName = ''
}
catch(e) {
    alert(e)
}

// person.fullName = 3
console.log(person)