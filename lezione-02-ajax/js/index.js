var xhttp = new XMLHttpRequest();
// programma l'evento readystatechange
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 ) {
        // this.responseText;
        
        const elementoHtmlList = document.getElementById('lista');

        const posts = JSON.parse(this.responseText);
        var listaConcatenata = '';

        for(let i = 0; i < posts.length; i++) {
            /* userId, id, title, body */
            const post = posts[i];

            listaConcatenata = listaConcatenata + "<li>"+post.title+"</li>";
        }

        elementoHtmlList.innerHTML = listaConcatenata;
    }
};
xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
xhttp.send();
