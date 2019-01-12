//preload
var images = [];

function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}

require(['./lightgallery.js'], function () {
    require(["./lg-zoom.js", "./lg-thumbnail.js"], function () {
        $("#lightgallery").lightGallery();
    });
});
//initiate gallery
$(document).ready(function () {
    $("#lightgallery").lightGallery();
});
//-- use --//
preload(
    "images/gallery/caterpillar.png",
    "images/gallery/chromodoriswillani.png",
    "images/gallery/dermatobranchusornatus.png",
    "images/gallery/floatseq1.gif",
    "images/gallery/glaucusatlanticus.png",
    "images/gallery/glitch-01.png",
    "images/gallery/glow.png",
    "images/gallery/hands.png",
    "images/gallery/muko.png",
    "images/gallery/nembrothaaurea.png",
    "images/gallery/nembrothacristata.png",
    "images/gallery/orcas.png",
    "images/gallery/owl.jpg",
    "images/gallery/shrooms-agaric.png",
    "images/gallery/stercorosus_white.png",
    "images/gallery/whales_render.png"
)

/* when it is hovered over,,, */
$(".menuitem").hover(function () {
    /* make it go down */
    console.log("hamburger hover");
    $(this).next(".submenu").slideDown();
});

/* when the mouse leaves that area, go back up. */
$(".submenu").mouseleave(function () {
    $(this).slideUp();
});

// // modal
// // Get the modal
// var modal = document.getElementById('myModal');

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById('myImg');
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.p;
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() { 
//   modal.style.display = "none";
// }
