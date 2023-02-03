/*
Conocer y entender el archivo package.json
Crear módulos en Javascript
importación y exportación de módulos
Ventajas de organizar el código por clases y composición de clases
Parámetros por valor y por referencia
Cambiar dinámicamente un objeto


Creamos un archivo para cada clase (clase cliente y clase cuentaCorriente)

Creamos módulos para compartir y reutilizar código entre los distintos archivos del proyecto, lo cual ayuda mucho en la organización del mismo. En Javascript cada archivo es considerado un módulo y podemos escoger que exportar y que no exportar de él.

Ejecutamos npm init
Tipeamos el nombre del proyecto en minusculas
Describimos nuestro codigo
definimos nuestro punto de entrada en este caso index.js
Esto crea nuestro package.json
Agregamos a nuestro json al final un "type":"module";
Luego exportamos las clases en cada archivo
Haciendo esto nuestro codigo queda modularizado.
*/

/*Importación de clases*/
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './CuentaCorriente.js';

const cliente = new Cliente();
cliente.nombreCliente = 'Leonardo';
cliente.dniCliente = '13804050';
cliente.rutCliente = '123224';

const cuentaDeLeonardo = new CuentaCorriente();
cuentaDeLeonardo.numero = '1';
cuentaDeLeonardo.agencia = '001';
cuentaDeLeonardo.cliente = cliente;

//cuentaDeLeonardo.#saldo = 10;
let saldo = cuentaDeLeonardo.verSaldo(); 

saldo = cuentaDeLeonardo.depositoEnCuenta(150);
console.log('El Saldo actual (CuentaLeonardo) '+saldo);

const cliente2 = new Cliente();
cliente2.nombreCliente = 'Maria';
cliente2.dniCliente = '16979808';
cliente2.rutCliente = '8989';


const cuentaDeMaria = new CuentaCorriente();
cuentaDeMaria.numero = '2';
cuentaDeMaria.agencia = '002';
cuentaDeMaria.cliente = cliente2;

let parametroValor = 100;

console.log('Parámetro Valor',parametroValor);
cuentaDeLeonardo.transferirParaCuenta(parametroValor,cuentaDeMaria);
console.log('Parámetro Valor',parametroValor);

const saldoMaria = cuentaDeMaria.verSaldo();

console.log('Cuenta de Maria',cuentaDeMaria);

/*


console.log('El Saldo actual (cuentaMaria) '+saldoMaria);

const saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log('El Saldo actual (cuentaLeonardo) '+saldoLeonardo);
*/