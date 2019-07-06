const fs = require('fs');
const promisify = require('util').promisify;
const readFile = promisify(fs.readFile);

(async () => {

    try {
        const data = await readFile('./11.txt');

        console.log(data.toString());
    } catch (error) {
        console.log(error);
    }

})();