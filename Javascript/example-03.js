let mount = -100;
let discount = 90;

let data = { 
    mount, 
    discount
}

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
  
  myPromise
    .then(({mount, discount})=>{
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
                throw new Error('Monto no valido.')
        }
    }).catch(err => console.log(err));