document.addEventListener("DOMContentLoaded", async function(){
    const response = await axios.get("https://raw.githubusercontent.com/kunxin-chor/data-files-and-stuff/master/users.json");
    
    // let the ul that will store the users
    const userList = document.querySelector("#users");

    // go each through user from response.data
    for (let user of response.data.users) {

        // create the li element
        const listElement = document.createElement('li');

        // populate the li element by setting its innerHTML
        listElement.innerHTML = `${user.firstName} ${user.lastName} (${user.emailAddress})`

        // append child
        userList.appendChild(listElement);

        // repeat with the next user from response.data
    }
})