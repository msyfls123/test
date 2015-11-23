// d3可视化中的阳光小箭头
  var light=function(dis1,dis2){svg.append("image")  
    .attr("x",dis1)  
    .attr("y",dis2)  
    .attr("width",10)  
    .attr("height",10)  
    .attr("xlink:href","img/light.svg")
    .attr("opacity",.1)
    .transition()
    .duration(1000)
    .ease("linear")
    .attr("x",dis1+15)
    .attr("y",dis2+15)
    .attr("opacity",1)
    .transition()
    .duration(1000)
    .ease("linear")
    .attr("x",dis1+30)
    .attr("y",dis2+30)
    .attr("opacity",.1)
    .remove();
  }

// d3可视化中的水流
  var water=function(x){
    var random=.5*Math.random()+.75;
    svg.append("circle")
    .attr("cx",340+x)
    .attr("cy",200)
    .attr("r",2)
    .attr("fill","#5be")
    .attr("opacity",0)
    .transition()
    .delay(1570)
      .duration(1000)
      .ease("linear")
      .attr("cx",340+1.5*x*random)
      .attr("cy",250)
      .attr("opacity",1)
      .transition()
      .duration(1000)
      .ease("linear")
      .attr("cx",340+2*x*random)
      .attr("cy",300)
      .attr("opacity",.1)
      .remove()
  }
