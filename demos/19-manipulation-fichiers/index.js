import fs from 'fs';
import fsPromise from 'fs/promises';

const file = './text.txt';

fs.writeFileSync(file, 'hello world\n', {encoding: 'utf-8'})

fs.writeFile(file, 'how do you do?\n', {encoding: 'utf-8', flag: 'a+'}, (err) => {
    if(err) console.log(err.message);
});

(async() => await fsPromise.appendFile(file, `I'm fine\n`))();

fs.stat(file, (err, stats) => {
    if(err) console.log(err);

    console.log(stats.isDirectory());
    console.log(stats.size);
});