// hacer peticiones dentro de un callback
// api general 
//personaje 
// ubicacion que queremos

// Como estamos trabajando desde node vamos a necesitar instalar una dependencia
// XMLHttpRequiest 
// Comando de instalacion
//$ npm install xmlhttprequest --save

// INstacian la extension

let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(url_api, callback){
    // construccion de peticiones
    // Generar referencia al objeto
    let xhttp = new XMLHttpRequest();
    // hacer llamado a una url
    xhttp.open('GET', url_api, true) // obtener valor, lo que vamos a pedir, decir que sera valor asincrono
    xhttp.onreadystatechange = function (event){
        // si el estado en el cual se encuentra es satisfactorio
        if (xhttp.readyState === 4){
            if(xhttp.status === 200){
                callback(null, JSON.parse(xhttp.responseText));
                //en los callback primer valor es un error y el segundo resultado
            } else{
                const error = new Error("Error "+ url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}