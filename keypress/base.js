
//Challenge: Stop watch. When the user hits spacebar, record their "start" time. When they hit it again, record their "end" time. 
//Then, calculate the total time, and put it on the page.

$(document).ready(function(){
	var clicks = 0;
	var start = 0;
	var end = 0;
		$("body").keypress(function(e) {
			if (e.keyCode === 0 || e.keyCode === 32) {
				if (clicks % 2 ===0){
					start = Date.now();

				}
				else{
					 end = Date.now();
					 $("#total-time").text(end-start); 
				}
				clicks+=1;
			}
		});
});



