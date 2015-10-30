console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

  // the following function stop the "submit" buttons

$("form").click(function stop_submit(event){
	event.preventDefault();
});
});

