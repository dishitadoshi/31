const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var drop;
var MaxDrop =100;
function preload(){
    
}
function setup(){
    var canvas = createCanvas(700,600);
    engine = Engine.create();
    world = engine.world;
    
    drop = new Drop(46,78,30);
    
}

function draw(){
    background("black");
    Engine.update(engine);
    drop.display();
    MDrop();
}   

function MDrop(){
    for(var i=0; i<MaxDrop; i++){
        drop.push(new createDrop(random(0,400), random(0,400)));
    }
}