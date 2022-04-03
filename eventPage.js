var contextMenuItem ={
    "id": "copy",
    "title": "CopyToClipboard",
    "contexts": ["selection"]
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
    var newText = "";
    newText = clickData.selectionText;
    chrome.storage.sync.set({'text': newText}, function(){
        console.log('Text is set to ' + newText);
    });
    /*if(clickData.menuItemId == "copy" && clickData.selectionText){
        chrome.storage.sync.get(['text'], function(clipboard){
            var newText = "";
            /*if(clipboard.text){
                newText = clipboard.text;
                console.log('Clipboard text is ' + newText);
            }//
            newText = clickData.selectionText;
            chrome.storage.sync.set({'newText': text}, function(){
                console.log('Clipboard text is ' + text);
            });
        });
    }*/
});