var $con = $("#container"),
    $tip = $(".tip")

function getColor(){
  var arr = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
  var colorArr = []
  for (var j = 0; j < 6; j++) {
    colorArr.push(arr[Math.floor(Math.random()*15.99)])
  }
  return "#"+colorArr.join('')
}

for (var i = 0; i < 100; i++) {
  var color = getColor()
  $con.append("<div style='background-color:"+color+"'>"+color+"</div>")
}


var flag=false
window.onmousemove=function(e){
  if(flag) return
  flag=true
  var data = "Page:"+e.pageX+','+e.pageY+"\nScreen"+e.screenX+','+e.screenY+"\nClient"+e.clientX+','+e.clientY
  // console.log(data)
  setTimeout(function(){
    flag=false
  },300)
}


$con.on("mouseover","div",function(e){
  var idx = $(this).index("#container div"),
      $top = parseInt(idx/8)*120+20,
      $left = (idx%8)*120-480
      $text = $(this).css("background-color")
  $tip.css({
    display:"block",
    top:$top,
    marginLeft:$left
  }).text($text)
}).on("mouseleave","div",function(e){
  $tip.css({
    display:"none",
    top:"0px",
    marginLeft:"0px"
  })
}).on("click","div",function(){
  $(this).toggleClass("active")
})
