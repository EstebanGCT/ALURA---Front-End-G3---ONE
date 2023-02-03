/*
Diferencias entre null y undefined
Gestión de la memoria con mayor detalle.
Referencias a espacios de memoria
Asistentes: get y set
Protección de nuestros atributos
Mejor encapsulamiento de las clases


Utilizamos null para decir que existe pero no esta explicito
this.cliente = null; (Existe el cliente pero no esta explicito)

set: asigna valores a atributos privados.

get: Sirve para retornar el valor de un atributo privado.

utilizo instanceof para decir que solo si el valor es de la instancia de mi clase. Solo en ese punto es que logro atribuir mi referencia de cliente. De esta forma estoy protegiendo mi clase u mi atributo en este caso Cliente.

Utilizando el asistente set podemos cambiar la regla de cómo un atributo puede o no puede modificarse sin tener que cambiarlo en diferentes puntos del código.  Así que si cambia alguna regla de asignación, sólo necesitamos modificar un lugar. Recordando que de esta forma conseguimos realizar protecciones a los atributos de forma fácil.

El uso del asistente set es una buena práctica para garantizar que la asignación de valores a los atributos sea siempre segura. Siempre debemos mantener tanta encapsulación como sea posible.
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

console.log (cuentaDeMaria.cliente);

cuentaDeMaria.cliente = 0;

console.log (cuentaDeMaria.cliente);

let parametroValor = 100;
/*
console.log('Parámetro Valor',parametroValor);
cuentaDeLeonardo.transferirParaCuenta(parametroValor,cuentaDeMaria);
console.log('Parámetro Valor',parametroValor);

const saldoMaria = cuentaDeMaria.verSaldo();

console.log('Cuenta de Maria',cuentaDeMaria);



console.log('El Saldo actual (cuentaMaria) '+saldoMaria);

const saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log('El Saldo actual (cuentaLeonardo) '+saldoLeonardo);
*/