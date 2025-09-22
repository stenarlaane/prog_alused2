class Person{
    #name = ''
    #age = 0

    constructor(name) {
        this.#name = name
    }

    printPerson() {
        console.log(this.#name + ', age ' + this.#age + ' years')
    }

    becomeOlder() {
        this.#age++
    }

    isAdult() {
        if (this.#age < 18) {
            return false
        }
        return true
    }

    setName(name){
        this.#name = name
    }

    getName(name){
        return this.#name
    }

    setAge(age){
        this.#age = age
    }

    getAge(age){
        return this.#age
    }
}

module.exports = Person