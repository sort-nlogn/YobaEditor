var additionalyBtn = document.getElementsByClassName("additionalyBtn")[0]
var sidebar = document.querySelectorAll("nav")[1]
var h1 = document.querySelector("h1")
additionalyBtn.addEventListener("click", function(){
    if(sidebar.className == "nav"){
        for(let child of sidebar.children){
            child.style.display = "none"
        }
        sidebar.className = "collapsed-nav"
    }else{
        for(let child of sidebar.children){
            child.style.display = ""
        }
        sidebar.className = "nav"
    }
})

sidebar.addEventListener("click", function(event){
    console.log("sidebar clicked")
    event.stopPropagation()
})


var navbar = document.getElementsByClassName("navbar")[0]

navbar.addEventListener("click", function(event){
    console.log("navbar clicked")
    event.stopPropagation()
})

var scenesBtn = document.getElementsByClassName("scenesBtn")[0]
var scenes = document.getElementsByClassName("scenes")[0]
scenes.style.display = "none"
scenesBtn.addEventListener("click", function(){
    scenes.style.display == "none" ? scenes.style.display = "block": scenes.style.display = "none"
})


function windowResized(){
    resizeCanvas(windowWidth, windowHeight)
}

function mouseClicked(){
    console.log(mouseX, mouseY)
}

function setup(){
    w = windowWidth
    h = windowHeight
    createCanvas(windowWidth, windowHeight)
}

var step = 1
function draw(){
    background(255)
    noStroke()
    fill(255, 0, 0)
    circle(550, 550, 10)
}