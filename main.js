canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

nasa_mars_images_array = ["nasa_image_1.jpg","nasa_image_2.jpeg", "nasa_image_3.jpg","nasa_image_4.jpg"];

random_number = Math.floor(Math.random() * 4);
console. log(random_number);
rover_width = 100;
rover_height = 90;

background_image = nasa_mars_images_array[random_number];
console. log("background_image = " + background_image);
rover_image = "rover.png";

rover_x = 10;
rover_y = 10;


function add () {
    backgroundImgTag = new Image (); 
    backgroundImgTag.onload = uploadBackground;
    backgroundImgTag.src = backgroundImage;


    roverImgTag = new Image();
    roverImgTag.onload = uploadrover;
    roverImgTag.src = roverImage;
}

function uploadBackground() {
ctx.drawImage(backGroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover () {
ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight);
}

window.addEventListener ("keydown", myKeyDown);

function myKeyDown(e)
{

    keyPressed = e.keycode;
    console.log(keyPressed);
    if(keyPressed == '38')
    {
        up();
        console.log("cima");
    }
if (keyPressed =='40')
{
    down();
    console.log("baixo");
}
if(keyPressed =='37')
{
left();
console.log("esquerda");
}
if(keyPressed =='39')
{
    right();
    console.log("direita");
}
}

function up()
{
    if(roverY>=0)
    {
     roverY = roverY -10;
     console.log("quando a seta pra cima é pressionada, x =" +roverX + "| y =" +roverY);
     uploadBackground();
     uploadrover();
 
    }

    
}


function down()
{
    if(roverY<=500)
    {
     roverY = roverY+ 10;
     console.log("quando a seta pra baixo é pressionada, x =" +roverX + "| y =" +roverY);
    uploadBackground();
    uploadrover();

    }

    
}


function left()
{
if(roverX >= 0)
{
roverX =roverX - 10;
console. log("Quando a seta para esquerda é pressionada, x = " + roverX + " | y = " +roverY);
uploadBackground();
uploadRover();
}
}


function right()
{
if(roverX <= 700)
{
roverX =roverX + 10;
console. log("Quando a seta para direita é pressionada, x = "+ roverX + " | y = " +roverY);
uploadBackground();
uploadRover();}
}