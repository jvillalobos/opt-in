"use strict";

window.addEventListener("load", function() {
  // set up the appearance of the popup depending on the outcome of the opt-in
  browser.storage.local.get("optIn", function(result) {
    console.log("Setting up UI. result.optIn:" + result.optIn);
    document.getElementById("opt-in-prompt").hidden = result.optIn;
    document.getElementById("after-opt-in").hidden = !result.optIn;
  });

  document.getElementById("button-enable").addEventListener(
    "click",
    function() {
      browser.storage.local.set({ "optIn" : true });
      window.close();
  });

  document.getElementById("button-cancel").addEventListener(
    "click",
    function() {
      window.close();
  });
});
