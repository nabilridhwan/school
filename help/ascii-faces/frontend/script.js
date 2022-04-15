const url = 'http://localhost:3000'; // TODO: Add URL

function getRandomCoolAsciiFace() {
    return fetch(url).then(function (response) {
        return response.json();
    }).then(function (json) {
        return json.face;
    })
}

const refreshButton = document.getElementById("refresh");
const faceH1 = document.getElementById("face")

refreshButton.addEventListener("click", async () => {
    faceH1.innerText = "Loading...";
    const face = await getRandomCoolAsciiFace();
    faceH1.innerText = face;
})