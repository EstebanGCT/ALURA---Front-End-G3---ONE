/* 
Especialización de las clases
Tenemos una clase con un comportamiento genérico, pero debemos darle reglas de negocio o especializaciones a esas clases para que no afecte en este caso a todas las cuentas.

En el caso de la programación orientada a objetos, la herencia es que una clase pueda tomar toda la funcionalidad de otra clase, a partir de que se defina como hija, o en el caso de JavaScript se defina como que se extiende. Entonces eso nos permite entender este primer punto que tenemos que es extender la clase.

La herencia sirve para especializar nuestras clases y sobreescribir nuestros metodos.


*/


/*Importación de clases*/
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './CuentaCorriente.js';
import {CuentaAhorro} from './CuentaAhorro.js';

const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');

const cuentaAhorroLeonardo = new CuentaAhorro(cliente,'9985','001',0);

console.log(cuentaDeLeonardo);
cuentaDeLeonardo.depositoEnCuenta(150);
console.log(cuentaDeLeonardo.verSaldo());
cuentaDeLeonardo.retirarDeCuenta(70);
console.log(cuentaDeLeonardo.verSaldo());
console.log(cuentaAhorroLeonardo);
cuentaAhorroLeonardo.depositoEnCuenta(200);
console.log(cuentaAhorroLeonardo.verSaldo());
cuentaAhorroLeonardo.retirarDeCuenta(120);
console.log(cuentaAhorroLeonardo.verSaldo());

