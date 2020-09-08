//Fetch highlight color settings and store to variables
chrome.storage.sync.get("consultColor", function(obj) {
  consultColor = obj.consultColor;
});
chrome.storage.sync.get("internalColor", function(obj) {
  internalColor = obj.internalColor;
});
chrome.storage.sync.get("leaveColor", function(obj) {
  leaveColor = obj.leaveColor;
});
chrome.storage.sync.get("marketingColor", function(obj) {
  marketingColor = obj.marketingColor;
});
chrome.storage.sync.get("salesColor", function(obj) {
  salesColor = obj.salesColor;
});
chrome.storage.sync.get("noteColor", function(obj) {
  noteColor = obj.noteColor;
});
chrome.storage.sync.get("supportColor", function(obj) {
  supportColor = obj.supportColor;
});
chrome.storage.sync.get("trainingColor", function(obj) {
  trainingColor = obj.trainingColor;
});
chrome.storage.sync.get("reminderColor", function(obj) {
  reminderColor = obj.reminderColor;
});
chrome.storage.sync.get("holidayColor", function(obj) {
  holidayColor = obj.holidayColor;
});
chrome.storage.sync.get("lightenVal", function(obj) {
  lightenVal = obj.lightenVal;
});

//set highlight frequency
var highlightVar = setInterval(highlight, 1000);

function LightenDarkenColor(col, amt) {
  var usePound = false;

  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }

  var num = parseInt(col, 16);

  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  var b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  var g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}

