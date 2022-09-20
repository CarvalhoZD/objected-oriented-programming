var PromptSync = require('prompt-sync');
var Patinete = /** @class */ (function () {
    function Patinete(color, wheels, isEletric) {
        this.color = color;
        this.wheels = wheels;
        this.isEletric = isEletric;
    }
    return Patinete;
}());
var patinete = new Patinete('Silver', 2, false);
console.table(patinete);
console.log(patinete instanceof Patinete);
console.log(patinete instanceof Object);
