chrome.commands.onCommand.addListener((command) => {
    if (command === "show_extension") {
        chrome.action.openPopup();  // Opens the popup
    }
});