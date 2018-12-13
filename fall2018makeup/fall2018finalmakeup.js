/* when "menu" is clicked, run: **/
$(".menu").click(function(){
/* THIS MENU's "submenu" is toggled. */
    $(this).next(".submenu").slideToggle();
    console.log("click");
});

/* default */
$("#story").load("story0.txt");
/** when clicked, identify the ID*/
$("li").click(function(){
    var id = $(this).attr('id');
    console.log(id);
    /** load the story that matches the ID */
    $("#story").load(id);
    });

/** color menu: when clicked, replace #source background */
$("#lightpink").click(function(){
        console.log("its pink");
        $("#source").css("background-color","lightpink");
});
$("#lightsalmon").click(function(){
    console.log("fisch");
    $("#source").css("background-color","lightsalmon");
});


/* extra credit */
let count = 0;
$("#increment").click(function(){
    /* increment count */
    count++;
    /* the html (text) inside "counter" is changed to [input]  AKA count */
    $("#currentcount").html(count);
});