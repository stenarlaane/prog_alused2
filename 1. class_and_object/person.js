class Person{
    #name = ''
    #age = 0

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