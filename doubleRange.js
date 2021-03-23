var slider = document.getElementById("range1")
var l = document.getElementById("b1")
var r = document.getElementById("b2")
// var between = document.getElementById("between")
var selected
var clickX
var d

l.addEventListener("mousedown", (event) => (selected = l, d = event.pageX - selected.getBoundingClientRect().left))
r.addEventListener("mousedown", (event) => (selected = r, d = event.pageX - selected.getBoundingClientRect().left))
document.addEventListener("mouseup", () => selected = undefined)

document.addEventListener("mousemove", function(event){
  if(!selected){
    return
  }
  let slider_coords = slider.getBoundingClientRect()
  let w = Number(getComputedStyle(slider).width.replace("px", ""))
//   console.log((Math.min(w, event.pageX) - slider_coords.left) / w * 100)
  selected.style.left = Math.max((Math.min(w - Number(getComputedStyle(selected).width.replace("px", "")) * 0.95, event.pageX - slider_coords.left - d)) / w * 100, -0.5) + "%"
//   let l1 = Number(getComputedStyle(l).left.replace("px", ""))
//   let l2 = Number(getComputedStyle(r).left.replace("px", ""))
//   between.style.width = (Math.max(l1, l2) - Math.min(l1, l2)) / w * 100 + 1 + "%"
//   between.style.marginLeft = Math.min(l1, l2) / w * 100 + 3 +"%"

})

