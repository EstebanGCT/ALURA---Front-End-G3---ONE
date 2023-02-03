/*
Creación de métodos (comportamientos de las clases)
Palabra clave this
Constructores de las clases
Encapsulamiento
Propuesta de atributos privados en clases
Retorno de resultados con return


Los metodos para una clase son los comportamientos.

this deifne la cuenta corriente, puede tratarse de la 1 o la 2, 3 etc.

contructor() define el tipo valor con el que vamos a trabajar inicialmente.

Un método puede recibir cualquier cantidad de parámetros tambien puede estar definido sin parámetros. Esa es la forma de pasarle información para que podamos reutilizar su funcionalidad en diferentes escenarios.

Función y método son sinónimos y nos ayudan a construir un vocabulario más rico dentro de nuestro sistema. Usamos métodos para identificar los comportamientos que nuestra clase tiene. Eso facilita la comunicación dentro del equipo.

Un método define el comportamiento o la forma de realizar algo. Osea definir qué acciones puede ejecutar un objeto. El comportamiento es implementado dentro del método.

Por defecto en Javascript usamos el prefijo “_” para indicar que es un atributo privado y que no debe ser alterado manualmente. Solo se altera utilizando metodos y si se realizan alteraciones manuales sobre atributos con ese prefijo se considera una mala práctica pues se estaría rompiendo el encapsulamiento de la clase.
*/


/*Definición de clases*/
class Cliente
{
    nombreCliente;
    dniCliente;
    rutCliente;
}

class CuentaCorriente
{
    numero;
    #saldo;
    agencia;

    constructor() {
        this.#saldo = 0;
        this.numero = '';
        this.agencia = '';
    }

    depositoEnCuenta(valor) {
        if (valor > 0)
            this.#saldo += valor;
        return this.#saldo;
    }

    retirarDeCuenta(valor) {
        if (valor <= this.#saldo)
            this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo() {
        return this.#saldo;
    }
}

cuentaDeLeonardo = new CuentaCorriente();
//cuentaDeLeonardo.#saldo = 10;
let saldo = cuentaDeLeonardo.verSaldo(); 
console.log('El Saldo actual es '+saldo);

saldo = cuentaDeLeonardo.depositoEnCuenta(100);
console.log('El Saldo actual es '+saldo);

saldo = cuentaDeLeonardo.retirarDeCuenta(100);
console.log('El Saldo actual es '+saldo);

saldo = cuentaDeLeonardo.depositoEnCuenta(10)
console.log('El Saldo actual es '+saldo);
