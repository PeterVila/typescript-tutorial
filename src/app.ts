import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payments.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { ListTemplate } from './classes/ListTemplates.js';

const form = document.querySelector('.new-item-form') as HTMLFontElement;
console.log(form.children);
// inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;
// list template instance
const ul = document.querySelector('ul')! //Must include ! to say it exists
const list = new ListTemplate(ul);
form.addEventListener('submit', (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  }
  else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }
  // console.log(doc); We want to render now
  list.render(doc, type.value, 'end');
});