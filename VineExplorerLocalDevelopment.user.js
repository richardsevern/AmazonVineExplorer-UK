// ==UserScript==
// @name         Amazon Vine Explorer - Local Development
// @namespace    http://tampermonkey.net/
// @version      9.9.9
// @description  Better View and Search and Explore for Vine Products - Vine Voices Edition
// @author       rs
// @match        *://www.amazon.co.uk/*
// @license      MIT
// @icon         https://raw.githubusercontent.com/richardsevern/AmazonVineExplorer-uk/main/vine_logo.png
// @run-at       document-start
// @grant        GM_registerMenuCommand
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM.getValue
// @grant        GM.setValue
// @grant        GM.xmlHttpRequest
// @grant        GM.openInTab
// @grant        unsafeWindow
// @require      file://D:\AmazonVineExplorer\globals.js
// @require      file://D:\AmazonVineExplorer\class_product.js
// @require      file://D:\AmazonVineExplorer\class_db_handler.js
// @require      file://D:\AmazonVineExplorer\VineExplorer.user.js
// ==/UserScript==


/** 
* First, Tampermonkey needs to be granted the right to access local files:
* Depending on your browser, go to the extension management
* Click on Details for Tampermonkey
* On the page, activate the option "Allow access to file URLs"
* Add this template as your own script in Tampermonkey or install it with the following link:
* 
* https://raw.githubusercontent.com/richardsevern/AmazonVineExplorer-uk/dev-main/VineExplorerLocalDevelopment.user.js
* Adjust the paths of the files in @require to your local paths
* DO NOT FORGET to disable the online version if you are working with this one.
* 
* Always check the @grant settings, as the headers of the main script are not considered, and Tampermonkey only uses the options set here.
* 
* Advantage: Local file changes take effect immediately after a website reload, making development easier and more efficient.
 */
