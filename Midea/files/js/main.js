$(document).ready(function() {
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
});


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