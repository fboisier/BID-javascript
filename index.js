const sayHello = function(name) {
    console.log('Hello ' + name);
};

const sayHelloFlecha = name => console.log('Hello ' + name);

sayHello('PANCHO');
sayHello('JAVIER');

sayHelloFlecha('PANCHO FLECHA');

var square = function(n) {
    return n * n;
};

const square = n => n * n;


console.log(square(2));

const returnObjLonghand = () => ({ firstName: 'John', lastName: 'Wick' })


console.log(returnObjLonghand());


