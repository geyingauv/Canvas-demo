var windowHeight = window.screen.height
var windowWidth = window.screen.width
var myCanvas = document.getElementById("myCanvas")
var colors = document.querySelectorAll("#color ul li")
var box_size = 5
window.onload = function () {
  myCanvas.height = 600
  myCanvas.width = 1000
  myCanvas.style.background = "#fff"

  var ctx = myCanvas.getContext("2d");
  var boxes = new Array()
  for (var i = 0; i < myCanvas.width / box_size; i++) {
    for (var j = 0; j < myCanvas.height / box_size; j++) {
      var box = {
        x: i * box_size,
        y: j * box_size,
        color: "#fff"
      }
      boxes.push(box)
    }
  }

  for (var box of boxes) {
    // ctx.lineWidth = 1
    ctx.strokeStyle = "#fff"
    // ctx.lineJoin = "round"
    ctx.rect(box.x, box.y, box_size, box_size)
    ctx.save()
  }
  ctx.stroke()


  function echo(msg) {
    console.log(msg)
  }

  myCanvas.addEventListener('click', function (event) {
    var color = document.querySelector("#color ul li.active")

    var bound = myCanvas.getBoundingClientRect()
    var x = event.pageX - bound.left
    var y = event.pageY - bound.top
    for (var box of boxes) {
      ctx.beginPath()
      ctx.rect(box.x, box.y, box_size, box_size)
      if (ctx.isPointInPath(x, y)) {
        if (color.style.background === "rgb(255, 255, 255)") {
          ctx.fillStyle = "#fff"
          ctx.fill()
        } else {
          ctx.fillStyle = color.style.background;
          ctx.fill();
        }
      }
    }
  })
  colors.forEach(function (ele) {
    ele.addEventListener('click', function () {
      colors.forEach(function (ele) {
        ele.classList.remove("active")
      })
      this.classList.add("active")
    })
  })


}