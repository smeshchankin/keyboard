(function() {
    let html = document.querySelector('html');
    let output = document.querySelector('#output');
    html.onkeydown = function(event) {
        output.textContent += String.fromCharCode(event.keyCode);
        console.log('Key down = ' + event.keyCode + ' / ' + event.which);
    };
    html.onkeyup = function(event) {
        console.log('Key  up  = ' + event.keyCode + ' / ' + event.which);
    }
})();
