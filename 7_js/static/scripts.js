/**
Assignment 7
/** Load the list of albums */


var result;

function listAlbums() {
    console.log("mammasin")
        // TODO make an AJAX request to /albums
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            result = JSON.parse(xhr.responseText); //decode JSON with parsing
            let album_list = document.getElementById("albums_list");
            for (let index = 0; index < result.length; index++) {
                let albums_li = document.createElement("li");
                let albums_a = document.createElement("a");
                albums_a.innerText = result[index][1]; //gets the album name
                albums_li.appendChild(albums_a)

                album_list.appendChild(albums_li)
                albums_li.onclick = function() {

                    showAlbum(index + 1);
                }
            }
        }
    };
    /* send the request using GET */
    xhr.open("GET", "/albums", true);
    xhr.send(null);
    // then populate the "albums_list" list with the results
}

/** Show details of a given album */
var resultat;

function showAlbum(album_id) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            resultat = JSON.parse(xhr.responseText);
            document.getElementById("album_cover").innerHTML = ""; //clears body for every time the function is clicked on
            let album_songs = document.getElementById("album_songs");
            album_songs.innerHTML = "";

            var table = document.createElement("table")




            // TODO make an AJAX request to /albuminfo with the selected album_id as parameter (i.e., /albuminfo?album_id=xxx),


            //console.log(resultat)
            let img = document.createElement("img");
            let album_cover = document.getElementById("album_cover");




            img.src = "/static/images/" + resultat[0][1];
            album_cover.appendChild(img);
            var firstrow = document.createElement("tr");
            var no = document.createElement("th");
            var title = document.createElement("th");
            var length = document.createElement("th");

            no.innerText = "No.";
            title.innerText = "Title.";
            length.innerText = "Length.";
            firstrow.appendChild(no);
            firstrow.appendChild(title);
            firstrow.appendChild(length);
            table.appendChild(firstrow);
            no.className = "song_no";
            title.className = "song_title";
            length.className = "song_length";

            album_songs.appendChild(table)

            for (let i = 0; i < resultat[0][0].length; i++) { //loops through the album:info

                let song_info = resultat[0][0][i];
                let song_name = song_info[0]; //the title of the song
                let song_duration = song_info[1]; //duration of the song

                let tr = document.createElement("tr");
                let td1 = document.createElement("td"); //Number
                let td2 = document.createElement("td"); //Song_name
                let td3 = document.createElement("td"); //duration


                td1.innerText = i.toString();
                td2.innerText = song_name;
                td3.innerText = song_duration;

                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                table.appendChild(tr);


            }

        }
    }
    xhr.open("GET", "/albuminfo?album_id=" + album_id, true);
    xhr.send(null);
    // then show the album cover in the "album_cover" div and display the tracks in a table inside the "album_songs" div
}