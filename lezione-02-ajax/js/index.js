var xhttp = new XMLHttpRequest();
// programma l'evento readystatechange
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 ) {
        // this.responseText;

        const elementoHtmlList = document.getElementById('lista');

        const posts = JSON.parse(this.responseText);
        for(let i = 0; i < posts.length; i++) {
            /* userId, id, title, body */
            const post = posts[i];

            const elementoDellaLista = document.createElement('li');
            // elementoDellaLista = <li></li>
            elementoDellaLista.innerHTML = post.title; // title C
            // <li>C</li>
            elementoHtmlList.appendChild(elementoDellaLista);
        }

    }
};
xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
xhttp.send();
