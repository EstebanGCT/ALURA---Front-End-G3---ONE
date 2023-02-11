/*
Polimorfismo es cuando tienes una función, tienes un método o tienes un atributo que se llama de igual forma en diferentes clases, solo que estas clases no están relacionadas entre sí en un esquema de herencia sino que son clases que están separadas, que se pueden gestionar de manera individual y ellas tienen un método nombrado de la misma forma que nos va a permitir ejecutar ese método de diferentes formas.

Entonces el concepto de polimorfismo es gestión de métodos, gestión de atributos de diferentes formas.
*/


/*Importación de clases*/
import {Cliente} from './Cliente.js'
import { Empleado } from './Empleados/Empleado.js';
import { Gerente } from './Empleados/Gerente.js';
import { Director } from './Empleados/Director.js';
import { SistemaAutenticacion } from './SistemaAutenticacion.js';

//const cliente2 = new Cliente('María','16979808','8989');

const empleado = new Empleado('Juan Perez','1234343',10000);
empleado.asignarClave('12345');
console.log(SistemaAutenticacion.login(empleado,'12345'));

const gerente = new Gerente('Pedro Rivas','232344',12000);
gerente.asignarClave('655');
console.log(SistemaAutenticacion.login(gerente,'655'));

//const director = new Director('Elena Moreno','232323',15000);

const cliente = new Cliente('Leonardo','13804050','123224');
cliente.asignarClave('01111');
console.log(SistemaAutenticacion.login(cliente,'01111'));




