var BankingAccount = /** @class */ (function () {
    function BankingAccount(bank, typeOf, coin) {
        this.bank = bank;
        this.typeOf = typeOf;
        this.coin = coin;
    }
    return BankingAccount;
}());
var bankaccount = new BankingAccount('NuBank', 'savings', 'Dólar');
console.table(bankaccount);
console.log(bankaccount instanceof BankingAccount);
console.log(bankaccount instanceof Object);
