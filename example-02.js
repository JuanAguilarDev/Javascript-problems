

let mount = 100;
let discount = 90;

let data = { 
    mount, 
    discount
}


const calculate_total = (err, {mount, discount}) => {
    if(err){
        console.log(err);
    }else{
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
            console.warn("Monto no valido. ")
        }
    }    
}

setTimeout(()=>{
    calculate_total(false, data);
}, 2000)

