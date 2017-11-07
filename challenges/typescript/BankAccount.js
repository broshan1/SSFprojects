var bankAccount = /** @class */ (function () {
    function bankAccount(client, balance) {
        this.owner = client;
        this.balance = balance;
    }
    bankAccount.prototype.deposit = function (amt) {
        this.balance += amt;
    };
    ;
    bankAccount.prototype.withdraw = function (amt) {
        this.balance -= amt;
    };
    ;
    return bankAccount;
}());
var bankOfBrosh = new bankAccount('Broshan', 1000);
console.log(bankOfBrosh);
bankOfBrosh.deposit(100);
console.log(bankOfBrosh.balance);
bankOfBrosh.withdraw(300);
console.log(bankOfBrosh.balance);
