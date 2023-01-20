// 1
{
    function getFirstWord(a: string): number {
        return a.split(/ +/)[0].length;
    }
    //console.log(getFirstWord("amogus"))
}
// 2    
{
    type A ={
        name:string,
        surname:string
    }
    
    function getUserNamings(a :A) {
        return { 
              fullname: a.name + " " + a.surname, 
              initials: a.name[0] + "." + a.surname[0] 
        };
    } 
    //console.log(getUserNamings({name:"Zahar", surname:"Dubina"})) 
}
// 3  
{
    type A= {
        products: { name: string }[]
    }
    
    function getAllProductName (a :A) {
        return a?.products?.map(prod => prod?.name) || [];
    }
    let test : A = {products:[{name:"dddd"} ,{name:"bbb"}]}
    //console.log(getAllProductName(test))
}
    
// 4.1    
{
    type A ={
        name: ()=>string,
        coolness?: number,
        cuteness?: number
    }
    function hey(a : A) {
        return "hey! i'm " + a.name();
    }
    //console.log(hey({name: () => "roma", cuteness: 100}))
    //console.log(hey({name: () => "vasya", coolness: 100}))
}
// 4.2    
{
    class Petconst {
        naming: string;
        constructor(name: string) {
            this.naming = name;
        }
        name() {
            return this.naming;
        }
    }
    class Cat extends Petconst {
        boolean: boolean;
        constructor(name: string, boolean: boolean) {
            super(name);
            this.boolean = boolean;
        }
    }
    class Dog extends Petconst {
        number: number;
        constructor(name: string, number: number) {
            super(name);
            this.number = number;
        }
    }
    interface Abstract_Pet {
        name: () => string;
    }
    function hey(abstractPet : Abstract_Pet) {
        return "hey! i'm " + abstractPet.name();
    }
    let a = new Cat("myavchik", true)
    let b = new Dog("gavchik", 333)
    //console.log(hey(a))
    //console.log(hey(b))
}
// 4.3
{
    interface A {name: () => string,
        type: string,
        cuteness?: number,
        coolness?: number 
    }
    function hey(a : A) {
        return "hey! i'm " + a.name()
             + (a.type === "cat" ? ("cuteness: "+a.cuteness) : ("coolness: "+a.coolness))
    }
    console.log(hey({name: () => "roma", type: "cat", cuteness: 100}))
    console.log(hey({name: () => "vasya", type: "dog", coolness: 100}))
}
// 5 
{
    function stringEntries(a: {} | []) {
        return Array.isArray(a) ? a : Object.keys(a)
     }
}