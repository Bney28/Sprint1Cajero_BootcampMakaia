
// Cajero mi ATM  

console.log("Bienvenido a miATM");
// Para inicar el cajero, use la función runAtm.

// Variables

let usuario = true
let totalGeneralBilletes = 0
let totalBillete5 = 0
let totalBillete10 = 0
let totalBillete20 = 0
let totalBillete50 = 0
let totalBillete100 = 0

// Arrays
let definirTipoDeUsuario = [
    {
        documento: "1234",
        contrasena: "4321",
        tipoDeUsuario: 1
    }, {
        documento: "6789",
        contrasena: "9876",
        tipoDeUsuario: 2
    }
]

let tipoDeBilletes = [
    { billete5: 0 },
    { billete10: 0 },
    { billete20: 0 },
    { billete50: 0 },
    { billete100: 0 }
]

let billetesEntregados = [0, 0, 0, 0, 0]


// Funciones
function runAtm() {



    function solicitarDatos() {
        documento = parseInt(window.prompt("Bienvenido, ingrese documento:"))
        contraseña = parseInt(window.prompt("Ingrese contraseña:"))
    }

    function solicitarBilletes() {
        tipoDeBilletes[0].billete5 = parseInt(window.prompt("Ingrese Billetes de $5.000"))
        tipoDeBilletes[1].billete10 = parseInt(window.prompt("Ingrese Billetes de $10.000"))
        tipoDeBilletes[2].billete20 = parseInt(window.prompt("Ingrese Billetes de $20.000"))
        tipoDeBilletes[3].billete50 = parseInt(window.prompt("Ingrese Billetes de $50.000"))
        tipoDeBilletes[4].billete100 = parseInt(window.prompt("Ingrese Billetes de $100.000"))

    }

    function sumaDeBilletes(elemento, billete) {
        let sumaDeBilletes = elemento * billete
        console.log("Hay " + sumaDeBilletes + " pesos en billetes de " + billete);
        return sumaDeBilletes
    }


    function usuarioAdmin() {

        solicitarBilletes()

        totalBillete5 = sumaDeBilletes(tipoDeBilletes[0].billete5, 5000)
        totalBillete10 = sumaDeBilletes(tipoDeBilletes[1].billete10, 10000)
        totalBillete20 = sumaDeBilletes(tipoDeBilletes[2].billete20, 20000)
        totalBillete50 = sumaDeBilletes(tipoDeBilletes[3].billete50, 50000)
        totalBillete100 = sumaDeBilletes(tipoDeBilletes[4].billete100, 100000)

        totalGeneralBilletes = totalBillete5 + totalBillete10 + totalBillete20 + totalBillete50 + totalBillete100
        console.log("El cajero está cargado. La suma total de todos los billetes es de $" + totalGeneralBilletes + " pesos");

    }

    function usuarioCliente() {

        if (totalGeneralBilletes == 0) {
            alert("Cajero en mantenimiento, vuelva pronto")

        } else {
            let valorARetirar = parseInt(window.prompt("Ingrese valor a retirar:"))
            console.log("Hay " + totalBillete5 + " en " + tipoDeBilletes[0].billete5 + " billetes de $5.000");
            console.log("Hay " + totalBillete10 + " en " + tipoDeBilletes[1].billete10 + " billetes de $10.000");
            console.log("Hay " + totalBillete20 + " en " + tipoDeBilletes[2].billete20 + " billetes de $20.000");
            console.log("Hay " + totalBillete50 + " en " + tipoDeBilletes[3].billete50 + " billetes de $50.000");
            console.log("Hay " + totalBillete100 + " en " + tipoDeBilletes[4].billete100 + " billetes de $100.000");

            totalGeneralBilletes = totalBillete5 + totalBillete10 + totalBillete20 + totalBillete50 + totalBillete100
            console.log("El dinero existente para hacer el retiro es de $" + totalGeneralBilletes + " pesos");

            valorARetirar = parseInt(valorARetirar / 5000) * 5000
            console.log("El monto de dinero que se entregará es de $" + valorARetirar + " pesos");
            alert("El monto de dinero que se entregará es de $" + valorARetirar + " pesos");

            if (totalGeneralBilletes < valorARetirar) {
                alert("Cantidad a retirar Insuficiente")

            } else {
                console.log("...Transacción en curso...");

                totalGeneralBilletes -= valorARetirar
                let entregaDeDinero = false
                while (entregaDeDinero === false) {
                    if (valorARetirar >= 100000 && tipoDeBilletes[4].billete100 > 0) {
                        valorARetirar -= 100000
                        tipoDeBilletes[4].billete100 -= 1
                        billetesEntregados[4] += 1
                        totalBillete100 -= 100000

                    } else if (valorARetirar >= 50000 && tipoDeBilletes[3].billete50 > 0) {
                        valorARetirar -= 50000
                        tipoDeBilletes[3].billete50 -= 1
                        billetesEntregados[3] += 1
                        totalBillete50 -= 50000

                    } else if (valorARetirar >= 20000 && tipoDeBilletes[2].billete20 > 0) {
                        valorARetirar -= 20000
                        tipoDeBilletes[2].billete20 -= 1
                        billetesEntregados[2] += 1
                        totalBillete20 -= 20000

                    } else if (valorARetirar >= 10000 && tipoDeBilletes[1].billete10 > 0) {
                        valorARetirar -= 10000
                        tipoDeBilletes[1].billete10 -= 1
                        billetesEntregados[1] += 1
                        totalBillete10 -= 10000

                    } else if (valorARetirar >= 5000 && tipoDeBilletes[0].billete5 > 0) {
                        valorARetirar -= 5000
                        tipoDeBilletes[0].billete5 -= 1
                        billetesEntregados[0] += 1
                        totalBillete5 -= 5000
                    }

                    if (valorARetirar == 0) {
                        entregaDeDinero = true
                    }

                }



                console.log("Queda un saldo de " + totalBillete5 + " en " + tipoDeBilletes[0].billete5 + " billetes de $5.000");
                console.log("Queda un saldo de " + totalBillete10 + " en " + tipoDeBilletes[1].billete10 + " billetes de $10.000");
                console.log("Queda un saldo de " + totalBillete20 + " en " + tipoDeBilletes[2].billete20 + " billetes de $20.000");
                console.log("Queda un saldo de " + totalBillete50 + " en " + tipoDeBilletes[3].billete50 + " billetes de $50.000");
                console.log("Queda un saldo de " + totalBillete100 + " en " + tipoDeBilletes[4].billete100 + " billetes de $100.000");


                console.log("Se entregaron " + billetesEntregados[4] + " en billetes de $100.000");
                console.log("Se entregaron " + billetesEntregados[3] + " en billetes de $50.000");
                console.log("Se entregaron " + billetesEntregados[2] + " en billetes de $20.000");
                console.log("Se entregaron " + billetesEntregados[1] + " en billetes de $10.000");
                console.log("Se entregaron " + billetesEntregados[0] + " en billetes de $5.000");
                console.log("miATM tiene un nuevo saldo de " + totalGeneralBilletes);


            }


        }


    }


    // Condicional
    do {
        solicitarDatos()

        // Ingresa Admin

        if (documento == "1234" && contraseña == "4321") {
            alert("Bienvenido Admin"),

                usuario = true
            usuarioAdmin()

            // Ingresa el cliente

        } else if (documento == "6789" && contraseña == "9876") {
            alert("Bienvenido Cliente")

            usuario = true
            usuarioCliente()

        } else {
            alert("Datos Incorrectos")
            usuario = false
        }

    } while (usuario != true);


}
