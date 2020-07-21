import { validURL } from "../src/client/js/validURL";

describe('Test, the function "validURL()" should exist' , () => {
    test('It should return true',  () => {
        expect(validURL).toBeDefined();
    });
});
describe('Test, the function "validURL()" should be a function' , () => {
    test('It should be a function', () => {
        expect(typeof validURL).toBe("function");
    });
});

