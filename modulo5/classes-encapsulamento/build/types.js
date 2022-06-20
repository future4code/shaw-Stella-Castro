"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transaction = exports.UserAccount = void 0;
class UserAccount {
    constructor(cpf, name, age) {
        this.balance = 0;
        this.transactions = [];
        console.log("Chamando o construtor da classe UserAccount");
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
    getCpf() {
        return this.cpf;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getBalance() {
        return this.balance;
    }
    getTransaction() {
        return this.transactions;
    }
    setCpf(newCpf) {
        this.cpf = newCpf;
    }
    setName(newName) {
        this.name = newName;
    }
    setAge(newAge) {
        this.age = newAge;
    }
    setBalance(newBalance) {
        this.balance = newBalance;
    }
    setTransaction(newTransactions) {
        this.transactions = newTransactions;
    }
}
exports.UserAccount = UserAccount;
class Transaction {
    constructor(date, value, description) {
        this.description = description;
        this.value = value;
        this.date = date;
    }
    getDescription() {
        return this.description;
    }
    getValue() {
        return this.value;
    }
    getDate() {
        return this.value;
    }
    setDescription(newDescription) {
        this.description = newDescription;
    }
    setValue(newValue) {
        this.value = newValue;
    }
    setDate(newDate) {
        this.date = newDate;
    }
}
exports.Transaction = Transaction;
//# sourceMappingURL=types.js.map