try{
  chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (tab.url?.startsWith("chrome://")) return undefined;

    if(changeInfo.status == 'complete')
    {
      chrome.scripting.executeScript({
        files: ['contentScript.js'],
        target: {tabId: tab.id}
      });

      chrome.runtime.onMessage.addListener(
        function(request, sender, sendResponse) {
          console.log(sender.tab ?
                      "from a content script:" + sender.tab.url :
                      "from the extension");
          if (request.command == "darken") {
            chrome.scripting.executeScript({
              files: ['appOn.js'],
              target: {tabId: tab.id}
            });
          }

          else if(request.command1 == "lighten") {
            chrome.scripting.executeScript({
              files: ['appOff.js'],
              target: {tabId: tab.id}
            });
          }
        }
      );  
    }

  });



}catch(e){
  console.log(e);
}

