var FuckFacebookUtil = require("./util/FuckFacebook.util.es6"),
    FuckFacebookService = require("./service/FuckFacebook.service.es6"),
    FuckFacebookController = require("./controller/FuckFacebook.controller.es6");

new FuckFacebookController(new FuckFacebookService(), new FuckFacebookController()).init();