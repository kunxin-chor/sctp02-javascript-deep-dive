async function loadData() {
    const response = await axios.get("https://4geeksacademy.github.io/exercise-assets/txt/hello.txt");
    const data = response.data;
    const bodyElement = document.querySelector("body");
    bodyElement.innerHTML = data;
}
loadData();