beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation(() => { });
});

afterEach(() => {
    console.log.mockRestore();
});

const importMainSafely = () => {
    jest.resetModules();
    try {
        require('../src/main');
    } catch (e) {
        throw new Error("Make sure you are working in main.js and the file exists.");
    }
};

describe('Console.log behavior', () => {
    test('should have exactly 4 console.log calls', () => {
        importMainSafely();
        try {
            expect(console.log).toBeCalledTimes(4);
        } catch (e) {
            throw new Error(`
Make sure you are using console.log exactly 4 times!
დარწმუნდით, რომ console.log -ი 4 ჯერ გიწერიათ!
`);
        }
    });

    test('[Task 1] should log the result of addition', () => {
        importMainSafely();
        try {
            expect(console.log).toHaveBeenNthCalledWith(1, expect.any(Number)); // Checks for 25 + 7
        } catch (e) {
            throw new Error(`
Make sure you are logging the correct result of addition. Also make sure console.log order is correct!
დარწმუნდით, რომ სწორად წერთ ჯამს. ასევე შეამოწმეთ: console.log-ის მიმდევრობა უნდა ემთხვეოდეს დავალებებს!
`);
        }
    });

    test('[Task 2] should log the result of multiplication', () => {
        importMainSafely();

        try {
            expect(console.log).toHaveBeenNthCalledWith(2, expect.any(Number)); // Checks for 25 * 7 * 9
        } catch (e) {
            throw new Error(`
Make sure you are logging the correct result of multiplication. Also make sure console.log order is correct!
დარწმუნდით, რომ სწორად წერთ გამრავლებას. ასევე შეამოწმეთ: console.log-ის მიმდევრობა უნდა ემთხვეოდეს დავალებებს!
`);
        }
    });

    test('[Task 3] should log the greeting message "Hello Nick"', () => {
        importMainSafely();
        try {
            expect(console.log).toHaveBeenNthCalledWith(3, expect.stringMatching(/Hello \w+/));

        } catch (e) {
            throw new Error(`
Make sure you are logging the correct message "Hello <name>". Also make sure console.log order is correct!
დარწმუნდით, რომ სწორად წერთ მესიჯს "Hello <name>" (hello და Hello განსხვავდება!). ასევე შეამოწმეთ: console.log-ის მიმდევრობა უნდა ემთხვეოდეს დავალებებს
`);
        }
    });

    test('[Task 4] should log the concatenated string (only characters are allowed)', () => {
        importMainSafely();
        // Make it work only for characters
        try {
            expect(console.log).toHaveBeenNthCalledWith(4, expect.stringMatching(/^[a-zA-Z]+$/));
        } catch (e) {
            throw new Error(`
Make sure you are concatenating only characters. Also make sure console.log order is correct!
გამოიყენეთ მხოლოდ სიმბოლოები კონკატენაციისას. ასევე შეამოწმეთ: console.log-ის მიმდევრობა უნდა ემთხვეოდეს დავალებებს!
`);
        }
    });
});
