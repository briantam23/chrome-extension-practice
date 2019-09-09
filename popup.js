document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('test-button');
    checkPageButton.addEventListener('click', function() {
  
      chrome.tabs.getSelected(null, function(tab) {
        alert("Trying out Chrome Extensions.");
      });
    }, false);
}, false);