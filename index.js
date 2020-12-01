let path = require('path');
let fs = require('fs');

function files_list(p){
    
}

function start(){
    let start_folder = path.resolve(__dirname, 'folder');
    files_list(start_folder);
}

start();