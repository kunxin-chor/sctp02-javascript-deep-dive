document.addEventListener("DOMContentLoaded", async function(){
    const response = await axios.get("https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/json-simple.json");
    console.log(response.data);

    document.querySelector("#name")
        .innerHTML = response.data.Name;

    document.querySelector("#mobileNumber")
        .innerHTML = response.data.Mobile;

    document.querySelector("#currentAddress")
        .innerHTML = response.data.Address["current Address"]
    
    document.querySelector("#permanentAddress")
        .innerHTML = response.data.Address["Permanent address"]

})