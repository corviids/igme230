/* Don't use <script> tags in a linked js file! */
/* when "menuitem" is clocked, load: **/
// $(".menuitem").click(function(){
//     /* THIS MENU's "submenu" is toggled. */
//     $(this).next(".submenu").slideToggle();
//     console.log("click");
// });

/* create variable to be called later */
let textfill = $("#choose-content").val();
/* load default */
$("#content").load(textfill); 


/* AJAX shit. when "content menu" is clicked, load function */
$("#choose-content").change(function(){
    console.log("click happened");
    /*identify the content */
    textfill = $(this).val();
    /* change content to selected value */
    $("#content").load(textfill);
});

/* when it is hovered over,,, */
$(".menuitem").hover(function(){
    /* make it go down */
    $(this).next(".submenu").slideDown();
});

/* when the mouse leaves that area, go back up. */
$(".submenu").mouseleave(function(){
    $(this).slideUp();
});

/* count exists. */
let count = 0;

/* button stuff. */
$("button").click(function(){
    /* increment count */
    count++;
    /* the html (text) inside "counter" is changed to [input]  AKA count */
    $(".counter").html(count);
});

