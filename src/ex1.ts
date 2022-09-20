const PromptSync = require('prompt-sync')

class Patinete {
    public color: string;
    public wheels: number;
    public isEletric: boolean;

    constructor(color: string , wheels: number, isEletric: boolean) {
    this.color = color;
    this.wheels = wheels;
    this.isEletric = isEletric;
    }   
}

const patinete: Patinete = new Patinete('Silver', 2, false);

console.table(patinete)

console.log(patinete instanceof Patinete);
console.log(patinete instanceof Object);
