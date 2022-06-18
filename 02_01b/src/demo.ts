// Definicion de variables

let x: number 
let y: string
let z: boolean
let a: Date
let b: String[]


//Corregir para que las siguientes lineas
// no presenten errores de sintaxis
/*
b = 123
b = "Hello World"
*/




interface Contact{
    id: number;
    name: string;
    birthDate: Date;
}

let contact: Contact = { 
    id: 12345,
    name: "Emanuel Parra",
    birthDate: new Date("01-01-2000")    
}


// Uso de any
/* Cambie la estructura de la interfaz de tal manera que permita 
que birthDate no sea necesario pasarle el valor.Ademas de que number
pueda aceptar numeros y string.
*/


/* Uso de extends
Defina la interfaz Direccion, con las siguientes propiedades:
    provincia -> string
    region -> string
    codigoPostal -> string
Luego cambie la interfaz Contacto de tal manera que permita agregar las propiedades de Direccion
*/

/*Uso de alias de tipo (type)*/

type Contactname = string 

// En la interfaz contact reemplace Contactname por el tipo del valor name

// Defina un nuevo type de tal manera que id pueda soportar datos de tipo numericos y strings.




/*Uso de enum*/

//Agregue la propiedad status en la interfaz Contacto y que sea de tipo string

// Cree un enum con el nombre ContactStatus y que tenga los siguientes valores ACTIVO, INACTIVO, NUEVO.

// Cambie el tipo de dato de status, por ContactStatus