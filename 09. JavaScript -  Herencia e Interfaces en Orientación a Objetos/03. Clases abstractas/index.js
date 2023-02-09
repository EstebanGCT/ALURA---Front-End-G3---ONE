/*
Clases abstractas. las clases abstractas nos permiten encapsular el funcionamiento básico de la clase y nos permite que esa clase solo sea extensible y no sea instanciable de tal manera que ningún programador pueda generar un nuevo objeto de la clase y que tenga necesidad de hacer alguna operación de personalización sobre la clase base.

Esa clase abstracta es aquella que no se puede instanciar, no se puede hacer new, solo se debe hacer extend, solo se debe extender. 
*/


/*Importación de clases*/
import {Cliente} from './Cliente.js'
import {CuentaCorriente} from './CuentaCorriente.js';
import {CuentaAhorro} from './CuentaAhorro.js';
import { CuentaNomina } from './CuentaNomina.js';

const cliente = new Cliente('Leonardo','13804050','123224');
const cliente2 = new Cliente('María','16979808','8989');

const cuentaDeLeonardo = new CuentaCorriente(cliente, '1', '001');
const cuentaDeMaria = new CuentaCorriente(cliente2,'2','002');

const cuentaAhorroLeonardo = new CuentaAhorro(cliente,'9985','001',0);

const cuentaNominaLeonardo = new CuentaNomina(cliente,'9854','001',100);
cuentaNominaLeonardo.depositoEnCuenta(150);
console.log(cuentaNominaLeonardo.verSaldo());

cuentaNominaLeonardo.retirarDeCuenta(50);
console.log(cuentaNominaLeonardo.verSaldo());


