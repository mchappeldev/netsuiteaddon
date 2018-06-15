//set refresh frequency
var refreshVar = setInterval(refresh, 300000);
//set highlight frequency
var highlightVar = setInterval(highlight, 1000);
//refresh on window load
window.addEventListener("load", function() {
    refresh();
}, false);

function refresh() {
    //create an array of all refresh buttons
    var buttons = jQuery(".ns-portlet-icon-refresh").toArray();

    //loop through and click each refresh button based on the array
    var i;
    for (i = 0; i < buttons.length; i++) {
        jQuery(".ns-portlet-icon-refresh")[i].click();
    }
    return false;
}

function highlight() {
    //create an array of all calendar links
    var links = jQuery(".ns-event-link").toArray();
    //check to see if the calendar has loaded
    if (links.length > 2) {
        //loop through array and assign colors based on the link text
        var i;
        for (i = 0; i < links.length; i++) {
            if (links[i].text.includes("SUPPORT")) {
                jQuery(".ns-event-link").eq(i).css({
                    "text-align": "justify",
                    "background-color": "Blue",
                    "color": "white"
                });
            } else if (links[i].text.includes("INTERNAL")) {
                jQuery(".ns-event-link").eq(i).css({
                    "background-color": "Red",
                    "color": "White"
                });
            }
        }
    }
}
