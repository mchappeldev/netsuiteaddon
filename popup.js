var color_picker = document.getElementById("consultCalendar");
var color_picker_wrapper = document.getElementById("consultButton");
consultCalendar.onchange = function() {
  consultButton.style.backgroundColor = consultCalendar.value;
};
internalCalendar.onchange = function() {
  internalButton.style.backgroundColor = internalCalendar.value;
};
leaveCalendar.onchange = function() {
  leaveButton.style.backgroundColor = leaveCalendar.value;
};
marketingCalendar.onchange = function() {
  marketingButton.style.backgroundColor = marketingCalendar.value;
};
salesCalendar.onchange = function() {
  salesButton.style.backgroundColor = salesCalendar.value;
};
noteCalendar.onchange = function() {
  noteButton.style.backgroundColor = noteCalendar.value;
};
supportCalendar.onchange = function() {
  supportButton.style.backgroundColor = supportCalendar.value;
};
trainingCalendar.onchange = function() {
  trainingButton.style.backgroundColor = trainingCalendar.value;
};
reminderCalendar.onchange = function() {
  reminderButton.style.backgroundColor = reminderCalendar.value;
};
holidayCalendar.onchange = function() {
  holidayButton.style.backgroundColor = holidayCalendar.value;
};
