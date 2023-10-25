const Test = require("./src");

(() => {
    try {
        let arr = [[7], [0], [1, 1, 2], [0, 1, 0, 1, 0], [1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]]
        if (process.argv[2]) {
            arr = [JSON.parse(process.argv[2])]
        }
        for (const iterator of arr) {
            const test = new Test();
            const odd = test.findOddInt(iterator);
            console.log(`[${iterator.toString()}] should return ${odd}, because it occurs ${iterator.filter(i => i === odd).length} time (which is odd)`);
        }
    } catch (error) {
        console.error('error : ', error);
    } finally {
        process.exit(0);
    }
})()