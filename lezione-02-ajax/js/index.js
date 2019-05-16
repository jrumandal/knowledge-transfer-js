var xhttp = new XMLHttpRequest();
// programma l'evento readystatechange
xhttp.onreadystatechange = function () {
    if (this.readyState == 4 ) {
        // this.responseText;
        const $ul = $('.lista_speciale, [name="aaa"]');

        const postsRaw = JSON.parse(this.responseText);
        let posts = postsRaw.slice(0, 10);
        for(let i = 0; i < posts.length; i++) {
            /* userId, id, title, body */
            const post = posts[i];
            const $li = $('<li></li>');
            $li.text(post.title);
            $ul.append($li);
        }

    }
};
xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true);
xhttp.send();

