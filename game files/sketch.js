let width, height, t;
function setup() {
    let size = innerWidth < innerHeight ? innerWidth : innerHeight;
    width =600;
    height = 600;
    createCanvas(width, height);
    noStroke();
    fill(40, 200, 40);
    t = 0;
}

function draw() {
    background(10, 10);

    for(let i = 0; i <= width; i += 30) {
        for(let j = 0; j <= height; j += 30) {
            let angleX = map(mouseX, 0, width, -4 * PI, 4 * PI, true);
            let angleY = map(mouseY, 0, height, -4 * PI, 4 * PI, true);
        
            let angle = angleX * (i / width) + angleY * (j / height);

            let myX = i + 20 * cos(2 * PI * t + angle);
            let myY = j + 20 * sin(2 * PI * t + angle);

            ellipse(myX, myY, 10, 10);
        }
    }
    t += 0.01;
}