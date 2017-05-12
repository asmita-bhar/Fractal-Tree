var slider;
var angle;
function setup() {
    createCanvas(600, 600);
    slider=createSlider(0,TWO_PI,PI/4,0.001);
}

function draw() {
    background(0);
    //ellipse(200, 200, 100len);
    angle = slider.value();
    var len = 150;
    translate(300,600);
    stroke(255);
    branch(len);      
}

function branch(len)
{
    line(0,0,0,-len);
    translate(0,-len)
    if(len>2) {
        push();
        rotate(angle);
        branch(0.67*len);
        pop();
        push();
        rotate(-angle);
        branch(0.67*len);
        pop();
        
    }
}