function highlight() {
  //var lightenVal = lightenVar;
  var lightenVar = parseInt(lightenVal);
  var consultLightColor = LightenDarkenColor(consultColor, lightenVar);
  var internalLightColor = LightenDarkenColor(internalColor, lightenVar);
  var leaveLightColor = LightenDarkenColor(leaveColor, lightenVar);
  var marketingLightColor = LightenDarkenColor(marketingColor, lightenVar);
  var salesLightColor = LightenDarkenColor(salesColor, lightenVar);
  var noteLightColor = LightenDarkenColor(noteColor, lightenVar);
  var supportLightColor = LightenDarkenColor(supportColor, lightenVar);
  var trainingLightColor = LightenDarkenColor(trainingColor, lightenVar);
  var reminderLightColor = LightenDarkenColor(reminderColor, lightenVar);
  var holidayLightColor = LightenDarkenColor(holidayColor, lightenVar);
  //alert(consultLightColor + lightenVal + lightenVar);
  //create an array of all calendar links
  var links = jQuery(".ns-event-link").toArray();
  //check to see if the calendar has loaded
  if (links.length > 2) {
    //loop through array and assign colors based on the link text
    var i;
    for (i = 0; i < links.length; i++) {
      if (links[i].text.includes("CONSULT")) {
        jQuery(".ns-today")
          .eq(i)
          .css({
            "background-color": consultColor
          });
        jQuery(".ns-event-view")
          .eq(i)
          .css({
            "background-color": consultColor
          });
        jQuery(".ns-event-content")
          .eq(i)
          .css({
            "background-color": consultLightColor
          });
        jQuery(".ns-event-link")
          .eq(i)
          .css({
            color: "Black"
          });
      } else if (links[i].text.includes("INTERNAL")) {
        jQuery(".ns-today")
          .eq(i)
          .css({
            "background-color": internalColor
          });
        jQuery(".ns-event-view")
          .eq(i)
          .css({
            "background-color": internalColor
          });
        jQuery(".ns-event-content")
          .eq(i)
          .css({
            "background-color": internalLightColor
          });
        jQuery(".ns-event-link")
          .eq(i)
          .css({
            color: "Black"
          });
      } else if (links[i].text.includes("LEAVE")) {
        jQuery(".ns-event-content")
          .eq(i)
          .css({
            "background-color": leaveLightColor
          });
        jQuery(".ns-today")
          .eq(i)
          .css({
            "background-color": leaveColor
          });
        jQuery(".ns-event-view")
          .eq(i)
          .css({
            "background-color": leaveColor
          });
        jQuery(".ns-event-link")
          .eq(i)
          .css({
            color: "Black"
          });
      } else if (links[i].text.includes("MARKETING")) {
        jQuery(".ns-event-content")
          .eq(i)
          .css({
            "background-color": marketingLightColor
          });
        jQuery(".ns-today")
          .eq(i)
          .css({
            "background-color": marketingColor
          });
        jQuery(".ns-event-view")
          .eq(i)
          .css({
            "background-color": marketingColor
          });
        jQuery(".ns-event-link")
          .eq(i)
          .css({
            color: "Black"
          });
      } else if (links[i].text.includes("SALES")) {
        jQuery(".ns-event-content")
          .eq(i)
          .css({
            "background-color": salesLightColor
          });
        jQuery(".ns-today")
          .eq(i)
          .css({
            "background-color": salesColor
          });
        jQuery(".ns-event-view")
          .eq(i)
          .css({
            "background-color": salesColor
          });
        jQuery(".ns-event-link")
          .eq(i)
          .css({
            color: "Black"
          });
      } else if (links[i].text.includes("NOTE")) {
        jQuery(".ns-event-content")
          .eq(i)
          .css({
            "background-color": noteLightColor
          });
        jQuery(".ns-today")
          .eq(i)
          .css({
            "background-color": noteColor
          });
        jQuery(".ns-event-view")
          .eq(i)
          .css({
            "background-color": noteColor
          });
        jQuery(".ns-event-link")
          .eq(i)
          .css({
            color: "Black"
          });
      } else if (links[i].text.includes("CADD Care")) {
        jQuery(".ns-today")
          .eq(i)
          .css({
            "background-color": supportColor
          });
        jQuery(".ns-event-view")
          .eq(i)
          .css({
            "background-color": supportColor
          });
        jQuery(".ns-event-content")
          .eq(i)
          .css({
            "background-color": supportLightColor
          });
        jQuery(".ns-event-link")
          .eq(i)
          .css({
            color: "Black"
          });
      } else if (links[i].text.includes("TRAINING")) {
        jQuery(".ns-event-content")
          .eq(i)
          .css({
            "background-color": trainingLightColor
          });
        jQuery(".ns-today")
          .eq(i)
          .css({
            "background-color": trainingColor
          });
        jQuery(".ns-event-view")
          .eq(i)
          .css({
            "background-color": trainingColor
          });
        jQuery(".ns-event-link")
          .eq(i)
          .css({
            color: "Black"
          });
      } else if (links[i].text.includes("REMINDER")) {
        jQuery(".ns-event-content")
          .eq(i)
          .css({
            "background-color": reminderLightColor
          });
        jQuery(".ns-today")
          .eq(i)
          .css({
            "background-color": reminderColor
          });
        jQuery(".ns-event-view")
          .eq(i)
          .css({
            "background-color": reminderColor
          });
        jQuery(".ns-event-link")
          .eq(i)
          .css({
            color: "Black"
          });
      } else if (links[i].text.includes("HOLIDAY")) {
        jQuery(".ns-event-content")
          .eq(i)
          .css({
            "background-color": holidayLightColor
          });
        jQuery(".ns-today")
          .eq(i)
          .css({
            "background-color": holidayColor
          });
        jQuery(".ns-event-view")
          .eq(i)
          .css({
            "background-color": holidayColor
          });
        jQuery(".ns-event-link")
          .eq(i)
          .css({
            color: "Black"
          });
      } else if (links[i].text.includes("NOT")) {
        jQuery(".ns-event-content")
          .eq(i)
          .removeAttr("style");
        jQuery(".ns-event-link")
          .eq(i)
          .removeAttr("style");
        //alert(links[i].text);
      }
    }
  }
}
