/*
Constructores
Encapsulamiento
Atributos estáticos


El contructor es esa función que se ejecuta una vez que genero una instancia.
Los constructores son utilizados para inicializar los atributos. La inicialización de los atributos es la principal responsabilidad de los constructores, pero recordando que se puede ejecutar otras operaciones de igual forma.

static dice que un atributo es comun para todas las instancias de la clase (en este caso todas las cuentas). por lo tanto atribuyo su valor directo a la clase.
*/

/*Importación de clases*/
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './CuentaCorriente.js';

const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');

let saldo = cuentaDeLeonardo.verSaldo(); 

saldo = cuentaDeLeonardo.depositoEnCuenta(150);
cuentaDeLeonardo.transferirParaCuenta(parametroValor,cuentaDeMaria);

const saldoMaria = cuentaDeMaria.verSaldo();

console.log('Cuenta de Maria',cuentaDeMaria);

console.log('El Saldo actual (cuentaMaria) '+saldoMaria);

const saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log('El Saldo actual (cuentaLeonardo) '+saldoLeonardo);
console.log(CuentaCorriente.cantidadCuentas);

console.log(CuentaCorriente.cantidadCuentas);




