let mount = -100;
let discount = 90;

let data = { 
    mount, 
    discount
}

const myPromise = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve(data)
    }, 2000);
});

myPromise
    .then(({mount, discount}) => {
        let invoice_status = mount >= 0 ? true : false;
        let invoice_data = {
            mount,
            discount
        }
        if(invoice_status){
            return(invoice_data);
        }else{
            throw new Error("Monto invalido. ");
        }
    })
    .then(({mount, discount}) => {
        let total = 0;
        let date = new Date();
        let invoice_data = {
            current_date: ` Year: ${date.getFullYear()}`,
            discount,
            mount,
            total
        }
        console.log(invoice_data);
    })
    .catch(err => console.log(err));