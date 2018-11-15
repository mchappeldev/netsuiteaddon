//Fetch highlight color settings and store to variables
chrome.storage.sync.get("consultColor", function (obj) {
    consultColor = obj.consultColor;
});
chrome.storage.sync.get("internalColor", function (obj) {
    internalColor = obj.internalColor;
});
chrome.storage.sync.get("leaveColor", function (obj) {
    leaveColor = obj.leaveColor;
});
chrome.storage.sync.get("marketingColor", function (obj) {
    marketingColor = obj.marketingColor;
});
chrome.storage.sync.get("salesColor", function (obj) {
    salesColor = obj.salesColor;
});
chrome.storage.sync.get("noteColor", function (obj) {
    noteColor = obj.noteColor;
});
chrome.storage.sync.get("supportColor", function (obj) {
    supportColor = obj.supportColor;
});
chrome.storage.sync.get("trainingColor", function (obj) {
    trainingColor = obj.trainingColor;
});
chrome.storage.sync.get("reminderColor", function (obj) {
    reminderColor = obj.reminderColor;
});
chrome.storage.sync.get("holidayColor", function (obj) {
    holidayColor = obj.holidayColor;
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
            if (links[i].text.includes("CONSULT")) {
                jQuery(".ns-today").eq(i).css({
                    //"text-align": "justify",
                    //"text-justify": "inter-word",
                    "background-color": consultColor
//                    "color": "white"
                });
                jQuery(".ns-event-view").eq(i).css({
                    //"text-align": "justify",
                    //"text-justify": "inter-word",
                    "background-color": consultColor
                    //"color": "white"
                });
                jQuery(".ns-event-link").eq(i).css({
                    //"text-align": "justify",
                    //"text-justify": "inter-word",
                    //"background-color": "Blue",
                    "color": "Black"
                });
            } else if (links[i].text.includes("INTERNAL")) {
              jQuery(".ns-today").eq(i).css({
                  //"text-align": "justify",
                  //"text-justify": "inter-word",
                  "background-color": internalColor
                  //"filter": "opacity(1.0)",
//                    "color": "white"
              });
              jQuery(".ns-event-view").eq(i).css({
                  //"text-align": "justify",
                  //"text-justify": "inter-word",
                  "background-color": internalColor
                  //"filter": "opacity(1.0)",
                  //"color": "white"
              });
              jQuery(".ns-event-content").eq(i).css({
                  //"text-align": "justify",
                  //"text-justify": "inter-word",
                  //"background-color": internalColor,
                  //"filter": "brightness(200%)",

              });
              jQuery(".ns-event-link").eq(i).css({
                  //"text-align": "justify",
                  //"text-justify": "inter-word",
                  //"background-color": internalColor,
                  //"filter": "opacity(1.0)",
                  "color": "Black"
              });
            }   else if (links[i].text.includes("LEAVE")) {
              jQuery(".ns-today").eq(i).css({
                  //"text-align": "justify",
                  //"text-justify": "inter-word",
                  "background-color": leaveColor
//                    "color": "white"
              });
              jQuery(".ns-event-view").eq(i).css({
                  //"text-align": "justify",
                  //"text-justify": "inter-word",
                  "background-color": leaveColor
                  //"color": "white"
              });
              jQuery(".ns-event-link").eq(i).css({
                  //"text-align": "justify",
                  //"text-justify": "inter-word",
                  //"background-color": "Blue",
                  "color": "Black"
              });
            }
            else if (links[i].text.includes("MARKETING")) {
              jQuery(".ns-today").eq(i).css({
                  //"text-align": "justify",
                  //"text-justify": "inter-word",
                  "background-color": marketingColor
            //                    "color": "white"
              });
              jQuery(".ns-event-view").eq(i).css({
                  //"text-align": "justify",
                  //"text-justify": "inter-word",
                  "background-color": marketingColor
                  //"color": "white"
              });
              jQuery(".ns-event-link").eq(i).css({
                  //"text-align": "justify",
                  //"text-justify": "inter-word",
                  //"background-color": "Blue",
                  "color": "Black"
              });
            }
            else if (links[i].text.includes("SALES")) {
              jQuery(".ns-today").eq(i).css({
                  //"text-align": "justify",
                  //"text-justify": "inter-word",
                  "background-color": salesColor
            //                    "color": "white"
              });
              jQuery(".ns-event-view").eq(i).css({
                  //"text-align": "justify",
                  //"text-justify": "inter-word",
                  "background-color": salesColor
                  //"color": "white"
              });
              jQuery(".ns-event-link").eq(i).css({
                  //"text-align": "justify",
                  //"text-justify": "inter-word",
                  //"background-color": "Blue",
                  "color": "Black"
              });
            }
            else if (links[i].text.includes("NOTE")) {
              jQuery(".ns-today").eq(i).css({
                  //"text-align": "justify",
                  //"text-justify": "inter-word",
                  "background-color": noteColor
//                    "color": "white"
              });
              jQuery(".ns-event-view").eq(i).css({
                  //"text-align": "justify",
                  //"text-justify": "inter-word",
                  "background-color": noteColor
                  //"color": "white"
              });
              jQuery(".ns-event-link").eq(i).css({
                  //"text-align": "justify",
                  //"text-justify": "inter-word",
                  //"background-color": "Blue",
                  "color": "Black"
              });
            }
            else if (links[i].text.includes("SUPPORT")) {
              jQuery(".ns-today").eq(i).css({
                  //"text-align": "justify",
                  //"text-justify": "inter-word",
                  "background-color": supportColor
//                    "color": "white"
              });
              jQuery(".ns-event-view").eq(i).css({
                  //"text-align": "justify",
                  //"text-justify": "inter-word",
                  "background-color": supportColor
                  //"color": "white"
              });
              jQuery(".ns-event-link").eq(i).css({
                  //"text-align": "justify",
                  //"text-justify": "inter-word",
                  //"background-color": "Blue",
                  "color": "Black"
              });
            }
            else if (links[i].text.includes("TRAINING")) {
              jQuery(".ns-today").eq(i).css({
                  //"text-align": "justify",
                  //"text-justify": "inter-word",
                  "background-color": trainingColor
//                    "color": "white"
              });
              jQuery(".ns-event-view").eq(i).css({
                  //"text-align": "justify",
                  //"text-justify": "inter-word",
                  "background-color": trainingColor
                  //"color": "white"
              });
              jQuery(".ns-event-link").eq(i).css({
                  //"text-align": "justify",
                  //"text-justify": "inter-word",
                  //"background-color": "Blue",
                  "color": "Black"
              });
            }
            else if (links[i].text.includes("REMINDER")) {
              jQuery(".ns-today").eq(i).css({
                  //"text-align": "justify",
                  //"text-justify": "inter-word",
                  "background-color": reminderColor
//                    "color": "white"
              });
              jQuery(".ns-event-view").eq(i).css({
                  //"text-align": "justify",
                  //"text-justify": "inter-word",
                  "background-color": reminderColor
                  //"color": "white"
              });
              jQuery(".ns-event-link").eq(i).css({
                  //"text-align": "justify",
                  //"text-justify": "inter-word",
                  //"background-color": "Blue",
                  "color": "Black"
              });
            }
            else if (links[i].text.includes("HOLIDAY")) {
              jQuery(".ns-today").eq(i).css({
                  //"text-align": "justify",
                  //"text-justify": "inter-word",
                  "background-color": holidayColor
//                    "color": "white"
              });
              jQuery(".ns-event-view").eq(i).css({
                  //"text-align": "justify",
                  //"text-justify": "inter-word",
                  "background-color": holidayColor
                  //"color": "white"
              });
              jQuery(".ns-event-link").eq(i).css({
                  //"text-align": "justify",
                  //"text-justify": "inter-word",
                  //"background-color": "Blue",
                  "color": "Black"
              });
            }
            else if (links[i].text.includes("NOT")) {
                  jQuery(".ns-event-content").eq(i).removeAttr('style');
                  jQuery(".ns-event-link").eq(i).removeAttr('style');
                  //alert(links[i].text);
            }
        }
    }
}
