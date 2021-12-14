export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    ; //Nothing needed inside because private doesn't need any setting!
    render(item, heading, pos) {
        const li = document.createElement('li'); //type is inferred
        const h4 = document.createElement('h4');
        h4.innerText = heading;
        li.append(h4);
        const p = document.createElement('p');
        p.innerText = item.format(); //Implements hasFormatter and is a string
        li.append(p);
        if (pos === 'start') {
            this.container.prepend(li);
        }
        else {
            this.container.append(li);
        }
    }
}
/*
    1. Register a list container (ul) in the constructor
    2. Create a render method to render a new 'li' to the container
        -- Accepts arguments: invoice or payment, a heading and a position
        -- Create the html template (li, h4, p)
        -- Add the 'li' template to the start/end of the list

*/ 
