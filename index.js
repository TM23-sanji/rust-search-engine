async function search(prompt) {
    const results = document.getElementById("results");
    results.innerHTML = "";
    console.log("Querying API...")
    const response = await fetch("/api/search", {
        method: "POST",
        headers: {'Content-Type': 'text/plain'},
        body: prompt,
    });
     const json= await response.json()
     results.innerHTML = "";
     for ([path, rank] of json){
        let item = document.createElement("span");
        item.appendChild(document.createTextNode(path));
        item.appendChild(document.createElement("br"));
        results.appendChild(item);
    }
}

let query = document.getElementById("query");
let currentSearch = Promise.resolve();
query.addEventListener("keypress", (event) => {
    if (event.key == "Enter") {
        currentSearch.then(()=>search(query.value));
    }
});