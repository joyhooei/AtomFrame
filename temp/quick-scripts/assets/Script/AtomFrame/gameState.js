(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/AtomFrame/gameState.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'fc606XvEctJPIT0gcPxcUYb', 'gameState', __filename);
// Script/AtomFrame/gameState.js

"use strict";

var GameState = {
    default: 0,
    logo: 1,
    login: 2,
    hall: 3,
    room: 4
};

cc.Class({
    extends: cc.Component,

    properties: {
        TAG: "gameState"
    },

    ctor: function ctor() {
        console.log("-new:" + this.TAG);
        this.gameState = GameState.default;
    },

    onLoad: function onLoad() {
        console.log("-load:" + this.TAG);
    },

    onDestroy: function onDestroy() {
        console.log("-destory:" + this.TAG);
    },

    //
    setGameInLogo: function setGameInLogo() {
        this.gameState = GameState.logo;
    },

    isGameInLogo: function isGameInLogo() {
        return this.gameState == GameState.logo;
    },

    setGameInLogin: function setGameInLogin() {
        this.gameState = GameState.login;
    },

    isGameInLogin: function isGameInLogin() {
        return this.gameState == GameState.login;
    },

    setGameInHall: function setGameInHall() {
        this.gameState = GameState.hall;
    },

    isGameInHall: function isGameInHall() {
        return this.gameState == GameState.hall;
    },

    setGameInRoom: function setGameInRoom() {
        this.gameState = GameState.room;
    },

    isGameInRoom: function isGameInRoom() {
        return this.gameState == GameState.room;
    }

});

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=gameState.js.map
        