// ==UserScript==
// @name         禁止右键点击
// @namespace    102136659@qq.com
// @version      1.0
// @description  none
// @author       jayce

// ==/UserScript==



(function() {
    'use strict';
    window.oncontextmenu = function () {
        console.log("Right Click Disabled");
        return false;
    }
})();

