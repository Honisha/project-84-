canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car1_width = 120;
car1_height = 70;
car1_image = "car1.png";
car1_x = 10;
car1_y = 10;

car1_width = 120;
car1_height = 70;
car1_image = "car 2.png";
car1_x = 10;
car1_y = 100;

background_image="racing.jpg";

function add(){
    background_imgTag=new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src=background_image;

    car1_imgTag=new Image();
    car1_imgTag.onload=uplodCar1;
    car1_imgTag.src=background_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadBackground(){
    ctx.drawImage(car1_imgTag,car1_x,car1_y,canvas.width,canvas.height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log("keyPressed");
    if(keyPressed=='38'){
        car1_up();
        console.log("up arrow key");
    }
    if(keyPressed=='40'){
        car1_down();
        console.log("down arrow key");
    }
    if(keyPressed=='37'){
        car1_left();
        console.log("left arrow key")
    }
    if(keyPressed=='39'){
        car1_right();
        console.log("w");
    }
}