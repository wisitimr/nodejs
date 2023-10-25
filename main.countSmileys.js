const Test = require("./src");

(() => {
    try {
        let arr = [[':)', ';(', ';}', ':-D'], [';D', ':-(', ':-)', ';~)'], [';]', ':[', ';*', ':$', ';-D'], []]
        if (process.argv[2]) {
            arr = [JSON.parse(process.argv[2])]
        }
        for (const iterator of arr) {
            console.log('should return ' + (new Test()).countSmileys(iterator));
        }
    } catch (error) {
        console.error('error : ', error);
    } finally {
        process.exit(0);
    }
})()