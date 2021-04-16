document.getElementById("button1").addEventListener("click", loadCustomer);

function loadCustomer(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "customer.json", true);
    xhr.onload= function(req, res){
        if(this.status === 200){
            // console.log(this.responseText);
            const customer = JSON.parse(this.responseText);
            console.log(`${customer.id}`);
            const output = `
            <ul>
                <li>ID: ${customer.id}</li>
                <li>Name:${customer.name}</li>
                <li>Company:${customer.company}</li>
                <li>PhoneNumber:${customer.phone}</li>
            </ul>
            `;
            document.getElementById("customer").innerHTML = output;
        }
    }
    xhr.send();

}

document.getElementById("button2").addEventListener("click", loadCustomers);
function loadCustomers(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "customers.json", true);
    xhr.onload = function(){
        let cust ="";
        if (this.status === 200){
            const customers = JSON.parse(this.responseText);
            customers.forEach(function(customer){
                cust+=`
                <ul>
                    <li>Number : ${customer.id}</li>
                    <li>Name   : ${customer.name}</li>
                    <li>Team   : ${customer.team}</li>
                </ul>
                `;
            });
            document.getElementById("customers").innerHTML = cust;
           
        }
    }
    xhr.send();
}