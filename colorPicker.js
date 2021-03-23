var inputs = document.querySelectorAll("input.color-picker")
var customSlider = document.getElementsByClassName("custom-range")[0]
inputs[0].parentNode.style.backgroundColor = inputs[0].value = "#1487b8"
inputs[1].parentNode.style.backgroundColor = inputs[1].value = "#0beaab"

for(let el of inputs){
    el.addEventListener("input", function(){
        el.parentNode.style.backgroundColor = el.value
    let bg = `linear-gradient(45deg, ${inputs[0].value}, ${inputs[1].value})`
    customSlider.style.background = bg
    })
}