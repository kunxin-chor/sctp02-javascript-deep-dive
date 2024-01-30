function onPurchaseButtonClicked() {
    // get the checked radio button
    const checked = document.querySelector(".food:checked");

    // let selectedFood = checked ? checked.value : "N/A";
    let selectedFood = checked && checked.value;
    if (selectedFood == "chicken_rice") {
        price = 5;
    } else if (selectedFood == "duck_rice") {
        price = 6.5;
    } else if (selectedFood == "ice_ceam") {
        price = 3.5;
    } else {
        price = 0;
    }
    const total = price * 1.09;
    alert("Total =" + total);

    // // CHECK FOR FALSIFY
    // if (checked) {
    //     let selectedFood = checked.value;
    //     let price = 0;
    //     if (selectedFood == "chicken_rice") {
    //         price = 5;
    //     } else if (selectedFood == "duck_rice") {
    //         price = 6.5;
    //     } else {
    //         price = 3.5;
    //     }
    //     const total = price * 1.09;
    //     alert("Total price is " + total);
    // } else {
    //     alert("Please select a food");
    // }
}

const btn = document.querySelector("#purchaseBtn")
                    .addEventListener("click", onPurchaseButtonClicked);