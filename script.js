(function() {
    const keysInfo = [
        [
            {code: 192, key: '`'},
            {code: 49, key: '1'},
            {code: 50, key: '2'},
            {code: 51, key: '3'},
            {code: 52, key: '4'},
            {code: 53, key: '5'},
            {code: 54, key: '6'},
            {code: 55, key: '7'},
            {code: 56, key: '8'},
            {code: 57, key: '9'},
            {code: 48, key: '0'},
            {code: 189, key: '-'},
            {code: 187, key: '='},
            {code: 8, key: 'Backspace', class: 'kb-key-backspace'},
            {code: 36, key: 'Home'}
        ],
        [
            {code: 9, key: 'Tab', class: 'kb-key-tab'},
            {code: 81, key: 'q'},
            {code: 87, key: 'w'},
            {code: 69, key: 'e'},
            {code: 82, key: 'r'},
            {code: 84, key: 't'},
            {code: 89, key: 'y'},
            {code: 85, key: 'u'},
            {code: 73, key: 'i'},
            {code: 79, key: 'o'},
            {code: 80, key: 'p'},
            {code: 219, key: '['},
            {code: 221, key: ']'},
            {code: 220, key: '\\', class: 'kb-key-pipe'},
            {code: 33, key: 'Pg Up'}
        ],
        [
            {code: 20, key: 'Caps Lock', class: 'kb-key-capslock'},
            {code: 65, key: 'a'},
            {code: 83, key: 's'},
            {code: 68, key: 'd'},
            {code: 70, key: 'f'},
            {code: 71, key: 'g'},
            {code: 72, key: 'h'},
            {code: 74, key: 'j'},
            {code: 75, key: 'k'},
            {code: 76, key: 'l'},
            {code: 186, key: ';'},
            {code: 222, key: '\''},
            {code: 13, key: 'Enter', class: 'kb-key-enter'},
            {code: 34, key: 'Pg Dn'}
        ],
        [
            {code: 16, key: 'Shift', class: 'kb-key-left-shift'},
            {code: 90, key: 'z'},
            {code: 88, key: 'x'},
            {code: 67, key: 'c'},
            {code: 86, key: 'v'},
            {code: 66, key: 'b'},
            {code: 78, key: 'n'},
            {code: 77, key: 'm'},
            {code: 188, key: ','},
            {code: 190, key: '.'},
            {code: 191, key: '/'},
            {code: 16, key: 'Shift', class: 'kb-key-right-shift'},
            {code: 38, key: 'Up'},
            {code: 75, key: 'End'}
        ],
        [
            {code: 17, key: 'Ctrl', class: 'kb-key-left-ctrl'},
            {code: 0, key: 'Fn'},
            {code: 91, key: 'Win', class: 'kb-key-windows'},
            {code: 18, key: 'Alt', class: 'kb-key-left-alt'},
            {code: 32, key: ' ', class: 'kb-key-space'},
            {code: 18, key: 'Alt', class: 'kb-key-right-alt'},
            {code: 17, key: 'Ctrl', class: 'kb-key-right-ctrl'},
            {code: 93, key: 'Menu', class: 'kb-key-menu'},
            {code: 37, key: 'Left'},
            {code: 40, key: 'Down'},
            {code: 39, key: 'Rght'},
        ]
    ];

    generateKeyboard('#keyboard', keysInfo);

    let html = document.querySelector('html');
    let output = document.querySelector('#output');
    html.onkeydown = function(event) {
        output.textContent += event.key;
        // console.log('Key down' + event.key + ' = ' + event.keyCode);
    };
    html.onkeyup = function(event) {
        console.log('Key  up ' + event.key + ' = ' + event.keyCode);
    }

    function generateKeyboard(keyboardSelector, keysInfo) {
        let keyboard = document.querySelector(keyboardSelector);
        keysInfo.forEach(function(line) {
            let lineNode = document.createElement('div');
            lineNode.classList.add('kb-line');
            line.forEach(function(key) {
                let keyNode = document.createElement('div');
                keyNode.classList.add('kb-key');
                if (key.class) {
                    keyNode.classList.add(key.class);
                }
                keyNode.innerText = key.key;
    
                lineNode.appendChild(keyNode);
            });
    
            keyboard.appendChild(lineNode);
        });
    }
})();
