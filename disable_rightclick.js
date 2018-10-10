// ==UserScript==
// @name         禁止右键点击
// @namespace    102136659@qq.com
// @version      1.0
// @description  适用于noVNC界面
// @author       jayce
// @include      http://localhost:6901/*
// @include      http://127.0.0.1:6901/*
// ==/UserScript==



(function() {
    'use strict';
    window.oncontextmenu = function () {
        console.log("Right Click Disabled");
        return false;
    }
})();

