const saludar = (nombre) => {
    console.log("HOLA", nombre);
}
const despedir = (nombre) => {
    console.log("CHAO", nombre);
}




const calcular = (numero, callback, callback_despedir, nombre = "PANCHO") => {
    if (numero > 10) {
        if (typeof(callback) === 'function') {
            callback(nombre);
        } else {
            console.log("NO ES UNA FUNCION!!!!");
        }
    } else {
        callback_despedir(nombre);
    }
}

calcular(5, saludar, despedir, "FRANCISCO!");

const arr = Object.freeze([1, 2, 3, 4]);
arr.push(12);
console.log(arr);

const listadoMeses = ['ENERO', 'FEBRERO', 'MARZO', 'ABR', 'MAY', 'JUN'];
const arrTresLetrasMes = listadoMeses.filter(item => item.length <= 3);
console.log(arrTresLetrasMes);

const pasarAUL = (arreglo, small) => {
    if (small) {
        arreglo = arreglo.filter(item => item.length <= 3);
    } else {
        arreglo = arreglo.filter(item => item.length > 3);
    }
    resultado = arreglo.map(item => `<li>${item}</li>`);
    return `<ul>${resultado.join('')}</ul>`;
}

var html = pasarAUL(listadoMeses, true);
console.log(html);