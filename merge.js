//launch checkMarks function on window load
window.addEventListener("load", function() {
    checkMarks();
}, false);

//uncheck "Cases samecustomeronly_fs_inp and opencasesonly_fs_inp"
function checkMarks() {
    jQuery("#samecustomeronly_fs_inp").click();
    jQuery("#opencasesonly_fs_inp").click();
    setTimeout(inputFieldChange, 225);
    return false;
}

function inputFieldChange() {
  jQuery("#tocase_display").val("");
}
