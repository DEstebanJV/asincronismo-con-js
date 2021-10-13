/* QUE SON LOS CALLBACKS 

    Son el nombre de una convencion para usar funciones que llaman a otras en js,
    no hay una palabra reservada "callback", que haga que nuestro codifo sea diferente o
    especial.

    ¿ PAra que sirven ?

    La mayoría estamos acostumbrados a programar de manera sincrona, es decir le 
    indicamos al código que por ejemplo defina un Valor “X” y con otro valor “Y”
    y realizamos un calculo (Por ejemplo una multiplicación).

    El problema radica en que por ejemplo si quisiéramos crear un programa que 
    nos convierta nuestra moneda (pesos) a su equivalente en Bitcoin,
    podemos definir X (Valor de nuestro dinero) pero NO podemos definir de 
    manera implícita “Y” (Precio del Bitcoin) por que es algo muy volátil. 
    Entonces necesitamos obtener el precio del Bitcoin de una API, nuestro 
    programa realiza una multiplicación de X * Y sin embargo no tenemos Y
    (precio del bitcion) porque tenemos que esperar que el API nos conteste
    cual es este valor. Es ahí donde sirven los callback
.
Existen dos Metodos A y B
-El método B hace el calculo de nuestros Pesos * PrecioBitcoin
-El método A obtiene el precio del API de Bitcoin
Entonces el método B es llamado por el método A cuando por fin lee y 
obtiene el precio del Bitcoin, solo hasta entonces tiene sentido que multipliquemos 
nuestros valores.

*/
// ejemplo

    //CALLBACK
    function callback(){
        console.log("Mensaje de un callback");
    } 

    function mensaje(callback){
        return callback();
    }

    mensaje(callback);

//ejer1

function suma(num1, num2){
    return num1 + num2;
}

function calculator(num1, num2, callback){
    return callback(num1, num2);
}

console.log(calculator(4,4, suma));

//ejer2

function date(callback){
    console.log(new Date);
    setTimeout(() => {
      let date = new Date;
      callback(date);
    }, 3000);
}

function printDate(dateNow){
    console.log(dateNow);
}

date(printDate);


// ejer 3 a correjir

function hola(){
    console.log("Hola");
}

function mundo(){
    console.log("Mundo");
}

function suma(num1, num2){
    console.log(num1 + num2);

}

function mensaje(callbackHola,callbackMundo,callbackSuma){
    setTimeout(() => {
        console.log("primer mensaje");
        callbackHola();
        callbackMundo();
        callbackSuma();
    }, 2000);
}

mensaje(hola,mundo,suma(3,4));



// ejer 3 bueno
function hola(){
    console.log("Hola");
}

function mundo(){
    console.log("Mundo");
}

function suma(num1, num2){
    console.log(num1 + num2);

}

function mensaje(num1,num2,callbackHola,callbackMundo,callbackSuma){
    setTimeout(() => {
        console.log("primer mensaje");
        callbackHola();
        callbackMundo();
        callbackSuma(num1,num2);
    }, 2000);
}

mensaje(1,1,hola,mundo,suma);

