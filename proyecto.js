

alert ("Bienvenido a smowk, Casa de Empanadas Artesanales");

let NombreUsuario= prompt("Ingrese su nombre");
let ApellidoUsuario= prompt("Ingrese su apellido");
let delivery= prompt ("ingrese su domicilio");

alert("Hola " + NombreUsuario + "  " + ApellidoUsuario);

let edad= prompt("¿Que edad tienes?");

if (edad >=18){
    alert ("Usted es mayor de edad, puede ingresar a la pagina")
}

else if (edad <18) {
        alert ("Usted es menor de edad, Por favor salir de la pagina")
}

alert ("Para armar el pedido marque 1 o 0 para salir del delivery")
let Marcar= prompt("Marque 1 para ingresar o 0 para salir")

let seleccionarEmpanadas = Number(prompt ("¿Que tipo de empanada estas buscando? 1- Frita $400 2- Horno $450 3- Integral $530"));
let SeleccionarCantidad;
let total = 0;

let cantidad= (cantidaD, empanadas)=> {
    return cantidaD * empanadas}

    while (seleccionarEmpanadas != 0) {
        
        switch (seleccionarEmpanadas) {
            case 1: SeleccionarCantidad=Number(prompt("Ingresaste frita, Por favor indique cuantas llevara"))
            total = SeleccionarCantidad * 400
            break;

            case 2: SeleccionarCantidad=Number(prompt("Ingresaste al horno, Por favor indique cuantas llevara"))
            Total = SeleccionarCantidad * 450
            break

            case 3: SeleccionarCantidad=Number(prompt("Ingresaste Integral, Por favor indique cuantas llevara"))
            total = SeleccionarCantidad * 530
            break;
             
             default:
                break;
        }
        seleccionarEmpanadas=Number(prompt("¿Que tipo de empanada estas buscando? 1- Frita $400 2- Horno $450 3- Integral $530"))
    }

    alert("el total de la compra es: " + total)

    let Metododepago=prompt("¿Como desea pagar, Efectivo, Tarjeta de debito o Tarjeta de credito?")
    let porcentajeTotal= (total*10)/100

    if ((Metododepago=="Efectivo") || (Metododepago=="EFECTIVO") || (Metododepago=="efectivo")){
        alert("Tienes un 10% de descuento en el pedido.")
        alert("El total es de: " + (total - porcentajeTotal))
    }

    else if ((Metododepago=="Tarjeta de debito") || (Metododepago=="Tarjeta de debito")){
        alert ("Tienes un 10% de descuento en el pedido")
        alert("El total es de: " + (total - porcentajeTotal))
       
    }
    else if ((Metododepago=="Tarjeta de credito") || (Metododepago =="Tarjeta de credito")){
        alert ("Tienes un 10% de recargo del total del pedido!")
        alert("El total es de: " - (total + porcentajeTotal))
    }

    else {
        alert("Metodo de pago invalido")
    }
