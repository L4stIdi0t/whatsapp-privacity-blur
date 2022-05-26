// ==UserScript==
// @name         WhatsApp privacity blur filter
// @namespace    http://tampermonkey.net/
// @version      0.2
// @author       Facu | L4stIdi0t(updated)
// @match        https://web.whatsapp.com/
// @description Put a blur effect on your chats and avoid peeping toms
// @icon         https://www.google.com/s2/favicons?domain=whatsapp.com
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://gist.githubusercontent.com/L4stIdi0t/b5c7dad05f04606e097acdbd60739ca1/raw/9c97aa67ff9c5d56be34a55ad6c18a314e5eb548/waitForKeyElements.js
// @grant        GM_addStyle
// @run-at       document-idle
// ==/UserScript==

//Change the 5px to the blur you want, higher number more blur
waitForKeyElements ("._2nY6U > div", function(e) {

    var elemento = $(e[0].parentNode);

    elemento.css("filter", "blur(5px)");

});
//Change the 0px to how much blur when you hover over it
GM_addStyle (`
   ._2nY6U {
      transition: .2s ease!important;
   }
   ._2nY6U:hover {
      filter: blur(0px)!important;
   } 
`)
