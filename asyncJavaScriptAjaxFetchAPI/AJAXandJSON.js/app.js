document.getElementById('button1').addEventListener('click',loadCustomer);
document.getElementById('button2').addEventListener('click',loadCustomers);

//load single customer (single JSON object)
function loadCustomer(e){
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customer.json', true);

  xhr.onload = function(){
    if(this.status === 200){
      // console.log(this.responseText);

      const customer = JSON.parse(this.responseText);
      //now lets take the JSON and slap it on the page
      const output = 
      `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `
      //lets put our JSON output to the customer div
      document.getElementById('customer').innerHTML = output;
    };
  }

  xhr.send();
};

//Load multiple customers

function loadCustomers(e){
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function(){
    if(this.status === 200){
      // console.log(this.responseText);

      const customers = JSON.parse(this.responseText);

      let output = '';

      //because we are grabbing an array rather than a single JSON object, we have to loop through it
      customers.forEach(function(customer){
        // use += because we want to append to our output variable we created above
        //of we just put output = we would be overwriting the output variable each time
         output += 
      `
        <ul>
          <li>ID: ${customer.id}</li>
          <li>Name: ${customer.name}</li>
          <li>Company: ${customer.company}</li>
          <li>Phone: ${customer.phone}</li>
        </ul>
      `

      });

      
      //lets put our JSON output to the customer div
      document.getElementById('customers').innerHTML = output;
    };
  }

  xhr.send();
};