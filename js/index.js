var listColours = ['88B04B', 'F7CAC9', '8CA4CF','955251','B565A7','169C78','F05442', 'DA4F70', '41B6AB' , '578CA9' , 'F3CF55' , '034F84' , 'F4512C' , '95DEE3' , 'F4512C' , '88B04B' , 'CE3175' , '60774F' , 'CFB095'];


$( function(){
  $('.randColour').click( function(){
    
    var rand = listColours[Math.floor(Math.random() * listColours.length)];
  var randomColour = "#"+rand
  
    $('.colourBox').css("background-color", randomColour);
    $('.colourCode h3').text(randomColour);
    $('.me h3 a').css("color", randomColour);
   });
});