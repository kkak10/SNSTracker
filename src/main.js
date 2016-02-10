(function(){
  chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
    if (changeInfo.status == 'loading' && tab.active) {
      if(tab.url.indexOf("facebook.com") > -1){
        chrome.tabs.remove(tab.id);
        //count++;
        alert("페이스북 Fuck!");
      }
    }
  });
})();