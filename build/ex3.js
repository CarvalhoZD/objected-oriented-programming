var Paciente = /** @class */ (function () {
    function Paciente(name, age, sex, report) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.report = report;
    }
    return Paciente;
}());
var paciente = new Paciente('Mauricio Carvalho', 26, 'Male', 'Well');
console.table(paciente);
console.log(paciente instanceof Paciente);
console.log(paciente instanceof Object);
