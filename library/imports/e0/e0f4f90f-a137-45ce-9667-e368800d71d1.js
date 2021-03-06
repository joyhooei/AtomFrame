"use strict";
cc._RF.push(module, 'e0f4fkPoTdFzpZn42iADXHR', 'gameConfMgr');
// Script/AtomFrame/gameConfMgr.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        TAG: "gameConfMgr"
    },

    ctor: function ctor() {
        console.log("-new:" + this.TAG);

        //游戏基础配置
        this.infoBuff = {};
        this.infoBuff["version"] = "0.0.0";
        this.infoBuff["musicVolume"] = 0.2;
        this.infoBuff["effectVolume"] = 0.2;
    },

    //初始化存储的数据
    init: function init() {},

    onLoad: function onLoad() {
        console.log("-load:" + this.TAG);
    },

    onDestroy: function onDestroy() {
        console.log("-destory:" + this.TAG);
    },

    setInfo: function setInfo(_key, _value) {
        this.infoBuff[_key] = _value;
    },

    getInfo: function getInfo(_key) {
        return this.infoBuff[_key];
    },

    //对数据进行存储
    storageLocalData: function storageLocalData(key, data) {
        if (key == null || data == null) {
            console.log(" ------ 存储的key/数据不能空");
            return;
        }
        if (data instanceof Object) {
            cc.sys.localStorage.setItem(key, JSON.stringify(data)); // object 对象转json存储
        } else {
            cc.sys.localStorage.setItem(key, data);
        }
    },

    getLocalData: function getLocalData(key) {
        var data = cc.sys.localStorage.getItem(key);
        var objdata = JSON.parse(data);
        return objdata ? objdata : data;
    },

    removeLocalData: function removeLocalData(key) {
        cc.sys.localStorage.removeItem(key);
    }

});

// infoBuff: [],
// this.infoBuff.push({ key: "version"     , value: "1.0.0" });
// this.infoBuff.push({ key: "musicVaule"  , value: 0.5 });
// this.infoBuff.push({ key: "effectVaulr" , value: 0.5 });
// this.infoBuff.push({ key: "code"        , value: "ASUCUWHUWUWU" });
// this.infoBuff.push({ key: "md5key"      , value: "1245SSSSW" });
// setInfo:function(_key , _value) {
//     this.infoBuff.forEach(function(element) {
//         if (element.key == _key){
//             element.vaule = _value;
//             return ;   
//         }
//     }, this);

//     console.log("add conf : key:" + _key  +"  value: " + _value )
//     var item = { key: _key, value: _value};
//     this.infoBuff.push(item);
// },

// getInfo:function(_key){
//     var result = null;
//     this.infoBuff.forEach(function(element) {
//         if (element.key == _key) {//element.key.localeCompare(_key) == 0
//             result =  element.value;
//             return;    
//         }
//     }, this);
//     console.log(" element velue  " + result);
//     return result;
// },

cc._RF.pop();