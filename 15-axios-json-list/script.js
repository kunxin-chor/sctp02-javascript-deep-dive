document.addEventListener("DOMContentLoaded", async function(){
    const response = await axios.get("list.json");
    console.log(response.data);

    // 1. take one product from response.data
    for (let p of response.data) {
        // 2. create a div element and set its class and style to be a Bootstrap card
        let divElement = document.createElement("div");
        divElement.className="card mt-3";
        divElement.style.width="18rem";

        // 3. fill in the innerhtml of the div so that it will
        // be a bootstrap card and also fill in the detail from the product
        divElement.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${p.name}</h5>
                <div class="card-text">
                    <ul>
                        <li>SKU: ${p.sku}</li>
                        <li>Cost: $${p.cost}</li>
                    </ul>
                </div>
            </div>
        `
      
        // 4. append the new div element to the html
        document.querySelector("#products").appendChild(divElement);

        // 5. repeat until there is no next product in response.data
    }
   
})