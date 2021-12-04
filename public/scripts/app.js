/**
 *  Create a Register client data.
 */

const id_client = 10001;
let nameClient = 'Fulano';
let lastNane = 'da Silva';
let ageClient = 38;
let loanValue = 150000;
let interestRate = 0.10;
let paymentTime = 6;
let creditStatus = 'yes';

let interesAmount = loanValue * interestRate * paymentTime;


/* 
    Formula Juros compostos: M = PV * (1 + i) ** n
    M: Montante
    PV: Valor presente
    i: Taxa de juros (indice)
    n: tempo de financiamento
*/

/**
    Formula Juros Simples = M = PV + (PV * i * n)
    M: Montante
    PV: Valor presente
    i: Taxa de juros (indice)
    n: tempo de financiamento
 */

let totalToPay = loanValue + interesAmount;
const customerGreeting = `
Good Morning, Mr. ${nameClient} ${lastNane}. 
Your age is ${ageClient}. You're welcome.
Your total Loan Amount is ${totalToPay.toFixed(2)}`;

console.log(customerGreeting);




















