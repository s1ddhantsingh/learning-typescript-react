const calculateTotalPriceJS = (
    product: { name: string, unitPrice: number}, 
    quantity: number, 
    discount?: number,
    brand_id?: number | string
) => {
    const total = product.unitPrice * quantity;
    const offTotal = total * ((discount===undefined) ? 0 : discount);
    return total - offTotal;
    if (brand_id)
        console.log(brand_id)
};

calculateTotalPriceJS({ name: "car", unitPrice: 100}, 100, 3, "siddhant singh co")

let glassBroken = false;
let date = new Date();
date.getTime();

console.log('starting');

const doShit = (response: any) => {
    console.log('inside doShit function')
    console.log(response.json())
    return response.json();
};

fetch("https://swapi.dev/api/people/1")
  .then((response) => doShit(response))
  .then((data: unknown) => {
    if (isValid(data))
        console.log("firstName", data.firstName); 
    }
);

console.log('done')

// widening unknown
const isValid = (thing: any):thing is { firstName: string } => {
    return "firstName" in thing;
};

// never types are allowed to be unreachable
// function that never ends should have a return type of never
const runForever = (): never => {
    while (true) 
        console.log(new Date().getSeconds())
};
// runForever()

let numbers: number[] = [];
for (let i = 0; i < 15; i++)
    numbers.push(i)
console.log(numbers)

// optional types use ?
// type aliasing
let table = { // auto type generated
    name: "hello",
    price: 105.9,
    date: new Date()
    // object members cannot be optional...
    // numberOfLegs?:5
};

const table2: {name:string, numberOfLegs?:number} = {
    name: "siddhant's table"
};

// alias' should be uppercase
type TableAlias = {name:string, numberOfLegs?:number};
const table3: TableAlias = {name: "table #3"};

let tables: TableAlias[] = [];
tables.push(table2);
tables.push(table3);

// javascript has a million different type of for loops
// typescript compiles to the oldest version of javascript for greatest forward compatibility!
for (const element of tables) 
    console.log(element.name)

export {};