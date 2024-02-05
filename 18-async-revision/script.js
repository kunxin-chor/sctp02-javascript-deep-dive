// In-depth explanation: Event Loop
// Any instruction that can be executed "instanteously" (i.e below a certain time limit)
// will be executed synchronously (i.e in a sequence)
document.addEventListener("DOMContentLoaded", function(){
    // the instructions in the next few lines
    // executes instanteously with no wait time
    // so they are "synchronous"
    document.querySelector("#loadDataBtn").addEventListener("click", async function(){
        // first parameter is an URL
        // the URL is RELATIVE because it doesn't start with a 'https'
        // the `data.txt` is relative to the URL of `index.html`
        // the rule: when using a relative URL (be it to image, css files eec. etc.)
        // the request will be for the FILE in the same DIRECTORY as the HTML file
        const response = await axios.get("data.txt");
        console.log(response.data);
        document.querySelector("#rhymes").innerHTML = response.data;
    });

    document.querySelector("#loadCustomersBtn").addEventListener("click", async function(){
       // if axios detects that the file format is JSON
       // then response.data will be a JavaScript object
        const response = await axios.get("customers.json");
        
        // list rendering

        // 1. select the parent container that will store each list item
        const customerList = document.querySelector("#customers");
       console.log(response.data);
        // 2. take one customer from response.data one at a time
        for (let eachCustomer of response.data.customers) {
              // 3. create a new <li> element (it won't be attached to any DOM element)
              const newListItem = document.createElement("li");

            // 4. populate the <li> element
            newListItem.innerHTML = `${eachCustomer.name} : ${eachCustomer.email}`;
            // this is also the point where you can set `style` or add a class
            newListItem.style.backgroundColor = "yellow";
            newListItem.className = "list-group-item";  

            // 5. add the new <li> element to the parent
            customerList.appendChild(newListItem);

            // 6. repeat until there is no customer left
        }

      
    })
})