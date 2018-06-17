
let stage = document.getElementById('stage');
let ctx = stage.getContext('2d');

document.addEventListener('keydown', keyPush);


setInterval(game, 60);

const vel = 1;

let velocX = velocY = 0;
let posX = posY = 10;
let sizeP = 20;
let quantP = 20;
let appleX = appleY = 15;

let trail = [];
tail = 5;


function game(){

    posX += velocX;
    posY += velocY;

    if(posX < 0){

        posX = quantP-1;
    }

    if(posX > quantP - 1){
        posX = 0;
    }

    if(posY < 0){
        posY = quantP - 1;
    }

    if(posY > quantP-1){
        posY = 0;
    }

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, stage.width, stage.height);

    ctx.fillStyle = 'red';
    ctx.fillRect(appleX*sizeP, appleY*sizeP, sizeP, sizeP);

    ctx.fillStyle = 'gray';
    for(let i = 0; i < trail.length; i++) {
        ctx.fillRect(trail[i].x * sizeP, trail[i].y * sizeP, sizeP, sizeP);
        if(trail[i].x == posX && trail[i].y == posY){

            velocX = velocY = 0;
        }
    }

    trail.push({x:posX, y:posY})
    while(trail.length > tail) {
        trail.shift();
    }

    if(appleX == posX && appleY == posY){
        tail++;
        appleX = Math.floor(Math.random()*quantP);
        appleY = Math.floor(Math.random()*quantP);
    }
     
}

function keyPush(event){

    switch(event.keyCode) {

        case 37:
            velocX = -vel;
            velocY = 0;
            break;

        case 38:
            velocX = 0;
            velocY = -vel;
            break;

        case 39:
            velocX = +vel;
            velocY = 0;
            break;

        case 40:
            velocX = 0;
            velocY = +vel;
            break;
    }

}




