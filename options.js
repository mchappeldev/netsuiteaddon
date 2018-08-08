// Saves options to chrome.storage
function save_options() {
  var color1 = document.getElementById('color1').value;
  var color2 = document.getElementById('color2').value;
  var color3 = document.getElementById('color3').value;
  chrome.storage.sync.set({
    favoriteColor1: color1,
    favoriteColor2: color2,
    favoriteColor3: color3
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved. Refresh to see changes!';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    favoriteColor1: '',
    favoriteColor2: '',
    favoriteColor3: ''
  }, function(items) {
    document.getElementById('color1').value = items.favoriteColor1;
    document.getElementById('color2').value = items.favoriteColor2;
    document.getElementById('color3').value = items.favoriteColor3;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
