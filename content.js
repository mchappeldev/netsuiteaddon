//set refresh frequency
var refreshVar = setInterval(refresh, 300000);

//refresh on window load
window.addEventListener("load", function(){refresh();}, false);

function refresh() {
	//create an array of all refresh buttons
	var buttons = jQuery( ".ns-portlet-icon-refresh" ).toArray();
	
	//loop through and click each refresh button based on the array
	var i;
	for (i = 0; i < buttons.length; i++) {
	jQuery(".ns-portlet-icon-refresh")[i].click();
	}
	return false;
}
