let addition = function (a, b) {
    return a+b;
}

console.log(addition(5, 7));




let additionArrow = (a, b) => a+b;


console.log(additionArrow(2,2));


let  getFinalPrice = function (price, tax = 0.7) {
    return price + price*tax;
}

console.log(getFinalPrice(500));
console.log(getFinalPrice(500, 4));



function foo(x, y, z) {
    console.log(x,y,z);
}
let arr =[ 1, 2, 3];

foo(arr[0],arr[1],arr[2]);

foo(...arr); //spred оператор


function foo2(a, b, ...args) {
    console.log(a+b);
    console.log(args);//rest
}


foo2(1.,2,3,4,5);



let user  = 'John';

console.log('hellow ' + user + '!');
console.log(`hellow ${user}!`);