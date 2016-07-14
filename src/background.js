"use strict";

browser.runtime.onMessage.addListener(function(message, sender) {
  // check storage for opt in
  browser.storage.local.get("optIn", function(result) {
    // send message back to content script with value of opt in
    browser.tabs.sendMessage(
      sender.tab.id, { "optIn" : (true == result.optIn)});
  });
});

// show the tab if we haven't registered the user reacting to the prompt.
browser.storage.local.get("optInShown", function(result) {
  if (!result.optInShown) {
    browser.tabs.create({ url: "popup/opt-in.html" });
  }
});
