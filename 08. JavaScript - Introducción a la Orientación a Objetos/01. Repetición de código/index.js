/*
Creación de clases
Qué son los atributos/propiedades de una clase
Instancia/Objeto de una clase
Palabras reservadas class y new


#Utilizo const para definir a mi cliente.
const nombreCliente = "Leonardo"

Creo un molde para nuestras variables, para ello utilizo class.
class Cliente { 
    nombreCliente;
    dniCliente;
}

console.log(nombreCliente)  #Lo utilizo apra imprimir nuestra variable
devuelve Leonardo.

#Creamos nuestro nuevo cliente.
new Cliente();

#Referenciamos nuestra variable y le atribuimos un valor.
const cliente1 = new Cliente(); 

#En el caso de objetos los datos o variables que se encuentran dentro de la clase pasan a llamarse atributos o propiedades.

cliente1. #Alli me muestra sus propiedades y atributos a seleccionar.

#Cuando nombro a cliente1 y selecciono un atributo lo que estoy diciendo es que este es parte de ese cliente1. Entonces en este caso Jose es el nombre del cliente 1 ya que le asignamos ese valor a tal atributo.
cliente1.nombreCliente = "Jose";

#Ahora puedo mostrar de forma sensilla todos los atributos de mi cliente 1
console.log(cliente1);
*/

class Cliente
{
    nombreCliente;
    dniCliente;
    rutCliente;
}

class CuentaCorriente
{
    numero;
    saldo;
    agencia;
}

const cliente1 = new Cliente();

cliente1.nombreCliente = "José";
cliente1.dniCliente = "13232";

const cuentaCorriente1 = new CuentaCorriente();

cuentaCorriente1.numero = "232323";
cuentaCorriente1.saldo = 5000;

const cliente2 = new Cliente();

cliente2.nombreCliente = "Leonardo";
cliente2.dniCliente = "13804050";

const cuentaCorriente2 = new CuentaCorriente();

cuentaCorriente2.numero = "123434343";
cuentaCorriente2.saldo = 1000;

console.log(cliente1);
console.log(cuentaCorriente1);
console.log(cliente2);
console.log(cuentaCorriente2);
