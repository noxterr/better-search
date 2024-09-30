document.addEventListener('keydown', (event) => {
    if (event.ctrlKey && event.key === 'f') {
        event.preventDefault();
        console.log('Ctrl + F was pressed');
        // Add your custom logic here
    }
});