$(document).ready(function() {


// start 爆炸图效果

//定义数据
var pics=[
      // url,width,height,init_top,init_left,move_top,move_left,title,content
      ["img/suo/00.png",330,200,175,200,175,200,"The Lock","Click on me to see more!"],
      ["img/suo/01.png",180,120,180,214,60,85,"Innovative motor-lid patent technology","Midea values sustainable business operations through a balance of economic, social and environmental factors."],
      ["img/suo/02.png",160,120,176,350,20,520,"T2.0mm Multi-layer inner pot ","Midea focuses on optimization of both its operations and the design of its products to minimize environmental damage."],
      ["img/suo/03.png",190,110,239,327,190,320,"Touch control on the upper lid","During the manufacturing processes, Midea focuses on improving efficiency in energy, waste, water, and carbon emissions. "],
      ["img/suo/04.png",70,80,239,360,130,450," Easy-to-read graphical user guide LCD display"," Midea strives to help individuals and entire communities develop a better world for today"],
      ["img/suo/05.png",340,200,171,196,215,20,"Multi-function cooking by menu settings","Midea works with several non-profit organizations to provide charitable support to local communities."],
      ["img/suo/06.png",350,190,192,188,360,415,"Programmable preset timer","Midea Dishwasher R&D Center is the largest and most advanced of its kind in Asia. "],
      ["img/suo/07.png",360,180,195,188,350,-80,"Automatic keep warm function","Midea kitchen appliance division has approximately 10,000 employees with a sales revenue of 10 billion Yuan."],
    ]

//空数组用来存放各个部分的jQuery对象
var picObjs=new Array();


//插入图片，并赋予相应数值
for (var i = pics.length - 1; i >= 0; i--) {
  var newObj=document.createElement("div")
  newObj.className="pic"
  newObj.style.backgroundImage="url("+pics[i][0]+")"
  newObj.style.width=pics[i][1]+"px"
  newObj.style.height=pics[i][2]+"px"
  newObj.style.top=pics[i][3]+"px"
  newObj.style.left=pics[i][4]+"px"
  newObj.style.opacity=1
  $newObj=$(newObj)
  $newObj.attr({
    "title":pics[i][7],
    "data-content":pics[i][8],
    "data-toggle":"popover"
    })

  if(i==1||i==2||i==5){
    $newObj.attr("data-placement","left")
  }
  if(i==0||i==6||i==7){
    $newObj.attr("data-placement","top")
  }
  var picObj=$("#explode").append($newObj)
  picObjs.push($newObj)
};

//反转图片序列，因为是倒着插入的，很重要
picObjs.reverse()

//图片位移动画
function show(id,dir){
  var delayTime=dir?id*250:250*(7-id)
  var moveTop=dir?pics[id][5]:pics[id][3]
  console.log(moveTop)
  var moveLeft=dir?pics[id][6]:pics[id][4]
  console.log(moveLeft)
  picObjs[id].stop(true,true).delay(delayTime).animate({"top":moveTop+"px","left":moveLeft+"px"},500)
}

function start(){
  picObjs[0].stop(false,false).fadeOut("fast")
  for (var idx = 1; idx <= picObjs.length-1; idx++) {
    show(idx,true)
  };
}

function reset(){
  for (var idx = picObjs.length-1; idx >= 1; idx--) {
    show(idx,false)
  };
  picObjs[0].delay(1850).fadeIn("300")
}

$(function(){
  $(".pic").hover(
    function(){$(this).addClass("on")},
    function(){$(this).removeClass("on")
  })
  $('[data-toggle="popover"]').hover(function(){$(this).popover("show")},function(){$(this).popover("hide")})
  $("#explode button").on("click",function(){reset()})
  picObjs[0].on("click",function(){start()})
})

  // end of explode

    $('#myModal').modal("show")
    $(".thumbnail a").imgbox({
      padding: 0,               // Set the padding/transparent border around the image.
      border: 0,                 // Set the solid border around the image.
      alignment: 'center',       // Position - may be auto OR center.
      allowMultiple: false,      // Allow opening multiple imgBoxes.
      autoScale: true,           // Scale the image to fit the available space.
      speedIn: 500,              // Set the zoom-in speed.
      speedOut: 500,             // Set the zoom-out speed.
      easingIn: 'swing',         // Set the zoom-in animation easing.
      easingOut: 'swing',        // Set the zoom-out animation easing.
      zoomOpacity: false,        // If true, changes image transparency when zooming.
      overlayShow: true,         // Display an overlay under the imgBox.
      overlayOpacity: 0.85,       // Set overlay opacity.
      hideOnOverlayClick: true,  // Hide imgBox when the overlay is clicked.
      hideOnContentClick: true, // Hide imgBox when the image is clicked.
      slideshow: false,           // Display next/previous controls.
      theme: 'light'             // Choose a color scheme (light/black).
    });

	$('#Keyshot3D').tooltip({placement:"right"});
       $(".jqzoom").jqueryzoom({
      xzoom:400,
      yzoom:400,
      offset:30,
      position:"right",
      preload:1,
      lens:1
    });
    $("#spec-list").jdMarquee({
      deriction:"left",
      width:350,
      height:56,
      step:2,
      speed:4,
      delay:10,
      control:false,
      _front:"#spec-right",
      _back:"#spec-left"
    });
    $("#spec-list img").bind("mouseover",function(){
      var src=$(this).attr("src");
      $("#spec-n1 img").eq(0).attr({
        src:src.replace("\/n5\/","\/n1\/"),
        jqimg:src.replace("\/n5\/","\/n0\/")
      });
      $(this).css({
        "border":"2px solid #ff6600",
        "padding":"1px"
      });
    }).bind("mouseout",function(){
      $(this).css({
        "border":"1px solid #ccc",
        "padding":"2px"
      });
    });

//d3可视化

// 添加房屋图片
svg=d3.selectAll("#chart").append("svg").attr("width",600).attr("height",400)
  svg.append("image")  
    .attr("x",0)  
    .attr("y",0)  
    .attr("width",600)  
    .attr("height",400)  
    .attr("xlink:href","img/waterflow.svg"); 



  setInterval("light(100,80);light(110,70);light(90,90);light(80,100)",666)

    var LineArr=new Array();
    var flag=-1;

  function addLine(id,color,str,length,text,all){
    var flow=svg.append("path")
      .attr("stroke",color)
      .attr("stroke-width",2)
      .attr("fill","none")
      .attr("d",str)
      .attr("stroke-dasharray","0 "+length)
      transform(id,flow,length,text,all)
      flag=id
      return flow
  }

  function transform(id,obj,end,text,all){
    var sum=0;
    for (var i = id-1; i >= 0; i--) {
      sum+=lines[i][3]*10;
    };
    var time=all?sum:0;
    var lintra=obj.transition()
    .delay(time)
    .duration(end*10)
    .attr("stroke-dasharray",end+" 0")
    .tween("text",function(){
      if(text!=""){$("#text").stop(false,false).text('" '+text+' "')}
      if(id==5){waterOn=setInterval("water(0);water(-10);water(10)",300)}
    })
  }

  var lines=[
    [0,"#5be","M20 380 l 107 0 q 5.5 0 5.5 -5 l 0 -234","349","Cold water comes"],
    [1,"#f5b090","M190 110 l 30 30 l 0 64.5 l -74.5 0 l 0 139 l 53 0 q 5 0 5 -5 l 0 -8","389","With the sunshine, enter the water heater"],
    [2,"#f5b090","M203 324 l 0 -9","10",""],
    [3,"#ea5431","M216 315 l 0 19 q 0 10 10 10 l 48 0 q 10 0 10 -10 l 0 -20 q 0 -11 11 -11","200","Become very hot"],
    [4,"#5be","M526 363 l -5 0 q -10 0 -10 -10 q 0 -10 -10 -10 l -170 0 q -10 0 -10 -10 l 0 -20 q 0 -10 -10 -10 l -3 0","262","Mixed with the cold water again"],
    [5,"#f5b090","M302 298 l 0 -108 q 0 -10 10 -10 l 18 0 q 10 0 10 10","157","Flow to bath"],
  ]

    $("#run").on("click",function(){
      for (var i=0; i <= lines.length - 1; i++) {
        Line=new addLine(lines[i][0],lines[i][1],lines[i][2],lines[i][3],lines[i][4],true)
        LineArr.push(Line)
      };
      flag=-1
    })
    $("#stop").on("click",function(){
      for (var i = LineArr.length - 1; i >= 0; i--) {
        LineArr[i].interrupt().transition()
        LineArr[i].remove()
      };
      flag=-1
    $("#text").text("")
    clearInterval(waterOn)
    })

    $("#step").on("click",function(){
      var i=flag+1
      Line=new addLine(lines[i][0],lines[i][1],lines[i][2],lines[i][3],lines[i][4],false)
      LineArr.push(Line)
    })
    $(function(){$('[data-toggle="tooltip"]').tooltip({placement:"top"});})


});


