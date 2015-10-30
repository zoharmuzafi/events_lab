console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );
 //Challenge: Some simple addition! Can you get the total to update whenever you update the numbers?
  $(".add").on("change", function(event){
  	var a = parseInt($("#left").val());
  	var b = parseInt($("#right").val());
  	var sum = a + b;
  	$("#total").val(sum);
  });

//Add a "reset" button that clears all the inputs.
  $("#button").on("click", function(event){
  	var a = $("#left").val("");
  	var b = $("#right").val("");
  	$("#total").val("");
});
});
