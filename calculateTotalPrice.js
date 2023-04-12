"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var calculateTotalPriceJS = function (product, quantity, discount, brand_id) {
    var total = product.unitPrice * quantity;
    var offTotal = total * ((discount === undefined) ? 0 : discount);
    return total - offTotal;
    if (brand_id)
        console.log(brand_id);
};
calculateTotalPriceJS({ name: "car", unitPrice: 100 }, 100, 3, "siddhant singh co");
var glassBroken = false;
var date = new Date();
date.getTime();
console.log('starting');
var doShit = function (response) {
    console.log('inside doShit function');
    console.log(response.json());
    return response.json();
};
fetch("https://swapi.dev/api/people/1")
    .then(function (response) { return doShit(response); })
    .then(function (data) {
    if (isValid(data))
        console.log("firstName", data.firstName);
});
console.log('done');
// widening unknown
var isValid = function (thing) {
    return "firstName" in thing;
};
// never types are allowed to be unreachable
// function that never ends should have a return type of never
var runForever = function () {
    while (true)
        console.log(new Date().getSeconds());
};
// runForever()
var numbers = [];
for (var i = 0; i < 15; i++)
    numbers.push(i);
console.log(numbers);
// optional types use ?
// type aliasing
var table = {
    name: "hello",
    price: 105.9,
    date: new Date()
    // object members cannot be optional...
    // numberOfLegs?:5
};
var table2 = {
    name: "siddhant's table"
};
var table3 = { name: "table #3" };
var tables = [];
tables.push(table2);
tables.push(table3);
for (var _i = 0, tables_1 = tables; _i < tables_1.length; _i++) {
    var element = tables_1[_i];
    console.log(element.name);
}
