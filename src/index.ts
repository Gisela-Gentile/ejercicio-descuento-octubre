import "./styles.css";
let dato1 = document.getElementById("dato1");
let dato2 = document.getElementById("dato2");
let dato3 = document.getElementById("dato3");

let btnEnviar = document.getElementById("enviar");
let rotulo1 = document.getElementById("rotulo1");
let rotulo2 = document.getElementById("rotulo2");
let rotulo3 = document.getElementById("rotulo3");

rotulo1.innerHTML = "Ingrese la cantidad de productos";
rotulo2.innerHTML = "Ingrese el precio del producto";
rotulo3.innerHTML = "Ingrese el mes";

btnEnviar.addEventListener("click", () => {
  let cantidad: number = Number(dato1.value);
  let precio: number = Number(dato2.value);
  let mes: string = dato3.value
  let compra: number = precio * cantidad;
  let compraDescuecuento: number
  if (mes ==="Octubre"|| mes==="octubre" || mes==="OCTUBRE")  {

    compraDescuecuento = compra * 0.85;
    console.log("FELICITACIONES!! Por comprar en el mes de octubre tiene un decuento del 15%");
    console.log("El monto que debe abonar es; "+compraDescuecuento);
  }else
      
   {console.log("No tiene descuento! El monto a abonar es:"+compra)}

  
});

