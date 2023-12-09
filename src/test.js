class Test {
    constructor() { }

    permutations(input) {
        try {
            var result = input.split('')
                .reduce(function permute(res, item, key, arr) {
                    return res.concat(arr.length > 1 && arr.slice(0, key)
                        .concat(arr.slice(key + 1))
                        .reduce(permute, [])
                        .map(function (perm) {
                            return [item].concat(perm).join('');
                        }) || item);
                }, []);

            return [...new Set(result)];
        } catch (error) {
            console.error('error : ', error);
        }
    }

    findOddInt(arr) {
        try {
            for (let i = 0; i < arr.length; i++) {
                const count = arr.filter(value => value === arr[i]).length;
                if (count % 2 == 1) {
                    return arr[i];
                }
            }
            return -1;
        } catch (error) {
            console.error('error : ', error);
        }
    }

    countSmileys(arr) {
        try {
            const eyes = /[:;]/,
                noses = /[-~]/,
                smilingMouths = /[)D]/;

            let count = 0;
            arr.forEach(function (char) {
                if ((
                    eyes.test(char) &&
                    noses.test(char) &&
                    smilingMouths.test(char) &&
                    (char.length == 3)
                ) || (
                        eyes.test(char) &&
                        smilingMouths.test(char) &&
                        (char.length == 2)
                    )) count++
            })
            return count;
        } catch (error) {
            console.error('error : ', error);
        }
    }
}

module.exports = Test;
