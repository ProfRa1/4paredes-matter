const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

function setup() {
    createCanvas(400, 400);
    engine = Engine.create();

    world = engine.world;
    rectMode(CENTER);
    ellipseMode(RADIUS);

    var options = {
        isStatic: true,
    };

    ground = Bodies.rectangle(200, 390, 400, 20, options);
    World.add(world, ground);

    ground2 = Bodies.rectangle(10, 200, 20, 400, options);
    World.add(world, ground2);

    ground3 = Bodies.rectangle(390, 200, 20, 400, options);
    World.add(world, ground3);

    ground4 = Bodies.rectangle(200, 10, 400, 20, options);
    World.add(world, ground4);
}

function draw() {
    background(51);
    Engine.update(engine);
    fill("orange");
    rect(ground.position.x, ground.position.y, 400, 20);
    rect(ground2.position.x, ground2.position.y, 20, 400);
    rect(ground3.position.x, ground3.position.y, 20, 400);
    rect(ground4.position.x, ground4.position.y, 400, 20);
}
