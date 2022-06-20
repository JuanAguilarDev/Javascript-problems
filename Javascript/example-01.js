// Escriba un programa para calcular el total de una nota de venta después de un descuento.
// Acepte como entrada la cantidad de la nota y el porcentaje de descuento. Valide la nota
// antes de calcular el descuento. Utilice un temporizador para calcular el descuento después
// de un retraso, ya que el descuento debe ser calculado únicamente después de la
// validación de la nota.

let mount = 1000;
let discount = 90;

let data = {
    mount,
    discount
}


let invoice = ({mount, discount}) => {
    let status_invoice = mount >= 0 ? true : false;
    let total = 0;

    if(status_invoice){
        total = mount - (mount * discount/100);
        let date = new Date();
        let invoice_data = {
            current_date: ` Year: ${date.getFullYear()}`,
            discount,
            mount,
            total
        }
        console.log(invoice_data);
    }else{
        console.log("Monto no valido. ");
    }
}


setTimeout(()=>{
    invoice(data);
});

