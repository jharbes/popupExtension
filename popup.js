document.addEventListener("DOMContentLoaded", function() {
    var siteList = document.getElementById("site-list");
    siteList.addEventListener("click", function(event) {
      var siteURL = event.target.href;
      chrome.tabs.update({ url: siteURL });
      window.close();
    });
  });
  