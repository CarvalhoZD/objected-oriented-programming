class BankingAccount {
    public bank: string;
    public typeOf: string;
    public coin: string;

    constructor(bank: string , typeOf: string, coin: string) {
    this.bank = bank;
    this.typeOf = typeOf;
    this.coin = coin;
    }   
}

const bankaccount: BankingAccount = new BankingAccount('NuBank', 'savings', 'Dólar');

console.table(bankaccount)

console.log(bankaccount instanceof BankingAccount);
console.log(bankaccount instanceof Object);