// Load the description.txt file and place it in the <p> tag
fetch("assets/description.txt")
    .then((res) => res.text())
    .then((text) => {
        document.getElementById("textfile").innerHTML = text;
    })
    .catch((e) => console.error(e));