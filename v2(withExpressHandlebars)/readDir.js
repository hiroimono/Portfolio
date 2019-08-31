const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

module.exports = function readDirectory(dir) {
    let pathDir = path.normalize(__dirname + `${dir}`);
    let files = fs.readdirSync(pathDir);
    let arr = [];

    for (let i = 0; i < files.length; i++) {

        arr[i] = {
            name: files[i],
            dir: path.normalize(__dirname + `${dir}/${files[i]}`),
			imageUrl : path.normalize(__dirname + `${dir}\\${files[i]}\\image.gif`),
			description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        };

    }

    console.log('Projects Infos in Projects Folder => Stringified ARR: ', JSON.stringify(arr));
    return JSON.stringify(arr);
};
