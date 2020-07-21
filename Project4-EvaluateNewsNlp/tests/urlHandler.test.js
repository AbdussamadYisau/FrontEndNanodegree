import { handleSubmitArticle } from "../src/client/js/urlHandler";

describe('Test, the function "handleSubmitArticle()" should exist' , () => {
    test('It should return true',  () => {
        expect(handleSubmitArticle).toBeDefined();
    });
});
describe('Test, the function "handleSubmitArticle()" should be a function' , () => {
    test('It should be a function', () => {
        expect(typeof handleSubmitArticle).toBe("function");
    });
});

