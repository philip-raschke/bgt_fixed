chrome.browserAction.onClicked.addListener(function(activeTab){
  chrome.tabs.create({ url: 'https://mail.google.com/tasks/canvas' });
});