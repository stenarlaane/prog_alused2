class Person{
    #name = ''
    #age = 0

    constructor(name) {
        this.#name = name
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