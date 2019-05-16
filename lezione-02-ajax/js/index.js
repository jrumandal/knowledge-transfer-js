var xhttp = new XMLHttpRequest();
// programma l'evento readystatechange
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 ) {
        const pre = document.getElementById("result-container");

        pre.innerHTML = this.responseText;
    }
};
xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
xhttp.send();
