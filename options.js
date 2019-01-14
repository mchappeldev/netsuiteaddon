// Saves options to chrome.storage
function save_options() {
  var color1 = document.getElementById("consultCalendar").value;
  var color2 = document.getElementById("internalCalendar").value;
  var color3 = document.getElementById("leaveCalendar").value;
  var color4 = document.getElementById("marketingCalendar").value;
  var color5 = document.getElementById("salesCalendar").value;
  var color6 = document.getElementById("noteCalendar").value;
  var color7 = document.getElementById("supportCalendar").value;
  var color8 = document.getElementById("trainingCalendar").value;
  var color9 = document.getElementById("reminderCalendar").value;
  var color10 = document.getElementById("holidayCalendar").value;
  var option11 = document.getElementById("lightenField").value;
  chrome.storage.sync.set(
    {
      consultColor: color1,
      internalColor: color2,
      leaveColor: color3,
      marketingColor: color4,
      salesColor: color5,
      noteColor: color6,
      supportColor: color7,
      trainingColor: color8,
      reminderColor: color9,
      holidayColor: color10,
      lightenVal: option11
    },
    function() {
      // Update status to let user know options were saved.
      var status = document.getElementById("status");
      status.textContent = "Options saved. Refresh to see changes!";
      setTimeout(function() {
        status.textContent = "";
      }, 2000);
    }
  );
}
// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = ''
  chrome.storage.sync.get(
    {
      consultColor: "",
      internalColor: "",
      leaveColor: "",
      marketingColor: "",
      salesColor: "",
      noteColor: "",
      supportColor: "",
      trainingColor: "",
      reminderColor: "",
      holidayColor: "",
      lightenVal: "50"
    },
    function(items) {
      //restore options state
      document.getElementById("consultCalendar").value = items.consultColor;
      document.getElementById("internalCalendar").value = items.internalColor;
      document.getElementById("leaveCalendar").value = items.leaveColor;
      document.getElementById("marketingCalendar").value = items.marketingColor;
      document.getElementById("salesCalendar").value = items.salesColor;
      document.getElementById("noteCalendar").value = items.noteColor;
      document.getElementById("supportCalendar").value = items.supportColor;
      document.getElementById("trainingCalendar").value = items.trainingColor;
      document.getElementById("reminderCalendar").value = items.reminderColor;
      document.getElementById("holidayCalendar").value = items.holidayColor;
      document.getElementById("lightenField").value = items.lightenVal;
      consultButton.style.backgroundColor = items.consultColor;
      internalButton.style.backgroundColor = items.internalColor;
      leaveButton.style.backgroundColor = items.leaveColor;
      marketingButton.style.backgroundColor = items.marketingColor;
      salesButton.style.backgroundColor = items.salesColor;
      noteButton.style.backgroundColor = items.noteColor;
      supportButton.style.backgroundColor = items.supportColor;
      trainingButton.style.backgroundColor = items.trainingColor;
      reminderButton.style.backgroundColor = items.reminderColor;
      holidayButton.style.backgroundColor = items.holidayColor;
    }
  );
}
document.addEventListener("DOMContentLoaded", restore_options);
document.getElementById("save").addEventListener("click", save_options);
