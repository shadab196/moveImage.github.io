const image = document.getElementById("image");
let positionX = 0;

let positionY = 0;

const step = 10;

document.addEventListener("keydown", function(event) {
    
    if (event.key === 'ArrowDown') {
        positionY = Math.min(positionY + step, window.innerHeight - image.clientHeight);
    } else if (event.key === 'ArrowUp') {
        positionY = Math.max(positionY-step,0);
    } else if (event.key === 'ArrowLeft') {
        positionX  = Math.max(positionX-step,0);
    } else if (event.key === 'ArrowRight') {
        positionX = Math.min(positionX + step, window.innerWidth - image.clientWidth);;
    }
    
    
        image.style.left = positionX + "px";
        
        image.style.top = positionY + "px";
        

    
});





