//var color1 = "blue";
//var blueVar = chrome.storage.sync.get({favoriteColor: 'red', likesColor: true});
chrome.storage.sync.get("favoriteColor", function (obj) {
    color1 = obj.favoriteColor;
});


//set highlight frequency
var highlightVar = setInterval(highlight, 1000);

function highlight() {
    //create an array of all calendar links
    var links = jQuery(".ns-event-link").toArray();
    //check to see if the calendar has loaded
    if (links.length > 2) {
        //loop through array and assign colors based on the link text
        var i;
        for (i = 0; i < links.length; i++) {
            if (links[i].text.includes("SUPPORT")) {
                jQuery(".ns-event-content").eq(i).css({
                    //"text-align": "justify",
                    //"text-justify": "inter-word",
                    "background-color": color1,
                    //"color": "white"
                });
                jQuery(".ns-event-view").eq(i).css({
                    //"text-align": "justify",
                    //"text-justify": "inter-word",
                    "background-color": color1,
                    //"color": "white"
                });
                jQuery(".ns-event-link").eq(i).css({
                    //"text-align": "justify",
                    //"text-justify": "inter-word",
                    //"background-color": "Blue",
                    "color": "white"
                });
            } else if (links[i].text.includes("INTERNAL")) {
              jQuery(".ns-event-content").eq(i).css({
                  //"text-align": "justify",
                  //"text-justify": "inter-word",
                  "background-color": "Red",
                  //"color": "white"
              });
                jQuery(".ns-event-link").eq(i).css({
                    "color": "Black"
                });
            } else if (links[i].text.includes("NOT")) {
                  jQuery(".ns-event-content").eq(i).removeAttr('style');
                  jQuery(".ns-event-link").eq(i).removeAttr('style');
                  //alert(links[i].text);
            }
        }
    }
}
