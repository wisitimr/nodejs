const Test = require("./src");

(() => {
    try {
        let arr = ['a', 'ab', 'abc', 'aabb'];
        if (process.argv[2]) {
            arr = process.argv[2].split(',')
        }
        for (const iterator of arr) {
            const test = new Test()
            console.log(`With input '${iterator}':`);
            console.log('Your function should return ', test.permutations(iterator));
            console.log(' ');
        }
    } catch (error) {
        console.error('error : ', error);
    } finally {
        process.exit(0);
    }
})()