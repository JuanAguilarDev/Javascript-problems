let mount = 1000;
let discount = 90;

let data = { 
    mount, 
    discount
}

const resolve_invoice = () =>{
    return new Promise((resolve, reject) => {
        console.log("Cargando datos. ")

        setTimeout(() => {
            resolve(data)
        }, 1000);
    });
}

const validate_invoice = async() => {
    const data_invoice = await resolve_invoice().catch((err) => console.log(`Ha ocurrido el siguiente error: ${err}`));
    const invoice_status = data_invoice.mount >= 0 ? true : false;

    console.log(data_invoice);

    if(invoice_status){
        return new Promise((resolve, reject) => {  
            setTimeout(()=>{
                resolve(data_invoice);
            }, 1000);
        });
        
    }else{
        throw new Error('Invalid mount');
    }
}

const create_invoice =  async() =>{
    const data = await validate_invoice().catch((err) => {`Ha ocurrido el siguiente error ${err}`});

    // let total = 0;
    //     let date = new Date();
    //     let invoice_data = {
    //         current_date: ` Year: ${date.getFullYear()}`,
    //         discount,
    //         mount,
    //         total
    //     }
    console.log(data);
};


create_invoice();