"use strict";
// 1
{
    function getFirstWord(a) {
        return a.split(/ +/)[0].length;
    }
    //console.log(getFirstWord("amogus"))
}
// 2    
{
    function getUserNamings(a) {
        return {
            fullname: a.name + " " + a.surname,
            initials: a.name[0] + "." + a.surname[0]
        };
    }
    //console.log(getUserNamings({name:"Zahar", surname:"Dubina"})) 
}
// 3  
{
    function getAllProductName(a) {
        var _a;
        return ((_a = a === null || a === void 0 ? void 0 : a.products) === null || _a === void 0 ? void 0 : _a.map(prod => prod === null || prod === void 0 ? void 0 : prod.name)) || [];
    }
    let test = { products: [{ name: "dddd" }, { name: "bbb" }] };
    //console.log(getAllProductName(test))
}
// 4.1    
{
    function hey(a) {
        return "hey! i'm " + a.name();
    }
    //console.log(hey({name: () => "roma", cuteness: 100}))
    //console.log(hey({name: () => "vasya", coolness: 100}))
}
// 4.2    
{
    class Petconst {
        constructor(name) {
            this.naming = name;
        }
        name() {
            return this.naming;
        }
    }
    class Cat extends Petconst {
        constructor(name, boolean) {
            super(name);
            this.boolean = boolean;
        }
    }
    class Dog extends Petconst {
        constructor(name, number) {
            super(name);
            this.number = number;
        }
    }
    function hey(abstractPet) {
        return "hey! i'm " + abstractPet.name();
    }
    let a = new Cat("myavchik", true);
    let b = new Dog("gavchik", 333);
    //console.log(hey(a))
    //console.log(hey(b))
}
// 4.3
{
    function hey(a) {
        return "hey! i'm " + a.name()
            + (a.type === "cat" ? ("cuteness: " + a.cuteness) : ("coolness: " + a.coolness));
    }
    console.log(hey({ name: () => "roma", type: "cat", cuteness: 100 }));
    console.log(hey({ name: () => "vasya", type: "dog", coolness: 100 }));
}
// 5 
{
    function stringEntries(a) {
        return Array.isArray(a) ? a : Object.keys(a);
    }
}