// AngularJS实现鼠标悬浮显示相应数据
    var example=[
    {
      "name":"DXX-20EYC",
      "type":"5 star rated product",
      "detail":"Overall polyurethane foam",
      "location":"Thermal cutout/Whirl flow Technology",
      "descript":"Midea is committed to becoming a leader in scientific and technological innovation in the home appliances industry. Never forgetting the principle of 'consumer-first technology'. Midea strives to establish a technological advantage through teamwork and innovation."
    },
    {
      "name":"DXX-15F",
      "type":"Sapphire Enamel tank",
      "detail":"Overall polyurethane foam.",
      "location":"Overheat protection.",
      "descript":"Midea new energy-saving AC apply innovative ECO Mode, by optimizing frequency control system, it provides you the same comfort with minimum power consumption in 8 hours running time."
    },
    {
      "name":"DXX-20ET1",
      "type":"Sapphire Enamel tank",
      "detail":"Earthing protection",
      "location":"Cooper heating element",
      "descript":"The combination of solar energy and 3D DC inverter technology ensures Midea solar AC system to be most environmental caring. Midea also make great innovation on the use of solar energy management, making energy efficiency to A++ level."
    },
    {
      "name":"JSG32-16VH",
      "type":"With cable remote control plug (in PCB part)",
      "detail":"Multi-point water supply with constant temperature",
      "location":"Oxygen-free copper heat exchanger.",
      "descript":"After its debut at the 2013 China Refrigeration Exhibition, Midea V5 X SERIES VRF was the subject of a promotional tour across the nation. In early October 2013, V5 X SERIES VRF was produced in batch and launched to the market. It proved a success."
    },
    {
      "name":"SUT40A1 (11P)",
      "type":"Stretch carrying handle, easy to move",
      "detail":"Steam rate control panel with LED lights",
      "location":"Detachable large water tank ",
      "descript":"Since its first air conditioner came out in 1985, Midea has achieved a global industrial layout for its residential air conditioners. Owning 6 domestic and 5 overseas manufacturing bases, Midea has the full range of residential AC products: Split, Window, Portable, Dehumidifier and Light Commercial."
    },
    {
      "name":"SUT30A1（11J)",
      "type":"Ergonomic carrying handle, easy to move",
      "detail":"Transparent water tank, easy for you to observe water level",
      "location":"Power-on and steam ready indicator",
      "descript":"Established in April 2009. Area: 1,050 square meters. 35 China National Standards Bureau Certified Laboratories. 123 rooms with 1004 stations conducting a full range of quality and reliability tests. 342 employees, including 96 senior engineers and 5 foreign experts."
    },
    ]


    var midea=angular.module("Midea",[]);
    midea.controller("Display",function($scope){
      $scope.log= function(eq){
        $scope.name=example[eq].name;
        $scope.type=example[eq].type;
        $scope.detail=example[eq].detail;
        $scope.location=example[eq].location;
        $scope.descript=example[eq].descript;
      }
      $scope.empty= function(){
        $scope.name="The Name";
        $scope.type="The Type";
        $scope.detail="The Detail";
        $scope.location="The Location";
        $scope.descript="Select One To See More !";
      }
    })