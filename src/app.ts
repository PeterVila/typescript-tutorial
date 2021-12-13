class Invoice {

  constructor(
    readonly client: string,
    private details: string,
    public amount: number
    ){}// Everytime, we create an Invoice with this class, our constructor will take in the 3 values and assign it to the 3 properties above.

  format() {
    return `${this.client} owes $${this.amount} for ${this.details}`
  }
} //There will be errors if you don't initialize with a constructor
const invOne = new Invoice('peter', 'the work on projects', 250) //Just like we do in JavaScript
const invTwo = new Invoice('mario', 'mushrooms', 300)

console.log(invOne, invTwo)

let invoices: Invoice[] = []; //What if you want the Invoice]
// invoices.push('hello'); //needs to be Invoice
// invoices.push({ name: 'shawn' }); //doesn't work

invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices); //Can limit thwat type objects can be in array
const anchor = document.querySelector('a')!;
if(anchor) {
  console.log(anchor.href);
}
console.log(anchor.href);

//const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

invoices.forEach(inv => {
  console.log(inv.client, inv.amount, inv.format()); //Details wont work because private
})
// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(
    type.value, 
    tofrom.value, 
    details.value, 
    amount.valueAsNumber
  );
});