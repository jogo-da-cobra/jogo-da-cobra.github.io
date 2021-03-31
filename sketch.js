let snake;
let rez = 20;
let food;
let w;
let h;
let score = 0

function setup() {
    createCanvas(380, 250);
    w = floor(width / rez);
    h = floor(height / rez);
    frameRate(5);
    snake = new Snake();
    foodLocation();
    //scoreElem = createDiv('Score = ');
    //scoreElem.position(20, 20);
    //scoreElem.id = 'score';
    //scoreElem.style('color', 'white');
}

function foodLocation() {
    let x = floor(random(w));
    let y = floor(random(h));
    food = createVector(x, y);

}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        snake.setDir(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
        snake.setDir(1, 0);
    } else if (keyCode === DOWN_ARROW) {
        snake.setDir(0, 1);
    } else if (keyCode === UP_ARROW) {
        snake.setDir(0, -1);
    } else if (key == ' ') {
        snake.grow();
    }

}

function draw() {
    background(220);
    textSize(15);
    fill(0)
    text('Score = ' + score, 20, 20);

    scale(rez);

    if (snake.eat(food)) {
        foodLocation();
        score = score + 1
    }
    fill(255)
    text(score, 20, 20)
    snake.update();
    snake.show();


    if (snake.endGame()) {
        print("END GAME");
        background(255, 0, 0);
        noLoop();
    }

    noStroke();
    fill(255, 0, 0);
    rect(food.x, food.y, 1, 1);
}