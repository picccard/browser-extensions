console.log('adiSEXtention background-script started')

chrome.browserAction.onClicked.addListener(
    (tab) => {
        console.log('Clicked icon')
        msg = {"txt": "Icon clicked and msg sent"}
        chrome.tabs.sendMessage(tab.id, msg)
    }
)
