import {input} from './tools.js';
import fsPromise from 'fs/promises';
import path from 'path';

async function createFolders(file) {
    if (!fsPromise.access(file)) {
        console.log('Le fichier est inaccessible');
        return;
    }

    let content = await fsPromise.readFile(file, {encoding: 'utf8'});

    content.split('\n').map((folder) => {
        fsPromise.mkdir(folder.trim());
    });
    
}

async function init() {
    let file = await input("Nom du fichier: ");
    file = path.resolve(file);

    await createFolders(file);
}

init();