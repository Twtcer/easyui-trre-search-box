// ==UserScript==
// @name        easyui树形菜单搜索
// @name:en     easyui tree menu search box
// @namespace   https://github.com/maidouofgithub
// @version      0.1
// @description     easyui树形菜单搜索
// @description:en  easyui quickly search tree menu search box
// @author       landwind
// @match        *
// @grant        none
// @icon        https://www.liuli.in/favicon.ico
// @license     MIT License
// @compatible        chrome
// ==/UserScript==

(function() {
    'use strict';
    //init css
    var css = '';

    if($('.easyui-tree').length<=0){Console.log('not find easyui tree menu!skip');}
    $('.easyui-tree').eq(0).append('<input name="easyui-search-box" title="type key">');
})();