/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Say My Name", "Arms Around You", "Aje", "Happier"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images_links = ["https://tse1.mm.bing.net/th?id=OIP.aMxvlztmVwWkfsJq53NUDQHaEK&pid=15.1&P=0&w=298&h=168","https://tse1.mm.bing.net/th?id=OIP.Y0lsFwHe6cDDVMeDT13VvQHaEK&pid=15.1&P=0&w=303&h=171", "https://tse4.mm.bing.net/th?id=OIP.UnwBlTLp7ZRV9eDgdxrbHwHaEK&pid=15.1&P=0&w=301&h=170", "https://tse4.mm.bing.net/th?id=OIP.DUKONb6eYttbmhvP323i9QHaEK&pid=15.1&P=0&w=297&h=168"];
var artists = ["By: Bebe Rexha", "By: XXXTentacion & Lil Pump", "By: Tayna & Ledri", "By: Marshmello ft. Bastille"];
var lengths=["3:31", "3:19","3:10","3:54"];
var links=["https://www.youtube.com/watch?v=ft4jcPSLJfY", "https://www.youtube.com/watch?v=jJaesAiTuV4", "https://www.youtube.com/watch?v=P-s2teCUjAQ", "https://www.youtube.com/watch?v=m7Bc3pLyij0"];

function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    songs.forEach(function(x){
         $("#songs").append("<p>" + x + "</p>");
    });
    
    images_links.forEach(function(x){
         $("#images").append("<img src=" + x + ">");
    });
    
    artists.forEach(function(x){
         $("#artists").append("<p>" + x + "</p>");
    });
    lengths.forEach(function(x){
         $("#lengths").append("<p>" + x + "</p>");
    });
    links.forEach(function(x){
         $("#links").append("<a href" + x +">"+ "Click Here" + "</a>");
    });
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();
}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
   var song= $("#song").val();
   songs.push(song);
   var image= $("#image").val();
   images.push(image);
   var artist= $("#artist").val();
   artists.push(artist);
   var length= $("#length").val();
   lengths.push(length);
   var link= $("#link").val();
   links.push(link);

}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
