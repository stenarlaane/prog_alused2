const MyDate = require('./mydate') 
const test1 = new MyDate(19, 6, 2024)
const test2 = new MyDate(23, -11, 2021)
const test3 = new MyDate(33, 14, `pizza`)
const test4 = new MyDate(12, 7, 1999)

if (MyDate.validDate) {
    console.log(test1.printDay())
    console.log(test4.printDay())
    console.log(test1.earlier(test4))
} else {
    console.log(`Somethings wrong...`)
}