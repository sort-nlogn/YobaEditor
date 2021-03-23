var generatorBtns = document.querySelectorAll("a.generator-btn")
var generators = document.querySelectorAll("div.generator")

var generatorsMenu = document.getElementById("generators-menu")

generatorBtns.forEach(function(el){
    el.addEventListener("click", function(){
        generators.forEach(el => el.style.display = "none")
        // generatorsMenu.innerText = el.innerText
        document.getElementById(el.dataset.genid).style.display = ""
    })
})

var inputs = document.querySelectorAll("input.number-input")
// inputs.forEach(function(el){
//     el.addEventListener("input", function(){
//         el.value = el.value.replace("-", "")
//         if(Number(el.value) > Number(el.max)){
//             el.value = el.max
//         }else if(Number(el.value) < Number(el.min)){
//             el.value = el.min
//         }
//     })
// })