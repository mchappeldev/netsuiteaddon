//launch subjectFill function on window load
window.addEventListener("load", function() { 
  subjectFill();
}, false);

function subjectFill() {
  alert("WHAT");
  jQuery("#subject").val("Case #${case.caseNumber}: ${case.title}");
}
