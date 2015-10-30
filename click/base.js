console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	//create a list of all the clicked phrases + listing the timestamp?
$("#imperatives span").click(function clicked(event){
	var item = $(this).text() + " time is:  " + Date.now();
	$("ul").append("<li>" + item + "</li>");
});

});