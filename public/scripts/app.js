/**
 *  Create a Register client data.
 */

const id_client = 10001;
let nameClient = 'Fulano';
let lastNane = 'da Silva';
let ageClient = 38;
let interestRate = 0.03;
let amountInstallment = 36;
let loanAmount = 10000.00;
let creditStatus = 'yes';

let exibir = `
${id_client}
${nameClient} ${lastNane} 
${ageClient} 
${interestRate} 
${amountInstallment} 
${loanAmount.toFixed(2)} 
${creditStatus}`;

console.log(exibir);



















