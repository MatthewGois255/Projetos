const content = document.querySelector(".content");
const inputSearch = document.querySelector("input[type='search']");

let items = [];

inputSearch.oninput = () => { // é executado assim que recebe um input
    content.innerHTML = ""; // apaga todo o conteúdo de content
    items
        .filter((item) =>
            item.toLowerCase().includes(inputSearch.value.toLowerCase())
        )
        .forEach((item) => addHTML(item));
};

function addHTML(item) {
    const div = document.createElement("div");
    div.innerHTML = item;
    content.append(div)
}

fetch("https://jsonplaceholder.typicode.com/users")
    .then((data) => data.json()) // converte para json os dados
    .then((users) => {
        users.forEach((user) => {
            addHTML(user.name);
            items.push(user.name);
        });
    });