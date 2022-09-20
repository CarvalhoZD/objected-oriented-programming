class Paciente {
    public name: string;
    public age: number;
    public sex: string;
    public report: string;

    constructor(name: string , age: number, sex: string, report: string) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.report = report;
    }   
}

const paciente: Paciente = new Paciente('Mauricio Carvalho', 26, 'Male', 'Well');

console.table(paciente)

console.log(paciente instanceof Paciente);
console.log(paciente instanceof Object);