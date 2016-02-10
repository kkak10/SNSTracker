"use strict";
class FuckFacebookController{
  constructor(service, util){
    this.service = service;
    this.util = util;
  }

  init(){
    this.watchPage();
  }

  watchPage(){
    this.service.bindPageUpdateEvent();
  }
}

module.exports = FuckFacebookController;