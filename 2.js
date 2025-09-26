// Create a Bank Account class with deposit/withdraw methods.

class bankAccount {
    
    constructor(id,name , balance){
        this.id=id;
        this.name=name;
        this.balance=parseFloat(balance)
    }
    
    withdraw(amount){
        amount = parseFloat(amount)
        if (amount<=this.balance){
        return this.balance-=amount
            
        }
        else {
        return console.log("Balance is low")}
    }
    
    deposit(amount){
        return this.balance+=parseFloat(amount)
    }
}

const client = new Array();

const num= prompt("how many users u wanna add: ");

for(i=0;i<num;i++){
    const id = prompt("what is the id: ")
    const name = prompt("what is the name: ")
    const balance = prompt("what is the balance: ")
    
    client.push(new bankAccount(id,name,balance));
}
console.log('Entry Completed')
console.log(client)

console.log('')
console.log('For Deposit:')

var n = prompt('Enter number of people: ');
for(i=0;i<n;i++){
    const id = prompt("Enter ID: ")
    const amount = prompt("Enter amount: ")
    const clientGives = client.find(c=>c.id===id)
    if (clientGives){clientGives.deposit(amount);}
    else {console.log("User not found")}
};
console.log(client)
console.log('')
console.log('For withdrawal: ')

var n = prompt('Enter number of people: ')
for(i=0;i<n;i++){    
    const id = prompt('Enter ID: ')
    const amount = prompt("Enter amount: ")
    const clientGives = client.find(c=>c.id===id)
    if(clientGives){clientGives.withdraw(amount)}
    else {console.log("User not found")}
}

console.log(client)
console.log('')
console.log('Done')
