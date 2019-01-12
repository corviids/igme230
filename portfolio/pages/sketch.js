//Whaleshark x-axis

let rayTot = 31; //one less than total frames
let images = [];
let unit;

function preload() {
    for (let i = 1; i < rayTot; i++) //i = number behind the first frame (there is no whaleshark0.png)
        images[i] = loadImage("../images/whaleframes/whaleshark" + [i] + ".jpg"); //whaleframes is in the local folder
}

function setup() {
    createCanvas(500, 500);
    for (let i = 1; i < rayTot; i++)
        images[i].resize(height, width); //will take a while to load. resize to canvas
    //image(images[10], 0, 0); //TEST just to display one of the pics in the array
    unit = width / rayTot; //increment unit for the mouse
}

function draw() {
    for (let i = 1; i < rayTot; i++) {
        if (mouseX > unit * i && mouseX < unit * i + unit) { //get mouseX and match it to a frame
            image(images[i], 0, 0); //display the frame
        }
    }
}
