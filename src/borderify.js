"use strict";

// listen to responses from background script
browser.runtime.onMessage.addListener(function(message, sender) {
  if (message.optIn) {
    document.body.style.border = "5px solid red";
  }
});

// ask for opt-in confirmation
browser.runtime.sendMessage({});
