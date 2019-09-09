document.addEventListener('DOMContentLoaded', () => {
    const checkPageButton = document.getElementById('test-button');

    checkPageButton.addEventListener('click', () => {
        chrome.tabs.getSelected(null, (tab) => alert("Trying out Chrome Extensions."));
    
    }, false)
}, false)