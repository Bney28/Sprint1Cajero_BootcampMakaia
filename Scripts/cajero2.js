/*
let definirTipoDeUsuario = [
    {
        documento: "1234",
        contraseña: "4321",
        tipoDeUsuario: 1
    }, {
        documento: "6789",
        contraseña: "9876",
        tipoDeUsuario: 2
    }
]

let tipoDeBilletes = [
        {billete5: ""},
        {billete10: ""},
        {billete20: ""},
        {billete50: ""},
        {billete100: ""
    }
]

let sumaTotalDeBilletes = [

]




// Funciones
function run() {

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
        //return sumaTotalDeBilletes.push(sumaDeBilletes)
    }

    function name(params) {
        
    }
    

        
     function retirarDinero() {

     }


    do {
        solicitarDatos()

        if (documento == "1234" && contraseña == "4321") {
            alert("Bienvenido Admin"),
            
            solicitarBilletes()
            let totalBillete5 = sumaDeBilletes(tipoDeBilletes[0].billete5, 5000)
            let totalBillete10 = sumaDeBilletes(tipoDeBilletes[1].billete10, 10000)
            let totalBillete20 = sumaDeBilletes(tipoDeBilletes[2].billete20, 20000)
            let totalBillete50 = sumaDeBilletes(tipoDeBilletes[3].billete50, 50000)
            let totalBillete100 =sumaDeBilletes(tipoDeBilletes[4].billete100, 100000)

            let totalGeneralBilletes = totalBillete5 + totalBillete10 + totalBillete20 + totalBillete50 + totalBillete100
            console.log("La suma total de todos los billetes es de $" + totalGeneralBilletes + " pesos");

            solicitarDatos()




            
        } else if (documento == "6789" && contraseña == "9876"){
            alert("Bienvenido Cliente")

            window.prompt("Ingrese valor a retirar")





        } else {
            alert("Datos Incorrectos")
        }

    } while (condition);


}
