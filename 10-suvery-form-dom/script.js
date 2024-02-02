const submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", function () {
    // first select the input#firstName and save the object into a variable
    const firstNameInput = document.querySelector("#firstName");
    // second, retrieve the `value` key from the object from the first step
    // and assign it to a varianle named `firstName`
    const firstName = firstNameInput.value;
    // third, console.log the value gotten from the object
    console.log(firstName);

    // alternatively:
    // const firstName = document.querySelector("#firstName").value

    // Continue from here: add in the code to retrieve the last name
    // (but of course, you need to add the HTML for the last name field first)
    const lastName = document.querySelector("#lastName").value;
    console.log(lastName);

    // Get the radio button that has been checked
    // :checked is a pesudo-class. It is defined by the browser (not by us)
    // a pesudo-class is automatically added to an element when certain condition is met
    // eg. :hover --> is automatically added when the mouse cursor is over an element
    //     :checked --> is automatically added to a checkbox, option or radio button
    //                  when it is selected
    const checkedHobbyRadio = document.querySelector(".hobbies:checked");
    const hobby = checkedHobbyRadio.value;
    console.log(hobby);

    // allow the survey taker to select their educational level
    // choose from: primary, secondary, tertiary and undergrad 
    // Important: make sure those radio buttons have the same name
    // then perform the steps so that we can store the educational
    // level in a variable, then console.log it
    // const educationalLevel = document.querySelector(".level:checked") ? document.querySelector(".level:checked").value : "N/A";

    // Null Coalescence: if the value before the question mark is null, then the entire expression
    // is short circuited to null
     const educationalLevel = document.querySelector(".level:checked")?.value || "No educational level selected"; 


    console.log(educationalLevel);

    // Only five constructs in programming
    // 1. variable manipulation
    //  - create a new variable
    //     - what data type?
    //     - primtives: number (int, float), string, boolean
    //     - references: object, arrays
    //  - assign or reassign to a variable
    //  - read from variable 
    // ! objects/arrays are considered as variables
    // 2. sequence
    // - you execute two instructions in a sequence
    // 3. branching - if/else or if/else if
    // 4. loop - for (if the range is apparent), while (non-deterministic, stop only if a user condition is met)
    // 5. function call (either our own custom function, or JavaScript built in function, or an imported function from require)

    // SELECT ALL THE CHECKBOXES THAT HAVE BEEN CHECKED
    // AND GET THEIR VALUE AND STORE THEM IN A VARIABLE
    let selectedScents = [];

    // get all the checked checkboxes in an array
    let checkedScentCheckboxes = document.querySelectorAll('.scent:checked');

      // take one selected checkbox from the array one at a time 
    for (let s of checkedScentCheckboxes) {
      
        // extract its value
        const scent = s.value;
        // save the value into the array
        selectedScents.push(scent);
        // repeat until there are no more checkbox
    }
    console.log(selectedScents);


    // 1. get all the checked cuisine checkboxes
    // const checkedCuisineCheckboxes = document.querySelectorAll(".cuisine:checked");
    // const checkedCuisineCheckboxes = document.querySelectorAll(`[name="cuisine"]:checked`);
    const checkedCuisineCheckboxes = document.querySelectorAll("#cuisine .cuisine:checked");

    // 2. create an empty array to store the checked checkboxes' values
    const favoriteCuisines = [];

    // 3. extract one checkbox at a time from all checked checkboxes
    for (let checkbox of checkedCuisineCheckboxes) {
        // const cuisine = checkbox.value;
        // favoriteCuisines.push(cuisine);

        // 4. extract the value
        // 5. store the value in the array
        favoriteCuisines.push(checkbox.value);
    
     // 6. repeat until there are no more checkboxes left to process
    }
    console.log(favoriteCuisines);

    // SELECT

    // 1. use query selector to select the <select id="country">
    const countrySelect = document.querySelector("#country");

    // 2. extract its value and save into the `country` variable
    const country = countrySelect.value;

    // 3. console.log the country variable
    console.log(country);

    document.querySelector("#output-container").style.display = "block";

    const output = document.querySelector("#output");
    output.innerHTML += `
     <ul>
        <li>Name: ${firstName} ${lastName}</li>
        <li>Country: ${country}</li>
        <li>Favorite Hobby: ${hobby}</li>
        <li>Educational Level: ${educationalLevel}</li>
        <li>Scent: ${selectedScents}</li>
        <li>Favorite Cuisine: ${favoriteCuisines}</li>
     </ul>
    
    `

})