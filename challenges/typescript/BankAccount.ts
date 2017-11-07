class bankAccount {
    owner: string;
    balance: number;
    deposit(amt: number) {
        this.balance += amt;
    };
    withdraw(amt: number) {
        this.balance -= amt;
    };
    constructor(client: string, balance: number) {
        this.owner = client;
        this.balance = balance;
    }
}
var bankOfBrosh = new bankAccount('Broshan', 1000);
console.log(bankOfBrosh);
bankOfBrosh.deposit(100);
console.log(bankOfBrosh.balance);
bankOfBrosh.withdraw(300);
console.log(bankOfBrosh.balance);
