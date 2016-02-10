"use strict";

class FuckFacebookService{
  constructor(){

  }

  bindPageUpdateEvent(){
    chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
      if(this.isPageUpdated(changeInfo, tab) && this.isFacebookPage(tab)){
          chrome.tabs.remove(tab.id);
      }
    });
  }

  isPageUpdated(changeInfo, tab){
    return changeInfo.status == 'loading' && tab.active;
  }

  isFacebookPage(tab){
    return tab.url.indexOf("facebook.com") > -1;
  }
}

module.exports = FuckFacebookService;