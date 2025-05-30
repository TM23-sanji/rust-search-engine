console.log("Querying API...")

fetch("api/search", {
    method: 'POST',
    // mode: 'cors',
    // cache: 'no-cache',
    // credentials: 'same-origin',
    headers: {
        'Content-Type': 'text/plain'
    },
    // redirect: 'follow',
    // referrerPolicy: 'no-referrer',
    body: "glsl function for linearly interpolation"
}).then((response) => console.log(response))