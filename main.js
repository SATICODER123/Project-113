function preload() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";
}

function draw() {
    image(video, 140, 110, 340, 280);
    
    rect(20, 20, 600, 10, 10);
    rect(20, 440, 600, 10, 10);
    circle(40, 30, 60, 10, 10);
    circle(600, 30, 60, 10, 10);
    circle(600, 440, 60, 10, 10);
    circle(40, 440, 60, 10, 10);
}

function take_snapshot() {
    save('student_name.png');
}


rect(30, 20, 55, 55);
describe('white rect with black outline in mid-right of canvas');