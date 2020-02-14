//Change Window Title to Case# on window load
window.addEventListener(
  "load",
  function() {
    window.document.title = jQuery(".uir-record-id").text() + " - Netsuite - Case";
  },
  false
);

// refresh case after 5 minutes
var refreshVar = setInterval(refreshPage, 300000);
var timeVar = 5;

//refreshpage!
function refreshPage() {
  //if (confirm("It's been 5 Minutes since you refreshed the page. Someone may have made changes to the case.\n\nPress OK to refresh the page or Cancel to continue working.")) {
  //  location.reload();
  //}
  jQuery(".uir-page-title-secondline")
    .eq(0)
    .css({
      "background-color": "red",
      color: "black"
    });
  jQuery(".uir-record-id")
    .eq(0)
    .css({
      "background-color": "red",
      color: "black"
    });
  jQuery(".uir-record-name")
    .eq(0)
    .css({
      "background-color": "red",
      color: "black"
    });
  jQuery(".uir-page-title-secondline")
    .eq(0)
    .after(
      "It's been " +
        timeVar +
        " Minutes since you refreshed the page. Someone may have made changes to the case. Please refresh before making any changes." +
        "<br>"
    );
  timeVar = timeVar + 5;
}
